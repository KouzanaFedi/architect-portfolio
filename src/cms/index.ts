import { HomeData, Project, Project_Preview } from "./types";

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(
    query: string,
    { variables }: { variables?: Record<string, any> } = {},
) {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
            next: {
                revalidate: 10
            }
        });

        const json = await res.json();
        return json.data;

    } catch (error) {
        return undefined;
    }

};



export async function getAllProjects(): Promise<Project_Preview[]> {
    const data = await fetchCmsAPI(`
    {
        projectList {
          projects {
            order
            location
            prjType
            id
            alias
            title
            year
            thumbnail {
              width
              url
              basename
              height
            }
            description
          }
        }
      }
    `);
    return data.projectList.projects;
}

export async function getAllProjectsAlias(): Promise<{ alias: string }[]> {
    const data = await fetchCmsAPI(`
    {
        allProjects {
          alias
        }
    }`);

    return data.allProjects;
}

export async function getProjectDetail(alias: string): Promise<{ project: Project, allProjects: { alias: string }[] }> {
    const data = await fetchCmsAPI(`  
    query ProjectData ($alias: String!) {
        project (filter: {alias: {eq: $alias}}) {
            alias
            area
            description
            galery {
              height
              basename
              url
              width
            }
            id
            levels
            location
            order
            prjType
            title
            year
            youtubeId
        }
        allProjects (orderBy: order_DESC) {
            alias
        }
    }`,
        { variables: { alias } },);
    return data;
}

export async function getHome(): Promise<HomeData> {
    const data = await fetchCmsAPI(`
    {
        home {
          quote
          quoteAuthor
          image {
            basename
            height
            url
            width
          }
          information {
            id
            title
            description
          }
          service {
            id
            title
            description
          }
          featuredProject {
            id
            title
            order
            thumbnail {
              basename
              height
              url
              width
            }
            alias
          }
        }
    }
    `);

    return data.home;
}




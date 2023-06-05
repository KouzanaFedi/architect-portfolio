import { notFound } from "next/navigation";
import { getAllProjectsAlias, getProjectDetail } from "@/cms";
import ProjectPage from "@/components/projectPage";
import AnimatedLayout from "@/components/layout/AnimatedLayout";

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllProjectsAlias();
  return posts.map((post) => ({
    alias: post.alias,
  }));
}

async function getData(params: { alias: string }) {
  const { project, allProjects } = await getProjectDetail(params.alias);
  if (!project) {
    notFound();
  }

  const currentProjectIndex = allProjects.findIndex(
    (al) => al.alias === params.alias
  );

  const nextProject =
    allProjects[(currentProjectIndex + 1) % allProjects.length].alias;

  const prevProjectIndex = currentProjectIndex - 1;
  const prevProject =
    allProjects[
      prevProjectIndex < 0 ? allProjects.length - 1 : prevProjectIndex
    ].alias;

  return { projectData: project, nextProject, prevProject };
}

export default async function Project({
  params,
}: {
  params: { alias: string };
}) {
  const { nextProject, prevProject, projectData } = await getData(params);

  return (
    <AnimatedLayout>
      <ProjectPage
        data={projectData}
        nextProject={nextProject}
        prevProject={prevProject}
      />
    </AnimatedLayout>
  );
}

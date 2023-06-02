import { getAllProjects } from "@/cms";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ProjectCard from "@/components/projectCard";

async function getData() {
  const response = await getAllProjects();
  return response;
}

export default async function Projects() {
  const data = await getData();
  return (
    <div className="pt-28">
      <Header />
      <main>
        <section className="w-screen pt-12">
          <div className="container px-2 mx-auto">
            <h1 className="tracking-tighter text-5xl font-semibold uppercase">
              Projects
            </h1>
            <div className="grid grid-cols-1 gap-12 my-12 lg:grid-cols-2">
              {data.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

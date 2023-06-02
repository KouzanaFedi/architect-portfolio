import { Project_Preview } from "@/cms/types";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

type Props = {
  project: Project_Preview;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      href={`/projects/${project.alias}`}
      className="group border-b border-arch-black pb-12"
    >
      <div className="relative isolate after:absolute after:content-[''] after:block after:inset-0 after:bg-slate-800/30">
        <Image
          className="aspect-video"
          height={project.thumbnail.height}
          width={project.thumbnail.width}
          src={project.thumbnail.url}
          alt={project.title}
        />
        <div className="absolute z-10 top-5 right-5 border-2 text-white border-white p-2 rounded-full text-2xl">
          <HiOutlineArrowUpRight />
        </div>
      </div>
      <div className="flex px-2 pt-8">
        <div className="w-1/4 flex justify-start">
          <div className="isolate overflow-hidden transition-colors ease-in-out duration-500 relative text-5xl font-arch-fancy p-2 h-min font-bold after:content-[''] after:absolute after:inset-x-0 after:-z-10 after:ease-in-out after:transition-transform after:-top-full after:duration-500 after:h-full after:bg-arch-orange group-hover:after:translate-y-full group-hover:text-white">
            {project.order.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="w-3/4">
          <h2 className="tracking-tighter text-3xl font-semibold mb-4">
            {project.title}
          </h2>
          <p className="tracking-wider line-clamp-2 font-arch-fancy text-xl mb-8">
            {project.description}
          </p>
          <div className="flex items-start justify-between text-gray-400 md:items-center">
            <div className="flex flex-col items-start gap-4 md:gap-8 md:flex-row md:items-center">
              {project.year && <div>{project.year}</div>}
              {project.location && <div>{project.location}</div>}
            </div>
            {project.prjType && <div>{project.prjType}</div>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import PROJECT_B from "~/projectB.jpg";
type Props = {};

const ProjectCard = ({}: Props) => {
  return (
    <Link href={"#"} className="group border-b border-arch-black pb-12">
      <div className="relative isolate after:absolute after:content-[''] after:block after:inset-0 after:bg-slate-800/30">
        <Image className="aspect-video" src={PROJECT_B} alt="projectA" />
        <div className="absolute z-10 top-5 right-5 border-2 text-white border-white p-2 rounded-full text-2xl">
          <HiOutlineArrowUpRight />
        </div>
      </div>
      <div className="flex px-2 pt-8">
        <div className="w-1/4 flex justify-start">
          <div className="isolate overflow-hidden transition-colors ease-in-out duration-500 relative text-5xl font-arch-fancy p-2 h-min font-bold after:content-[''] after:absolute after:inset-x-0 after:-z-10 after:ease-in-out after:transition-transform after:-top-full after:duration-500 after:h-full after:bg-arch-orange group-hover:after:translate-y-full group-hover:text-white">
            01
          </div>
        </div>
        <div className="w-3/4">
          <h2 className="tracking-tighter text-3xl font-semibold mb-4">
            Project A - Architect masterpiece
          </h2>
          <p className="tracking-wider line-clamp-2 font-arch-fancy text-xl mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            quibusdam nostrum blanditiis voluptatem, nobis cupiditate, officia
            obcaecati illum, optio ipsum ipsa facilis. A voluptate repudiandae
            doloribus culpa vero possimus et.
          </p>
          <div className="flex items-center justify-between text-gray-400">
            <div className="flex items-center gap-8">
              <div>2023</div>
              <div>Hammem Sousse</div>
            </div>
            <div>Residential</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

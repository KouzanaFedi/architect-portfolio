import Link from "next/link";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

type Props = {
  image: string;
  index: number;
};

const ProjectItem = ({ image, index }: Props) => {
  return (
    <div
      className={`scrollable-item absolute ${
        index > 0 ? "top-full shadow-top " : "top-0 shadow-none"
      }`}
    >
      <img
        className="height-full w-screen object-cover object-center"
        src={image}
        alt="Image 1"
        style={{
          zIndex: index,
        }}
      />
      <div className="absolute inset-0 bg-slate-800/30 grid place-items-center">
        <div className="flex flex-col gap-2 items-center lg:items-start lg:flex-row">
          <div className="text-white text-2xl">01</div>
          <div className="font-arch-fancy max-w-md text-white text-5xl text-center md:text-7xl">
            De Beauvoir Townhouse
          </div>
          <Link
            href={"/projects/1"}
            className="group relative flex items-center gap-2 top-10 lg:right-10 lg:absolute"
          >
            <div className="border-2 isolate text-white transition-color duration-500 ease-in-out overflow-hidden border-white p-2 rounded-full text-2xl relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[150%] before:-translate-x-1/2 before:-translate-y-[150%] before:aspect-square before:bg-white before:transition-transform before:-z-10 before:duration-500 before:ease-in-out group-hover:before:-translate-y-1/2 group-hover:text-arch-black">
              <HiOutlineArrowDownRight />
            </div>
            <div className="isolate transition-color duration-500 ease-in-out overflow-hidden text-white border-2 border-white py-2 px-8 rounded-full text-2xl relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[150%] before:-translate-x-1/2 before:-translate-y-[150%] before:aspect-square before:bg-white before:transition-transform before:-z-10 before:duration-500 before:ease-in-out group-hover:before:-translate-y-1/2 group-hover:text-arch-black">
              View Work
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

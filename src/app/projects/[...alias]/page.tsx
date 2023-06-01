"use client";
import { useState } from "react";
import LOGO from "~/logo.svg";
import PRESS from "~/press.svg";
import ProjectB from "~/projectB.jpg";
import Image from "next/image";
import { GiPolarStar } from "react-icons/gi";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiPlay,
} from "react-icons/hi2";
import Link from "next/link";
import VideoOverlay from "@/components/videoOverlay";
import NavItem from "@/components/layout/HeaderItem";

const Project = () => {
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <section className="w-screen flex flex-col relative lg:flex-row">
      <div className="w-full h-auto relative lg:w-1/3 lg:max-h-screen lg:h-screen">
        <div className="p-4 overflow-y-auto lg:h-[calc(100vh-7rem)]">
          <div className="flex justify-between items-center mb-12 mt-4">
            <Link href={"/"}>
              <Image src={LOGO} alt="Mourad Rziga" />
            </Link>
            <nav>
              <ul>
                <NavItem href="/" title="Home" />
                <NavItem href="/projects" title="Projects" />
              </ul>
            </nav>
          </div>
          <div className="pl-4 md:pl-8">
            <h1 className="text-5xl font-light leading-tight ml-8 mb-4 relative after:absolute after:content-[''] after:h-1 after:w-12 after:bg-arch-orange after:left-6 after:-bottom-4 md:text-5xl md:pl-12 after:md:left-12">
              Project A - Architect masterpiece
              <span className="inline-block p-1 text-lg text-arch-orange -mb-4">
                <GiPolarStar />
              </span>
            </h1>
            <p className="pt-8 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolores, molestias tenetur soluta exercitationem omnis consequatur
              veniam doloremque hic, iure obcaecati perferendis minima quae
              aliquid placeat porro officia optio? Minus.
            </p>
            <div className="mt-12 flex items-start justify-between">
              <div className="pr-8">
                <div className="flex items-baseline gap-2 text-sm">
                  <span className="font-arch-fancy">Area:</span>
                  <span className="text-xl font-light">170m²</span>
                </div>
                <div className="flex items-baseline gap-2 text-sm">
                  <span className="font-arch-fancy">Year:</span>
                  <span className="text-xl font-light">2023</span>
                </div>
                <div className="flex items-baseline gap-2 text-sm">
                  <span className="font-arch-fancy">Type:</span>
                  <span className="text-xl font-light">Residence</span>
                </div>
                <div className="flex items-baseline gap-2 text-sm">
                  <span className="font-arch-fancy">Location:</span>
                  <span className="text-xl font-light">Ghadi</span>
                </div>
              </div>
              <button
                className="fixed right-8 top-[150px] z-10 lg:relative lg:top-0"
                onClick={() => {
                  setOpenOverlay(true);
                }}
              >
                <Image className="animate-spin-slow" src={PRESS} alt="press" />
                <HiPlay className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-arch-orange text-4xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-28 mt-8 inset-x-0 flex lg:absolute lg:mt-0 lg:bottom-0">
          <button className="group w-1/2 bg-arch-gray h-full flex justify-center items-center transition-colors duration-500 hover:bg-arch-black">
            <div className="flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
              <div className="p-2 text-2xl">
                <HiOutlineArrowLeft />
              </div>
              <div className="px-8 text-2xl">Prev</div>
            </div>
          </button>
          <button className="group w-1/2 h-full bg-arch-black flex justify-center items-center transition-colors duration-500 hover:bg-transparent">
            <div className="flex items-center gap-2 text-white transition-colors duration-500 group-hover:text-arch-black">
              <div className="px-8 text-2xl">Next</div>
              <div className="p-2 text-2xl">
                <HiOutlineArrowRight />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-2/3 lg:min-h-screen lg:max-h-screen h-full flex flex-col gap-y-2 bg-fk-white dark:bg-fk-black-blue lg:overflow-y-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Image key={item} src={ProjectB} alt="pic" />
        ))}
      </div>
      <VideoOverlay
        openOverlay={openOverlay}
        closeOverlay={() => {
          setOpenOverlay(false);
        }}
      />
    </section>
  );
};

export default Project;

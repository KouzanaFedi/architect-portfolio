"use client";

import { useRef, useEffect } from "react";
import ProjectItem from "./projectItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HiListBullet } from "react-icons/hi2";
import Link from "next/link";
import { FeaturedProject } from "@/cms/types";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  projects: FeaturedProject[];
};

const Projects = ({ projects }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const NB = 4;

  function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setVH();
    window.addEventListener("resize", () => {
      setVH();
    });

    () => {
      window.removeEventListener("resize", () => {
        setVH();
      });
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".scrollable-item", {
        top: 0,
        ease: "none",
        stagger: 1,
      });
      ScrollTrigger.create({
        animation: tl,
        trigger: ref.current,
        start: "top top",
        end: () => "+=" + (window.innerHeight * (NB - 1)) / 2,
        invalidateOnRefresh: true,
        pin: true,
        refreshPriority: 1,
        scrub: 0,
      });
      ScrollTrigger.config({ ignoreMobileResize: true });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={ref} className="height-full relative">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} index={index} project={project} />
        ))}
      </div>
      <div className="w-screen h-32 bg-arch-orange relative element-main">
        <div className="container mx-auto h-full grid place-items-center text-4xl font-light text-white">
          <Link href={"/projects"} className="flex items-center gap-4">
            <div className="border-2 border-white rounded-full p-2">
              <HiListBullet />
            </div>
            <span>See all projects</span>
          </Link>
        </div>
        <div className="w-screen absolute top-0 left-0 bottom-0 element-mask bg-arch-black">
          <div className="container mx-auto h-full grid place-items-center text-4xl font-light text-white">
            <Link href={"/projects"} className="flex items-center gap-4">
              <div className="border-2 border-white rounded-full p-2">
                <HiListBullet />
              </div>
              <span>See all projects</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

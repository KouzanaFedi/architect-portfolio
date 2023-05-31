import FieldItem from "@/components/fieldItem";
import Projects from "@/components/projects";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { GiPolarStar } from "react-icons/gi";
import BG_PIC from "~/picture1.jpg";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="pt-28">
      <Header />
      <main className="min-h-screen">
        <section className="w-screen">
          <div className="container mx-auto pt-24 px-2 text-8xl">
            <h1 className="-tracking-wider">
              Innovative Architecture<span className="font-arch-fancy">,</span>
            </h1>
            <div className="flex justify-between mt-12">
              <div className="w-1/2 flex items-end">
                <Link
                  href={"#projects"}
                  className="group flex items-center gap-2"
                >
                  <div className="border-2 isolate transition-color duration-500 ease-in-out overflow-hidden border-arch-black p-2 rounded-full text-2xl relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[150%] before:-translate-x-1/2 before:-translate-y-[150%] before:aspect-square before:bg-arch-black before:transition-transform before:-z-10 before:duration-500 before:ease-in-out group-hover:before:-translate-y-1/2 group-hover:text-white">
                    <HiOutlineArrowDownRight />
                  </div>
                  <div className="isolate transition-color duration-500 ease-in-out overflow-hidden border-2 border-arch-black py-2 px-8 rounded-full text-2xl relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[150%] before:-translate-x-1/2 before:-translate-y-[150%] before:aspect-square before:bg-arch-black before:transition-transform before:-z-10 before:duration-500 before:ease-in-out group-hover:before:-translate-y-1/2 group-hover:text-white">
                    View Work
                  </div>
                </Link>
              </div>
              <div className="w-1/2 tracking-tighter">Timeless Beauty</div>
            </div>
          </div>
        </section>
        <section className="w-screen h-[700px] my-12">
          <div className="h-full w-full relative">
            <Image
              className="object-cover w-full h-full"
              src={BG_PIC}
              alt="pic"
            />
            <div className="absolute inset-0 bg-slate-800/30 p-12 flex items-end">
              <blockquote className="max-w-xl text-2xl text-white font-light">
                <q>
                  Good buildings come from good people, and all problems are
                  solved by good design.
                </q>
                <figcaption className="text-xl mt-4 text-end">
                  —Stephen Gardiner
                </figcaption>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="w-screen">
          <div className="container px-2 mx-auto">
            <div className="flex pt-8 mb-16 border-t-2 border-arch-black">
              <div className="w-1/3">(Description)</div>
              <div className="w-2/3">
                <p className="text-2xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia nemo ut doloremque, quibusdam adipisci illo distinctio
                  porro voluptatum dolores debitis molestiae possimus. Modi
                  itaque consequatur sed aperiam nostrum suscipit voluptatem.
                </p>
              </div>
            </div>
            <div className="flex pt-8 mb-16 border-t-2 border-arch-black font-normal">
              <div className="w-1/3">(Description)</div>
              <div className="w-2/3">
                <p className="text-2xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia nemo ut doloremque, quibusdam adipisci illo distinctio
                  porro voluptatum dolores debitis molestiae possimus. Modi
                  itaque consequatur sed aperiam nostrum suscipit voluptatem.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen mt-16 pt-16 pb-8 bg-arch-orange">
          <h2 className="container mx-auto pb-2">(What we do)</h2>
          <FieldItem
            title="3D"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia at soluta suscipit mollitia dolorum a veniam consequatur, nesciunt dolor."
          />
          <FieldItem
            title="Interior"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia at soluta suscipit mollitia dolorum a veniam consequatur, nesciunt dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia at soluta suscipit mollitia dolorum a veniam consequatur, nesciunt dolor."
          />
          <FieldItem
            title="Exterior"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia at soluta suscipit mollitia dolorum a veniam consequatur, nesciunt dolor."
          />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section className="w-screen my-12">
          <div className="container px-2 mx-auto flex">
            <div className="w-2/3 font-arch-fancy leading-normal text-7xl">
              Designing <br /> the Future{" "}
              <span className="inline-block border-4 border-arch-black rounded-full p-1 text-5xl -mb-3">
                <GiPolarStar />
              </span>{" "}
              Today
            </div>
            <div className="w-1/3 flex justify-end items-end pb-4">
              <Link href={"#"} className="group flex items-center gap-2">
                <div className="border-2 isolate transition-color duration-500 ease-in-out overflow-hidden border-arch-black p-2 rounded-full text-2xl relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[150%] before:-translate-x-1/2 before:-translate-y-[150%] before:aspect-square before:bg-arch-black before:transition-transform before:-z-10 before:duration-500 before:ease-in-out group-hover:before:-translate-y-1/2 group-hover:text-white">
                  <HiOutlineMail />
                </div>
                <div className="isolate transition-color duration-500 ease-in-out overflow-hidden border-2 border-arch-black py-2 px-8 rounded-full text-2xl relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[150%] before:-translate-x-1/2 before:-translate-y-[150%] before:aspect-square before:bg-arch-black before:transition-transform before:-z-10 before:duration-500 before:ease-in-out group-hover:before:-translate-y-1/2 group-hover:text-white">
                  Get in Touch
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

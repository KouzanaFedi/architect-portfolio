import FieldItem from "@/components/fieldItem";
import Projects from "@/components/projects";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getHome } from "@/cms";

async function getData() {
  const response = await getHome();
  return response;
}

export default async function Home() {
  const data = await getData();
  
  return (
    <div className="pt-28">
      <Header />
      <main className="min-h-screen">
        <section className="w-screen">
          <div className="container mx-auto pt-24 px-2 text-4xl lg:text-8xl md:text-6xl">
            <h1 className="-tracking-wider">
              Innovative Architecture<span className="font-arch-fancy">,</span>
            </h1>
            <div className="flex justify-between md:mt-12 flex-col-reverse md:flex-row">
              <div className="w-full flex items-end justify-center mt-8 md:justify-start md:mt-0 md:w-1/2">
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
              <div className="w-full tracking-tighter md:w-1/2">
                Timeless Beauty
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen h-[700px] my-12">
          <div className="h-full w-full relative">
            <Image
              className="object-cover w-full h-full"
              src={data.image.url}
              height={data.image.height}
              width={data.image.width}
              alt="pic"
            />
            <div className="absolute inset-0 bg-slate-800/30 p-12 flex items-end">
              <blockquote className="max-w-xl text-2xl text-white font-light">
                <q>{data.quote}</q>
                <figcaption className="text-xl mt-4 text-end">
                  —{data.quoteAuthor}
                </figcaption>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="w-screen">
          <div className="container px-2 mx-auto">
            {data.information.map(({ id, description, title }) => (
              <div
                key={id}
                className="flex flex-col gap-4 pt-8 mb-16 border-t-2 border-arch-black md:flex-row"
              >
                <div className="w-full md:w-1/3">({title})</div>
                <div className="w-full md:w-2/3">
                  <p className="text-2xl">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-screen mt-16 pt-16 pb-8 bg-arch-orange">
          <h2 className="container mx-auto pb-2 px-2">(What we do)</h2>
          {data.service.map(({ id, description, title }) => (
            <FieldItem key={id} title={title} description={description} />
          ))}
        </section>
        <section id="projects">
          <Projects projects={data.featuredProject} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

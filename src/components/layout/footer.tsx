import Image from "next/image";
import Link from "next/link";
import LOGO from "~/logo-white.svg";
import LOGO_FK from "~/logo-fk.svg";
import * as SETTINGS from "@/utils/settings";
import { GiPolarStar } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <section className="w-screen my-12">
        <div className="container px-2 mx-auto flex pb-4 flex-col gap-4 lg:flex-row">
          <div className="w-full font-arch-fancy leading-normal text-center text-5xl lg:w-2/3 lg:text-start md:text-7xl">
            Designing <br /> the Future{" "}
            <span className="inline-block border-2 border-arch-black rounded-full p-1 text-3xl -mb-2 md:border-4 md:text-5xl md:-mb-3">
              <GiPolarStar />
            </span>{" "}
            Today
          </div>
          <div className="w-full flex items-end justify-center mt-8 lg:mt-0 lg:w-1/3 lg:justify-end">
            <Link
              target="_blank"
              href={SETTINGS.EMAIL}
              className="group flex items-center gap-2"
            >
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
      <footer className="w-screen bg-arch-black text-white">
        <div className="container mx-auto pt-16 pb-6 px-2">
          <div className="grid grid-cols-2 place-items-stretch gap-4 lg:grid-cols-3">
            <div className="col-span-2 flex justify-center mb-4 lg:col-span-1">
              <Image className="w-full px-8 md:max-w-sm" src={LOGO} alt="Mourad Rziga" />
            </div>
            <div className="md:mx-auto">
              <div className="text-2xl font-semibold mb-4 font-arch-fancy">
                Quick Links
              </div>
              <ul className="text-xl flex flex-col gap-2 text-gray-300">
                <Link href={"/"}>
                  <li>Home</li>
                </Link>
                <Link href={"/projects"}>
                  <li>Projects</li>
                </Link>
              </ul>
            </div>
            <div className="md:mx-auto">
              <div className="text-2xl font-semibold mb-4 font-arch-fancy">
                Socials
              </div>
              <ul className="text-xl flex flex-col gap-2 text-gray-300">
                <Link target="_blank" href={SETTINGS.LINKEDIN}>
                  <li>LinkedIn</li>
                </Link>
                <Link target="_blank" href={SETTINGS.INSTAGRAM}>
                  <li>Instagram</li>
                </Link>
                <Link target="_blank" href={SETTINGS.EMAIL}>
                  <li>E-mail</li>
                </Link>
                <Link target="_blank" href={SETTINGS.WHATSAPP}>
                  <li>WhatsApp</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center lg:text-start">
            {`${new Date().getFullYear()} © All rights reserved `}
            <span>
              | Made by{" "}
              <Link
                href={"https://fedi.kouzana.com"}
                className="inline-block font-semibold transition-all duration-300 pl-1"
              >
                <Image
                  aria-label="Fedi Kouzana"
                  className="inline-block h-9 w-auto -mt-0.5 fill-current text-arch-orange"
                  src={LOGO_FK}
                  alt="Fedi Kouzana"
                />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

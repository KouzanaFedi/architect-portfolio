import Image from "next/image";
import Link from "next/link";
import LOGO from "~/logo-white.svg";
import LOGO_FK from "~/logo-fk.svg";
import * as SETTINGS from "@/utils/settings";

const Footer = () => {
  return (
    <footer className="w-screen bg-arch-black text-white">
      <div className="container mx-auto py-16 px-2">
        <div className="grid grid-cols-3 gap-4 ">
          <Image src={LOGO} alt="Mourad Rziga" />
          <div className="mx-auto">
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
          <div className="mx-auto">
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
        <div>
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
  );
};

export default Footer;

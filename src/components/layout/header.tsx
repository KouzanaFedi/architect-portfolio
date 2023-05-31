import Image from "next/image";
import Link from "next/link";
import LOGO from "~/logo.svg";
import NavItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="w-full absolute top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        <Link href={"/"} aria-label="Mourad Rziga">
          <Image
            className="fill-current text-red-700"
            src={LOGO}
            alt="Mourad Rziga"
          />
        </Link>
        <nav>
          <ul>
            <NavItem href="/" title="Home" />
            <NavItem href="/projects" title="Projects" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

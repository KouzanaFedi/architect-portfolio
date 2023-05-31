import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

const NavItem = ({ title, href }: Props) => {
  return (
    <li className="h-6 overflow-hidden group">
      <Link
        className="uppercase tracking-wider font-arch-fancy text-end font-semibold"
        href={href}
        scroll={false}
      >
        <div className="text-arch-black transition-transform duration-300 presrve-3d group-hover:-translate-y-6">
          {title}
        </div>
        <div className="text-arch-black transition-transform duration-300 presrve-3d group-hover:-translate-y-6">
          {title}
        </div>
      </Link>
    </li>
  );
};

export default NavItem;

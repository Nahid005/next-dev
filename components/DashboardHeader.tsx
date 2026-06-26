import Link from "next/link";

export default function DashboardHeader() {
  return (
    <nav className="px-5 py-3 bg-yellow-500 shadow-2xl mb-4">
      <ul className="flex w-full gap-3">
        <li>
          <Link className="text-gray-700" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-gray-700" href={"/service"}>
            Service
          </Link>
        </li>
        <li>
          <Link className="text-gray-700" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="text-gray-700" href={"/contact"}>
            Get in touch
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import {
  Broccoli,
  LogIn,
  MessageSquare,
  PackageSearch,
  Search,
  UsersRound,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="flex flex-col h-full w-full justify-between">
      <ul className="flex flex-col gap-2">
        <li className="px-4 py-2 hover:bg-blue-950 duration-300 ease-in-out">
          <Link
            className="flex gap-1 text-gray-400 hover:text-gray-300"
            href={"/dashboard/products"}
          >
            <Broccoli /> <span>Products</span>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-blue-950 duration-300 ease-in-out">
          <Link
            className="flex gap-1 text-gray-400 hover:text-gray-300"
            href={"/dashboard/products/search"}
          >
            <Search /> <span>Products Search</span>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-blue-950 duration-300 ease-in-out">
          <Link
            className="flex gap-1 text-gray-400 hover:text-gray-300"
            href={"/dashboard/orders"}
          >
            <PackageSearch />
            <span>Orders</span>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-blue-950 duration-300 ease-in-out">
          <Link
            className="flex gap-1 text-gray-400 hover:text-gray-300"
            href={"/dashboard/users"}
          >
            <UsersRound />
            <span>Users</span>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-blue-950 duration-300 ease-in-out">
          <Link
            className="flex gap-1 text-gray-400 hover:text-gray-300"
            href={"/dashboard/comments"}
          >
            <MessageSquare /> <span>Comments</span>
          </Link>
        </li>
      </ul>
      <div className="px-4 py-2 hover:bg-blue-950 duration-300 ease-in-out">
        <Link
          className="flex gap-1 text-gray-400 hover:text-gray-300"
          href={"/dashboard/login"}
        >
          <LogIn />
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
}

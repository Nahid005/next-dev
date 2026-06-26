import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2.5 h-screen items-center justify-center">
      <h1 className="text-3xl font-bold tracking-normal leading-10 text-shadow-blue-900 text-blue-900">
        Welcome to the dashboard
      </h1>
      <Link
        className="bg-blue-800 text-gray-200 rounded px-5 py-2.5 shadow-2xl cursor-pointer"
        href={"/dashboard"}
      >
        Go To Dashboard
      </Link>
    </div>
  );
}

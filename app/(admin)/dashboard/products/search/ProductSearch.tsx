"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    searchParams.get("search") ?? "",
  );

  useEffect(() => {
    const searchTimeOutId = setTimeout(() => {
      const currentUrlSearch = searchParams.get("search") ?? "";

      if (searchQuery?.trim() === currentUrlSearch.trim()) {
        return;
      }

      const params = new URLSearchParams(searchParams.toString());

      if (searchQuery?.trim()) {
        params.set("search", searchQuery.trim());
      } else {
        params.delete("search");
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return () => clearTimeout(searchTimeOutId);
  }, [searchQuery, searchParams, pathname, router]);

  return (
    <form className="w-full max-w-full mx-auto">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search />
        </div>
        <input
          type="search"
          id="default-search"
          placeholder="Search mockups, logos..."
          className="w-full p-4 pl-11 pr-24 text-sm text-gray-900 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />
        <button
          type="submit"
          className="absolute right-2 bottom-2 top-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 transition-all"
        >
          Search
        </button>
      </div>
    </form>
  );
}

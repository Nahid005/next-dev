import SectionTitle from "@/components/SectionTitle";
import { Suspense } from "react";

export default async function Comments() {
  return (
    <div className="">
      <SectionTitle
        title="Comments List"
        subtitle="The comments endpoint provides a dataset"
      />

      <div className="overflow-x-auto rounded-lg border border-gray-200 max-h-[calc(100dvh-190px)] overflow-y-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Comments
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Full Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Likes
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Post ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Action
              </th>
            </tr>
          </thead>

          <Suspense></Suspense>
        </table>
      </div>
    </div>
  );
}

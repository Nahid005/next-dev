import SectionTitle from "@/components/SectionTitle";
import { Suspense } from "react";
import UserRows, { TableBodySkeleton } from "./UserRows";

export default function Users() {
  return (
    <div className="">
      <SectionTitle
        title="Users List"
        subtitle="The users endpoint provides a versatile dataset"
      />

      <div className="overflow-x-auto rounded-lg border border-gray-200 max-h-[calc(100dvh-190px)] overflow-y-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Gender
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Phone
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Role
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                University
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Address
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Action
              </th>
            </tr>
          </thead>

          <Suspense fallback={<TableBodySkeleton />}>
            <UserRows />
          </Suspense>
        </table>
      </div>
    </div>
  );
}

import SectionTitle from "@/components/SectionTitle";
import { Suspense } from "react";
import OrdersRows, { TableBodySkeleton } from "./OrdersRows";

export default function Orders() {
  return (
    <div className="">
      <SectionTitle
        title="Orders List"
        subtitle="The recipes endpoint offers a dataset"
      />

      <div className="overflow-x-auto rounded-lg border border-gray-200 max-h-[calc(100dvh-190px)] overflow-y-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm overflow-x-auto">
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
                Cuisine
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Ingredients
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Instructions
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Cook Time Minutes
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Tags
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Action
              </th>
            </tr>
          </thead>

          <Suspense fallback={<TableBodySkeleton />}>
            <OrdersRows />
          </Suspense>
        </table>
      </div>
    </div>
  );
}

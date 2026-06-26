import SectionTitle from "@/components/SectionTitle";
import { Suspense } from "react";
import ProductRows, { TableBodySkeleton } from "./ProductRows";

export default async function Products() {
  return (
    <div className="">
      <SectionTitle
        title="Products List"
        subtitle="State the main benefit or the specific audience"
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
                Brand
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-end">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-end">
                Stock
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
            <ProductRows />
          </Suspense>
        </table>
      </div>
    </div>
  );
}

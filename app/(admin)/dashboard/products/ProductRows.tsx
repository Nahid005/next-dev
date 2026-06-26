import Spinner from "@/components/Spinner";
import { getProducts } from "@/services/products";
import Image from "next/image";

export default async function ProductRows() {
  const products = await getProducts();

  return (
    <tbody className="divide-y divide-gray-200 max-h-full">
      {products?.products.map((product) => (
        <tr key={product?.id} className="hover:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
            {product?.id}
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
            <Image
              src={product?.thumbnail}
              width={40}
              height={40}
              alt={product?.title}
            />
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {product?.title}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {product?.brand}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {product?.category}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-end">
            {product?.price}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-end">
            {product?.stock}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {product?.brand}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            X
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export function TableBodySkeleton() {
  return (
    <tbody>
      <tr>
        <td colSpan={9} className="py-20 text-center">
          <Spinner />
        </td>
      </tr>
    </tbody>
  );
}

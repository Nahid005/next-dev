import Spinner from "@/components/Spinner";
import { getOrders } from "@/services/products";
import Image from "next/image";

export default async function OrdersRows() {
  const orders = await getOrders();

  console.log("Orders list", orders);

  return (
    <tbody className="divide-y divide-gray-200 max-h-full">
      {orders?.recipes.map((order) => (
        <tr key={order?.id} className="hover:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
            {order?.id}
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
            <Image
              src={order?.image}
              width={40}
              height={40}
              alt={order?.name}
            />
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {order?.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {order?.cuisine}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {order?.ingredients[0]}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {order?.instructions[0]}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {order?.cookTimeMinutes}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {order?.tags[0]}
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
        <td colSpan={9} className=" text-center">
          <Spinner />
        </td>
      </tr>
    </tbody>
  );
}

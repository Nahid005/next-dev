import Spinner from "@/components/Spinner";
import { getUsers } from "@/services/products";
import Image from "next/image";

export default async function UserRows() {
  const users = await getUsers();
  return (
    <tbody className="divide-y divide-gray-200 max-h-full">
      {users?.users.map((user) => (
        <tr key={user?.id} className="hover:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
            {user?.id}
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
            <Image
              src={user?.image}
              width={40}
              height={40}
              alt={user?.firstName}
            />
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {user?.firstName}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {user?.gender}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {user?.phone}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {user?.role}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {user?.university}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {user?.address?.address}
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

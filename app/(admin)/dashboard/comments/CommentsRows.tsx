import { getComments } from "@/services/products";

export interface User {
  fullName?: string;
}

export interface CommentType {
  id: number;
  body: string;
  fullName: User;
  likes: number;
  postId: number;
}

export default async function CommentsRows() {
  const comments = await getComments();
  return (
    <tbody className="divide-y divide-gray-200 max-h-full">
      {comments?.comments.map((comment: CommentType) => (
        <tr key={comment?.id} className="hover:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
            {comment?.id}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {comment?.body}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {comment?.user?.fullName}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {comment?.likes}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            {comment?.postId}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-start">
            X
          </td>
        </tr>
      ))}
    </tbody>
  );
}

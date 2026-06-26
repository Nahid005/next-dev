export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col bg-gray-200 px-5 py-2 rounded gap-1 border-b border-b-gray-500 mb-4">
      <h2 className="font-bold text-xl text-gray-800 mb-0">
        {title ? title : ""}
      </h2>
      <p className="font-normal text-sm text-gray-500">
        {subtitle ? subtitle : ""}
      </p>
    </div>
  );
}

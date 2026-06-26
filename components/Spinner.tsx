export default function Spinner() {
  return (
    <div className="inline-flex flex-col items-center gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      <span className="text-gray-500 font-medium text-sm">
        Loading products...
      </span>
    </div>
  );
}

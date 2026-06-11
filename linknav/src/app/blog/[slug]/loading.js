// app/blog/[slug]/loading.js
export default function Loading() {
  return (
    <div className=" px-4 py-8">
      {/* Blog Header Skeleton */}
      <div className="mb-8">
        <div className="h-10 w-64 bg-gray-200 rounded-lg animate-pulse mb-3" />
        <div className="h-6 w-96 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Product Listing Skeleton */}
      <div className="mb-6">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6" />
      </div>
    </div>
  );
}
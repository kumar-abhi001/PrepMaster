// components/SkeletonCard.jsx
const skeletonCard = () => {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-white animate-pulse space-y-4">
      {/* Title placeholder */}
      Loading
      <div className="h-5 bg-gray-300 rounded w-3/4"></div>
      {/* Subtitle placeholder */}
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      {/* Large content block */}
      <div className="h-32 bg-gray-200 rounded"></div>
      {/* Optional smaller lines */}
      <div className="h-3 bg-gray-300 rounded w-full"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
};

export { skeletonCard };

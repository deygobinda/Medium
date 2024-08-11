export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md">
        <div className="flex flex-col">
          <div className="flex justify-center flex-col">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
          <div className="font-extralight pl-2 flex justify-center flex-col">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
          <div className="flex justify-center  items-center pl-2">
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
          </div>
          <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
          </div>
        </div>
        <div className="text-xl font-semibold">
          <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
          <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        </div>
        <div className="w-full text-slate-400 text-sm font-thin">
          <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

<div role="status" className="max-w-sm animate-pulse">
  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
</div>;

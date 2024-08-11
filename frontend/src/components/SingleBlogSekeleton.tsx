import { Appbar } from "./Appbar";

export const SingleBlogSekeleton = () => {
  return (
    <div>
      <Appbar />
      <div role="status" className=" animate-pulse">
        <div className="flex justify-center  pt-32">
          <div className="grid grid-cols-12 px-10 w-full  max-w-screen-2xl">
            <div className="col-span-8">
              <div className="text-5xl font-extrabold">
                <div className="h-7 bg-gray-200 rounded-full  w-48 mb-4"></div>
              </div>
              <div className="text-slate-500 pt-4">
                <div className="h-5 bg-gray-200 rounded-full  max-w-full mb-2.5"></div>
              </div>
              <div className="pt-4">
                <div className="h-6 bg-gray-200 rounded-full max-w-full mb-2.5"></div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="pl-20">
                <div className="text-slate-600">
                <div className="h-2.5 bg-gray-200 rounded-full  w-24 mb-4"></div>
                </div>
                <div className="flex gap-4 items-center pt-4">
                  <div className="shrink-0">
                    <span className="size-7 block bg-gray-200 rounded-full "></span>
                  </div>
                  <div>
                    <div className="font-bold">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-24 mb-4"></div>
                    </div>
                    <div className="text-slate-500">
                    <div className="h-2 bg-gray-200 rounded-full min-w-[300px] mb-2.5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

{
  /* <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div> */
}

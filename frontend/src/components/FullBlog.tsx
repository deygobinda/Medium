import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avater } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="h-screen">
      <Appbar />
      <div className="flex justify-center  pt-32">
        <div className="grid lg:grid-cols-12 px-10 w-full  max-w-screen-2xl">
          <div className="col-span-8">
            <div className="text-3xl lg:text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-4">
              {blog.date.slice(0,10)}
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="lg:pl-20">
              <div className="text-slate-600">Author</div>
              <div className="flex gap-4 items-center pt-4">
                <div>
                  <Avater name={blog.author.name || "A"} size={7} />
                </div>
                <div>
                  <div className="font-bold">
                    {blog.author.name || "Anonymous"}
                  </div>
                  <div className="text-slate-500">
                    Random catch phrase about the author's ability to grab the
                    user's attention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

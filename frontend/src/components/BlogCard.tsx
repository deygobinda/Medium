import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  id: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishDate,
}: BlogCardProps) => {
  return (<Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md">
      <div className="flex">
        <div className="flex justify-center flex-col">
          <Avater name={authorName} />
        </div>
        <div className="font-extralight pl-2 flex justify-center flex-col">
          {authorName}
        </div>
        <div className="flex justify-center  items-center pl-2">
          <Round />
        </div>
        <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
          {publishDate}
        </div>
      </div>
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-md font-thin">
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </div>
      <div className="w-full text-slate-400 text-sm font-thin">{`${Math.ceil(
        content.length / 100
      )} minute(s) read`}</div>
    </div>
    </Link>
  );
};

export function Avater({ name, size = 5 }: { name: string, size?: number }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-500 rounded-full`}
    >
      <span className="text-xs text-gray-200">{name[0]}</span>
    </div>
  );
}

export function Round() {
  return <div className="w-1 h-1 bg-slate-500 rounded-full"></div>;
}

import { Link } from "react-router-dom";
import { Avater } from "./BlogCard";
import { useRecoilValue } from "recoil";
import { authorName } from "../store";

export const Appbar = () => {

  const name = useRecoilValue(authorName)

  return (
    <div className=" border-b flex  justify-between px-10 py-4">
      <Link to={"/blogs"}>Medium</Link>
      <div className="flex">
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            New
          </button>
        </Link>
        <div>
          <Avater name={name} size={7} />
        </div>
      </div>
    </div>
  );
};

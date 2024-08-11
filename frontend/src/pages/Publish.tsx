import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setTContent] = useState("");
  const navigate = useNavigate()
  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full">
        <div className="max-w-screen-lg w-full pt-8">
          <input
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextEditor  onChange={(e)=>{
            setTContent(e.target.value)
          }}/>
          <button
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            onClick={async () => {
              const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content,
              },{
                headers : {
                    Authorization : "Brear "+ localStorage.getItem("token")
                }
              });
              navigate(`/blog/${res.data.id}`)
            }}
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange} : {onChange : (e : ChangeEvent<HTMLTextAreaElement>)=> void}) {
  return (
    <form>
      <div className="w-full mb-4 pt-4">
        <div className="flex items-center justify-between border ">
          <div className=" bg-white rounded-b-lg w-full">
            <label className="sr-only" htmlFor="editor">
              Publish post
            </label>
            <textarea
              id="editor"
              rows={8}
              className="block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2"
              placeholder="Write an article..."
              required
              aria-label="Text editor for writing articles"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

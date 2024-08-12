import {SignupInput } from "@deygobinda/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useSetRecoilState } from "recoil";
import { authorName } from "../store";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [inputs, setInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const setName = useSetRecoilState(authorName)

  async function sendRequest(){
   try{
    const res = await  axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,inputs);
    const jwt = res.data.jwt;
    localStorage.setItem("token",jwt)
    setName(inputs.name || "Anonymous")
    navigate("/blogs")
   }catch(e){
    alert("Some thig went while login")
   }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <form>
          <div className="text-3xl font-extrabold">Create an account</div>
          <div className="text-slate-400">
           {type == "signup"? " Already have an account ?" : "Don't have an account?"}
            <Link className="pl-2 underline" to={type == "signup"?"/signin" : "/signup"}>
              {type == "signup"?"Sign in" : "Sign up"}
            </Link>
          </div>
          <div className="mt-4">
            {type == "signup" && (
              <LabelledInput
                lable="Name"
                placeholder="Gobinda"
                onchange={(e) => {
                  setInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            )}
            <LabelledInput
              lable="Email"
              placeholder="deygobinda@gmail.com"
              onchange={(e) => {
                setInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />
            <LabelledInput
              lable="Password"
              type="password"
              placeholder="12345"
              onchange={(e) => {
                setInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
          </div>
          <button onClick={sendRequest}
            type="button"
            className="text-white mt-5 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            {type == "signup" ? "Sign up" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

interface LabelledInputType {
  lable: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  lable,
  placeholder,
  onchange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-lg font-medium text-gray-900 ">
          {lable}
        </label>
        <input
          onChange={onchange}
          type={type || "text"}
          className="bg-gray-50 pt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}

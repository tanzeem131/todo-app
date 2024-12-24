"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 p-4">
        <input
          className="text-black"
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          className="text-black"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          onClick={async () => {
            await axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
            });
            router.push("/signin");
          }}
        >
          SignUp
        </button>
      </div>
    </div>
  );
}

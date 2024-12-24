"use client";

export default function Signin() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 p-4">
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button onClick={() => {}}>SignIn</button>
      </div>
    </div>
  );
}

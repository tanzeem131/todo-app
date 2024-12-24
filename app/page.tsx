import Link from "next/link";

export default function Home() {
  return (
    <div className="text-4xl font-bold flex flex-col items-center justify-center ">
      <div>hi there</div>
      <div className="flex flex-col">
        <Link href={"/signin"}>Signin</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}

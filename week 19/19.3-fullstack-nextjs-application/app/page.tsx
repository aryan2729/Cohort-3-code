import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center"> 

      <div>
        Todo application
        <br />
        <Link href={"/signup"} className="text-md border mt-5 "> Sign up to Todo app</Link>
        <br />
        <Link href={"/signin" } className="text-md border mt-5"> Sign in to Todo app</Link>
      </div>

    </div>
  );
}

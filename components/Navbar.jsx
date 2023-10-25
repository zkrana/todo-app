import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        TO DO APP
      </Link>
      <Link className="ring-2 ring-lime-100 text-white rounded-sm px-5 py-3 transition hover:bg-green-200 hover:ring-0 hover:text-slate-800 p-1" href={"/addTopic"}>
        
        Add Topic
      </Link>
    </nav>
  );
}

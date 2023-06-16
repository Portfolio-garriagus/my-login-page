import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="text-slate-500 transition-colors hover:text-blue-500" href={"/"}>
        Inicio
      </Link>
      <Link className="text-slate-500 transition-colors hover:text-blue-500" href={"/UserPost"}>
        Todos los Posteos
      </Link>
      <Link
        className="text-slate-500 hover:text-sky-500 transition-colors flex items-center  gap-2"
        href={"/about"}
      >  
        <span>About</span>
      </Link>
  
      <SigninButton />
    </header>
  );
};

export default AppBar;

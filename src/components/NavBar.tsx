import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

const NavBar = () => {
  return (
    <header className="w-full flex gap-4 p-4 bg-gradient-to-b from-black to-blue-800 shadow">
      <nav className="w-full container mx-auto flex flex-wrap items-center justify-between">
        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li>
            <Link className="hover:text-gray-200 hover:underline px-4" href={"/"}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="text-slate-500 transition-colors hover:text-blue-500" href={"/UserPost"}>
              Todos los Posteos
            </Link>
          </li>
          <li>
            <Link className="text-slate-500 hover:text-sky-500 transition-colors flex items-center gap-2" href={"/about"}>
              About
            </Link>

          </li>
        </ul>
        <SigninButton />
      </nav>
    </header>
  );
};

export default NavBar;

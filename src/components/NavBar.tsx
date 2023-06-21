import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

const NavBar = () => {
  return (
    <header className="w-full fixed top-0 z-10 flex gap-4 p-4 bg-gradient-to-b from-black to-blue-800 shadow animate-fade-in-down">
      <nav className="w-full container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-green-500 bg-clip-text text-transparent text-2xl font-black">Bienvenidos al blog de Agustín</h1>
        <SigninButton />
      </nav>
    </header>
  );
};

export default NavBar;

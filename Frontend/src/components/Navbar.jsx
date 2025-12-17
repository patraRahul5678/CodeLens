import React, { useState } from "react";
import { Link } from "react-router";
import { LogOutIcon, MenuIcon, Shield, XIcon } from "lucide-react";
import useLogout from "../hooks/useLogout";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const { logoutMutation, isPending, error } = useLogout()

  return (
  <nav className="w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 shadow-sm relative">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">

      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <Shield className="size-7 text-cyan-400" />
        <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
          CodeLens
        </span>
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className={`text-sm font-medium ${
            location.pathname === "/"
              ? "text-cyan-300"
              : "text-slate-300 hover:text-cyan-300"
          }`}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`text-sm font-medium ${
            location.pathname === "/about"
              ? "text-cyan-300"
              : "text-slate-300 hover:text-cyan-300"
          }`}
        >
          About
        </Link>

        <Link
          to="/profile"
          className={`text-sm font-medium ${
            location.pathname === "/profile"
              ? "text-cyan-300"
              : "text-slate-300 hover:text-cyan-300"
          }`}
        >
          Profile
        </Link>

        <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
          <LogOutIcon className="h-6 w-6 opacity-70" />
        </button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-slate-800"
        >
          {isOpen ? (
            <XIcon className="w-6 h-6 text-slate-300" />
          ) : (
            <MenuIcon className="w-6 h-6 text-slate-300" />
          )}
        </button>
      </div>
    </div>


    {isOpen && (
      <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700">
        <ul className="flex flex-col p-4 space-y-4">
          <Link to="/"  className="text-slate-300 hover:text-white">Home</Link>
          <Link to="/about"  className="text-slate-300 hover:text-white">About</Link>
          <Link to="/profile"  className="text-slate-300 hover:text-white">Profile</Link>
          <button className="btn btn-ghost btn-circle text-red-700" onClick={logoutMutation}>
          Logout</button>
        </ul>
      </div>
    )}
  </nav>
);

};

export default Navbar;
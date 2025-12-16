import React from "react";
import { ArrowLeft, MailIcon, LogOut, UserIcon } from "lucide-react";
import { Link } from "react-router";
import useAuthUser from "../hooks/useAuthUser";


const ProfilePage = () => {
  const {authUser,isLoading,error}=useAuthUser();;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="h-40 w-96 rounded-2xl bg-slate-800/60 animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-red-400">
        Failed to load profile
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-6">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur shadow-xl p-6 space-y-6">

        <Link
          to="/"
          className="absolute -top-4 left-4 inline-flex items-center gap-2
                     px-3 py-1.5 rounded-full
                     bg-slate-900/90 border border-slate-700
                     text-slate-300 hover:text-white
                     hover:border-cyan-400/40 transition"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          <span className="text-sm">Home</span>
        </Link>

        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center">
            <UserIcon className="w-10 h-10 text-slate-950" />
          </div>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
            {authUser?.name}
          </h1>

          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <MailIcon className="w-4 h-4" />
            <span>{authUser?.email}</span>
          </div>
        </div>

        <div className="h-px bg-slate-800" />

        <button
          onClick={() => (window.location.href = "/logout")}
          className="w-full inline-flex items-center justify-center gap-2
                     rounded-md px-4 py-2 font-semibold
                     bg-gradient-to-r from-indigo-600 to-cyan-400
                     text-slate-950 hover:from-indigo-500 hover:to-cyan-300
                     transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;



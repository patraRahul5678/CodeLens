import React from "react";
import { ShipWheelIcon, BrainCircuitIcon, Code2Icon, UsersIcon, ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 pt-20 pb-16 px-6 sm:px-10">
            <div className="max-w-5xl mx-auto space-y-16">

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 w-fit
             px-4 py-2 rounded-xl
             bg-slate-900/70 border border-slate-700
             text-slate-300 hover:text-white
             hover:border-cyan-400/40
             hover:bg-slate-800/70
             transition"
                >
                    <ArrowLeft className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>

                <div className="text-center space-y-4">
                    <div className="flex justify-center items-center gap-3 ">
                        <Shield className="sm:size-10 text-cyan-400 size-7" />
                        <h1 className="sm:text-4xl text-3xl  font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent font-mono">
                            About CodeLens AI
                        </h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        CodeLens AI is your intelligent companion for reviewing and improving code.
                        Our mission is to help developers write cleaner, faster, and smarter code with the power of AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-cyan-300">Our Mission</h2>
                        <p className="text-slate-400 leading-relaxed">
                            We believe that AI can empower developers to focus on creativity rather than syntax.
                            CodeLens AI brings the best of human expertise and machine intelligence together to
                            automate code reviews, detect bugs early, and suggest improvements — all within seconds.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="/Code typing-amico.png"
                            alt="AI reviewing code illustration"
                            className="max-w-sm w-full rounded-xl shadow-lg shadow-cyan-900/30"
                        />
                    </div>
                </div>

                <div className="text-center space-y-6">
                    <h2 className="text-2xl font-semibold text-cyan-300">What Makes Us Different</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-xl hover:border-cyan-400/40 transition">
                            <BrainCircuitIcon className="size-8 text-cyan-400 mb-3 mx-auto" />
                            <h3 className="font-semibold mb-2 text-slate-100">AI-Powered Analysis</h3>
                            <p className="text-sm text-slate-400">
                                Our deep learning models understand code structure and logic, giving meaningful feedback.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-xl hover:border-cyan-400/40 transition">
                            <Code2Icon className="size-8 text-cyan-400 mb-3 mx-auto" />
                            <h3 className="font-semibold mb-2 text-slate-100">Smart Code Suggestions</h3>
                            <p className="text-sm text-slate-400">
                                CodeLens suggests real-time fixes and optimizations for cleaner, faster code.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-xl hover:border-cyan-400/40 transition">
                            <UsersIcon className="size-8 text-cyan-400 mb-3 mx-auto" />
                            <h3 className="font-semibold mb-2 text-slate-100">Built for Developers</h3>
                            <p className="text-sm text-slate-400">
                                Designed by developers, for developers — intuitive, lightweight, and powerful.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4 mt-10">
                    <h2 className="text-2xl font-semibold text-cyan-300">Our Vision</h2>
                    <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed">
                        CodeLens aims to become the go-to AI platform for intelligent code collaboration —
                        where humans and AI work side by side to write perfect code. We’re building a
                        future where coding is faster, learning is deeper, and creativity never stops.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

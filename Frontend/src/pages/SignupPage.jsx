import React, { useState } from 'react'
import useSignup from '../hooks/useSignup'
import { Link } from 'react-router'
import { Shield } from 'lucide-react'

const SignupPage = () => {
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' })
  const { signupMutation, isPending, error } = useSignup()

  const handleSignup = (e) => {
    e.preventDefault()
    signupMutation(signupData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <div className="w-full max-w-5xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row backdrop-blur">
        {/* LEFT: FORM */}
        <div className="w-full lg:w-1/2 p-5 sm:p-8">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-3">
            <Shield className="size-9 text-cyan-400" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300 tracking-wider">
              CodeLens
            </span>
          </div>

          {/* Error */}
          {error?.response?.data?.message && (
            <div className="mb-4 rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-300" role="alert">
              {error.response.data.message}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold text-cyan-300">Create an Account</h2>
              <p className="text-sm text-slate-400">Join CodeLens and get AI-powered code reviews.</p>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-1 block text-sm text-slate-300">Full Name</span>
                <input
                  type="text"
                  className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                  placeholder="Your full name"
                  value={signupData.name}
                  onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                  placeholder="you@domain.com"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm text-slate-300">Password</span>
                <input
                  type="password"
                  className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                  placeholder="••••••••"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  required
                />
                <p className="mt-1 text-xs text-slate-400">At least 6 characters.</p>
              </label>

              <label className="flex items-start gap-2 text-xs">
                <input type="checkbox" className="mt-1 accent-cyan-400" required />
                <span>
                  I agree to the{' '}
                  <span className="text-cyan-300 hover:underline">Terms of Service</span> and{' '}
                  <span className="text-cyan-300 hover:underline">Privacy Policy</span>.
                </span>
              </label>
            </div>

            <button
              className="w-full rounded-md px-3 py-2 font-semibold text-slate-950 bg-gradient-to-r from-indigo-600 to-cyan-400 hover:from-indigo-500 hover:to-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed transition"
              type="submit"
              disabled={isPending}
            >
              {isPending ? 'Creating…' : 'Create Account'}
            </button>

            <p className="text-center text-sm text-slate-400">
              Already have an account?{' '}
              <Link to="/" className="text-cyan-300 hover:text-cyan-200 underline-offset-4 hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT: ILLUSTRATION */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-gradient-to-b from-indigo-600/15 to-cyan-500/10">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/Data extraction-rafiki.png" alt="AI review illustration" className="w-full h-full" />
            </div>
            <div className="text-center space-y-2 mt-6">
              <h3 className="text-lg font-semibold text-slate-100">AI-powered code reviews</h3>
              <p className="text-slate-400">Analyze, learn, and improve with intelligent suggestions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
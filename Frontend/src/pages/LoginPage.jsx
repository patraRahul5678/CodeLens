import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosInstance } from '../lib/axios'
import { toast } from "react-hot-toast"
import { Shield } from 'lucide-react'
import { Link } from 'react-router'

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const queryClient = useQueryClient()

  const { mutate: loginMutation, isPending, error } = useMutation({
    mutationFn: async (loginData) => {
      const res = await axiosInstance.post('/users/login', loginData)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] })
      toast.success("Logged in successfully")
    }
  })

  const handleLogin = (e) => {
    e.preventDefault()
    loginMutation(loginData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <div className="w-full max-w-5xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row backdrop-blur">
        {/* LEFT: FORM */}
        <div className="w-full lg:w-1/2 p-5 sm:p-8">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2">
            <Shield className="size-9 text-cyan-400" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300 tracking-wider">
              CodeLens
            </span>
          </div>

          {/* Error */}
          {error?.response?.data?.message && (
            <div
              className="mb-4 rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-300"
              role="alert"
              aria-live="polite"
            >
              {error.response.data.message}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold text-cyan-300">Welcome back</h2>
              <p className="text-sm text-slate-400">
                Sign in to continue your coding journey
              </p>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-1 block text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm text-slate-300">Password</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </label>

              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-md px-3 py-2 font-semibold text-slate-950 bg-gradient-to-r from-indigo-600 to-cyan-400 hover:from-indigo-500 hover:to-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {isPending ? 'Signing in…' : 'Sign In'}
              </button>

              <p className="text-center text-sm text-slate-400">
                Don’t have an account?{' '}
                <Link to="/signup" className="text-cyan-300 hover:text-cyan-200 underline-offset-4 hover:underline">
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* RIGHT: ILLUSTRATION */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-gradient-to-b from-indigo-600/15 to-cyan-500/10">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/Data extraction-rafiki.png" alt="AI review illustration" className="w-full h-full" />
            </div>
            <div className="text-center space-y-2 mt-6">
              <h3 className="text-lg font-semibold text-slate-100">
                AI-powered code reviews
              </h3>
              <p className="text-slate-400">
                Analyze, learn, and improve with intelligent suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

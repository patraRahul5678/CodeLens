import React, { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css";
import 'highlight.js/styles/github.css';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import useAuthUser from './hooks/useAuthUser';
import PageLoader from './components/PageLoader';
// import { CodePage} from './pages/CodePage';
import LoginPage from './pages/LoginPage';
import { Toaster } from "react-hot-toast"
import CodePage from './pages/CodePage';
import SignupPage from "./pages/SignupPage"
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';


const App = () => {

  const { authUser, isLoading } = useAuthUser()
  const isAuthenticated = Boolean(authUser)
  if (isLoading) return <PageLoader />

  return (
    <>
      <Routes>

        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/code" /> : <LoginPage />}
        />

        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/code" /> : <SignupPage />}
        />

        <Route path="/about" element={isAuthenticated ? (<AboutPage />) : (<Navigate to="/" />)} />

        <Route path="/profile" element={isAuthenticated ? (<ProfilePage />) : (<Navigate to="/" />)} />

        <Route
          path="/code"
          element={isAuthenticated ? <CodePage /> : <Navigate to="/" />}
        />

      </Routes>

      <Toaster />
    </>
  )
}

export default App


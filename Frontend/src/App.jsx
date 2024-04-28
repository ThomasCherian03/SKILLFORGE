import React from 'react';
import Home from "./home/home.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses.jsx';
import Signup from './components/Signup.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'; // Import useAuth from AuthProvider


function App() {
  const [authUser, setAuthUser] = useAuth(); // Use useAuth hook from AuthProvider
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup"/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster />
    </div>
    </>  
  )
}

export default App;

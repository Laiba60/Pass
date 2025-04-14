
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RootEntery from "./Pages/RootEntery";
import LoginPage from "./Pages/LoginPage";
import Register from "./components/Register";
import Generate from "./components/Generate";
import Add from "./components/Add";
import Remove from "./components/Remove";
import Update from "./components/Update";
import Userdata from "./Pages/Userdata";
import Seed from "./Pages/Seed";
import { useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token"); 
    setIsLoggedIn(!!token);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Home />
          </ProtectedRoute>} />
        <Route path="/auth/logon" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<Add/>}/>
        <Route path="/remove" element={<Remove/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/root" element={
           <ProtectedRoute isLoggedIn={isLoggedIn} >
          <RootEntery />
        </ProtectedRoute>
      } />
        <Route
      path="/userdata"
      element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Userdata />
        </ProtectedRoute>
      }
    />
    <Route
      path="/generate"
      element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Generate />
        </ProtectedRoute>
      }
    />
     <Route
      path="/seed"
      element={
       
          <Seed />
       
      }
    />
        </Routes>
        </Router>
    
   
    

    
    
      
      
    
  )
}

export default App

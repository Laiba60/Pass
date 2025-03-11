
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login"; 

import LoginPage from "./Pages/LoginPage";
import Register from "./components/Register";


function App() {
  

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logn" element={<Login />} /> 
        </Routes>
        </Router>
    
   
    

    
    
      
      
    
  )
}

export default App

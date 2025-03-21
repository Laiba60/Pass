
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import LoginPage from "./Pages/LoginPage";

import Register from "./components/Register";
import Generate from "./components/Generate";
import Userdata from "./Pages/Userdata";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logn" element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdata" element={<Userdata/>}/>
        <Route path="/generate" element={<Generate/>}/>
        </Routes>
        </Router>
    
   
    

    
    
      
      
    
  )
}

export default App

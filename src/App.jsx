
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import LoginPage from "./Pages/LoginPage";

import Register from "./components/Register";
import Generate from "./components/Generate";
import Add from "./components/Add";
import Remove from "./components/Remove";
import Update from "./components/Update";
import Userdata from "./Pages/Userdata";
import Seed from "./Pages/Seed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/logon" element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdata" element={<Userdata/>}/>
        <Route path="/generate" element={<Generate/>}/>
        <Route path="/seed" element={<Seed/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/remove" element={<Remove/>}/>
        <Route path="/update" element={<Update/>}/>
        </Routes>
        </Router>
    
   
    

    
    
      
      
    
  )
}

export default App

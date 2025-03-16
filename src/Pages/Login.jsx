import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import icons from "/images/icons.svg";
import root from "/images/root.svg";
import root2 from "/images/root2.svg";
import plus from "/images/plus.svg";
import root4 from "/images/root4.svg";

const Login = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState(""); 
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [notes, setNotes] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, username, password, url, selectedEmoji, selectedFolder, notes };
    console.log("Saved Data:", formData);
  };

  return (
    <div className="h-screen bg-[#0A1A60] flex items-center justify-center w-screen px-4 sm:px-2 overflow-hidden">
      <div className="w-full max-w-6xl bg-[#0E1A60] text-white rounded-2xl shadow-lg">
        
        {/* HEADER SECTION - Fully Responsive */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#0E1A60]">
          <img src={icons} alt="Logo" className="h-8 w-8" />
          
          <div 
            className="text-2xl font-bold cursor-pointer whitespace-nowrap" 
            onClick={() => navigate("/")}
          >
            Password Manager
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="flex-1 min-w-[100px] sm:w-full p-2 rounded-lg bg-blue-900 border border-blue-950 text-white focus:outline-none"
          />

          <div className="flex gap-2 sm:flex-wrap">
            {[root, root2, plus, root4].map((icon, index) => (
              <div key={index} className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#101E71] border-[0.3px] border-[#374CC4] flex items-center justify-center">
                <img src={icon} alt="security icon" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT SECTION - Responsive Form */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Root • Add Entry</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
                  className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} 
                  className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Password</label>
                <input type={showPassword ? "text" : "password"} value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm mb-1">URL</label>
                <input type="text" placeholder="https://example.com" value={url} 
                  onChange={(e) => setUrl(e.target.value)} 
                  className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Select Emoji</label>
                <select value={selectedEmoji} onChange={(e) => setSelectedEmoji(e.target.value)} 
                  className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none">
                  <option value="">Select an option</option>
                  <option>🔒 Lock</option>
                  <option>🔑 Key</option>
                  <option>💾 Save</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Choose Your Folder</label>
                <input type="text" placeholder="Click to choose folder here" value={selectedFolder} 
                  onChange={(e) => setSelectedFolder(e.target.value)} 
                  className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" 
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm mb-1">Notes</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} 
                className="w-full p-2 rounded bg-[#101E71] border border-[#374CC4] focus:outline-none" rows="3">
              </textarea>
            </div>

            <div className="flex flex-wrap justify-end gap-4 items-center mt-6">
              <button type="button" className="bg-[#101E71] text-black py-2 px-4 rounded-lg">
                Cancel
              </button>
              <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg">
                OK
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import icons from "/images/icons.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { generateToken } from "../api";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);
  const [seed, setSeed] = useState("");

  const handleLogin = async () => {
    const cleanedSeed = seed
      .replace(/,/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toUpperCase();
    console.log("Sending cleaned seed:", cleanedSeed);
    try {
      const result = await generateToken(cleanedSeed); 
console.log("Token generated:", result.token);
navigate('/userdata'); 
      
    } catch (err) {
      console.error("Token generation failed:", err);
    }
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-screen bg-[#0E1A60]"> 
      <div
  className="hidden md:flex w-1/2 flex-col justify-center px-14 text-white bg-cover bg-center relative"
  style={{ backgroundImage: "url('/images/login.svg')" }}
>
  <div className="absolute top-0 left-0 w-full p-8 z-10">
    <div className="flex items-center space-x-3">
      <img src={icons} alt="Security Icon" className="w-[70px] h-[64px]" />
      <h2
        className="font-[Neue Plak] font-normal text-[22px] leading-[64px] tracking-[0px] text-white cursor-pointer"
        onClick={() => navigate('/')}
      >
        Password Manager
      </h2>
    </div>

    <p className="w-[453px] text-white font-['DM_Sans'] font-normal text-[18px] leading-[26px] mt-4">
      Login to your account with ease. We do the heavy lifting in a
      no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and
      open source.
    </p>
  </div>
</div>
      <div
        className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-10 text-white bg-cover bg-center relative rounded-l-[100px] md:rounded-none"
        style={{ backgroundImage: "url('/images/light.svg')" }}
      >
        <div className="flex flex-col items-center mb-2 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mt-10">Log In</h2>
        </div>

        <label className="block text-sm mb-2 font-medium self-start ml-9">Key Seed</label>
        <input
          type="text"
          placeholder="Enter your key seed..."
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          className="w-full max-w-xs sm:max-w-md p-4 sm:p-5 rounded-lg bg-[#0E1A60] text-white placeholder-white/60 border-none focus:ring-2"
        />

        <button
          className="w-full max-w-xs sm:max-w-md mt-6 sm:mt-10 bg-gradient-to-r from-[#A143FF] to-[#5003DB] text-white font-semibold py-3 rounded-[18.37px] transition-all hover:opacity-90 shadow-lg"
          
          onClick={handleLogin}
          
          disabled={isLoading} >
            
          {isLoading ? "Logging in..." : "Next"}
         
        </button>

        <p className="text-center mt-4 text-sm text-white/80">
          Don’t have an account?{" "}
          <a className="text-[#A143FF] font-semibold cursor-pointer" onClick={() => navigate('/register')}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

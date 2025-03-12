import icon from "/images/icon.svg";
 import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate=useNavigate();
  
  return (
    <div className="flex min-h-screen w-screen bg-[#0E1A60]">
      
      <div
        className="w-1/2 flex flex-col justify-center px-14 text-white bg-cover bg-center relative "
        style={{ backgroundImage: "url('/images/login.svg')" }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <img src={icon} alt="Security Icon" className="w-8 h-8 fill-[#A143FF]" />
          <h2 className="text-lg font-semibold text-white" onClick={()=>navigate('/')}>Password Manager</h2>
        </div>
        <p className="text-base text-white/80 leading-relaxed mb-130">
          Login to your account with ease. We do the heavy lifting in a
          no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and
          open source.
        </p>
      </div>

    
      <div
        className="w-1/2 flex flex-col justify-center items-center px-10 text-white bg-cover bg-center relative rounded-l-[100px]"
        style={{ backgroundImage: "url('/images/light.svg')" }}
      >
       
        <div className="absolute top-10 right-10 w-16 h-16 bg-blue-500 blur-2xl opacity-50 rounded-full"></div>

        <div className="absolute bg-[#101E71] p-10 rounded-lg shadow-lg w-[75%] 
           mr-[-90px]">
          
          <div className="flex flex-col items-center mb-2">
            <div className=" flex justify-center items-center bg-[#1C2C7C] shadow-lg ">
              
            </div>
            <h2 className="text-3xl font-bold mt-3">Log In</h2>
          </div>

          
          <label className="block text-sm mb-2 font-medium">Key Seed</label>
          <input
            type="text"
            placeholder="Enter your key seed..."
            className="w-full p-3 rounded-lg bg-[#28399F] text-white placeholder-white/60 border-none focus:ring-2 focus:ring-[#A143FF] outline-none"
          />

         
          <button className="w-full mt-6 bg-gradient-to-r from-[#A143FF] to-[#5003DB] text-white font-semibold py-3 rounded-lg transition-all hover:opacity-90 shadow-lg"   onClick={() => navigate('/userdata')}>
            Next
          </button>

         
          <p className="text-center mt-4 text-sm text-white/80">
            Don’t have an account?{" "}
            <button className=" text-[#A143FF] font-semibold" >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

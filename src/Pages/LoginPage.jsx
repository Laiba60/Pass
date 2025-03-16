import icons from "/images/icons.svg";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen w-screen bg-[#0E1A60]"> 
      <div
        className="w-1/2 flex flex-col justify-center px-14 text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/login.svg')" }}
      >
        <div className="flex items-center space-x-3">
          <img src={icons} alt="Security Icon" className="w-[70px] h-[64px]" />
          <h2
            className="font-[Neue Plak] font-normal text-[22px] leading-[64px] tracking-[0px] w-[217px] h-[64px] text-white"
            onClick={() => navigate('/')}
          >
            Password Manager
          </h2>
        </div>
        <p className="w-[453px] text-white font-['DM_Sans'] font-normal text-[18px] leading-[26px] mb-100">
          Login to your account with ease. We do the heavy lifting in a
          no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and
          open source.
        </p>
      </div>
      <div
        className="w-1/2 flex flex-col justify-center items-center px-10 text-white bg-cover bg-center relative rounded-l-[100px]"
        style={{ backgroundImage: "url('/images/light.svg')" }}
      >
        
       
          <div className="flex flex-col items-center mb-2  rounded-lg shadow-lg ">
            <h2 className="text-4xl font-bold mt-10">Log In</h2>
          </div>
          <label className="block text-sm mb-2 font-medium mr-[450px] ">Key Seed</label>
          <input
            type="text"
            placeholder="Enter your key seed..."
            className="w-full p-5 rounded-lg bg-[#0E1A60] text-white placeholder-white/60 border-none focus:ring-2 focus:ring-[#A143FF] outline-none"
          />
          <button
            className="w-1/2 mt-10  bg-gradient-to-r from-[#A143FF] to-[#5003DB] text-white font-semibold py-3 rounded-[18.37px] transition-all hover:opacity-90 shadow-lg"
            onClick={() => navigate('/userdata')}
          >
            Next
          </button>
          <p className="text-center mt-4 text-sm text-white/80">
            Don’t have an account?{" "}
            <a className="text-[#A143FF] font-semibold" onClick={()=>navigate('/register')}>Register</a>
          </p>
        </div>
      </div>
    
  );
};

export default LoginPage;

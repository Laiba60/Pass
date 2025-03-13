import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate=useNavigate();
    return (
      <div className="flex  min-h-screen w-screen bg-[#0E1A60] text-white">
        <div 
          className="w-1/2 flex flex-col justify-center px-14 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/register.svg')" }}
        >
          <div className="flex items-center space-x-3  ">
            <img src="/images/icons.svg" alt="Logo" className=" top-[4.34px] w-[70px] h-[64px] " />
            <h2 className=" top-[266px] left-[184px] w-[217px] h-[64px] 
    text-white font-neue-plak font-normal text-[22px] leading-[64px] tracking-[0px]" onClick={()=>navigate('/')}>Password Manager</h2>
          </div>
          <p className=" top-[190px] left-[108px] w-[453px] h-[97px] 
    text-white font-dm-sans font-normal text-[18px] leading-[26px] tracking-[0px] mb-90">
            Login to your account with seed. We do the heavy lifting in a no-nonsense, ad-free, 
            tracker-free, and cloud-free manner. Free and open source.
          </p>  
        </div>
        <div 
          className="w-1/2 flex flex-col justify-center items-center px-10 relative bg-cover bg-center rounded-l-[100px]"
          style={{ backgroundImage: "url('/images/regis.svg')" }}
        >
          <div className="absolute top-10 right-10 w-16 h-16 bg-blue-500 blur-2xl opacity-50 rounded-full"></div> 
          <div className="relative bg-[#101E71] p-10 rounded-lg shadow-lg w-[80%] text-center">
            <h2 className="text-3xl font-bold mt-4">Register Account</h2>
            <h3 className="text-lg font-semibold text-[#A143FF] mt-4">Important Note:</h3>
            <p className="text-sm text-white/80 mt-2">
              On the next page, you will see a series of 16 words. This is your unique and private seed, and it 
              is the <span >ONLY</span> way to recover your wallet in 
              case of loss. Store it safely outside of the app.
            </p>
            <button className="mt-6 w-full bg-gradient-to-r from-[#A143FF] to-[#5003DB] text-white font-semibold py-3 rounded-lg transition-all hover:opacity-90">
              I understand, show me my seed
            </button>
            <p className="text-sm text-white/80 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-[#A143FF] font-semibold hover:underline" onClick={()=>('/login')}>Login here</a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;
  
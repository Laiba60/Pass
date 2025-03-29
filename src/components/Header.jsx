import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg.svg')" }}>

      <header className="relative z-[1000] bg-gradient-to-r from-[#0e1a60] to-[#2A3992] border-b border-white">
          <nav className="pt-[10px] pb-[8px] px-[10px] sm:px-[20px] flex justify-between items-center">
            
            {/* LOGO */}
            <a className="flex items-center gap-[8px]" href="/">
              <img src="/images/icon.svg" alt="Logo" className="cursor-pointer w-[55px] h-[40px] md:w-[80px]" />
              <h2 className="text-[16px] md:text-[18px] font-[400] text-white whitespace-nowrap">
                Password Manager
              </h2>
            </a>

            {/* NAV BUTTONS */}
            <div className="items-center gap-[20px] hidden md:flex">
              <a href="/register"
                className="w-[140px] h-[45px] bg-white hover:bg-[#e7e7e7] text-black border border-white rounded-[10px] flex justify-center items-center text-[18px] font-[400] transition-all"
              >
                Sign Up
              </a>
              <a href="/login"
                className="w-[140px] h-[45px] bg-[#101E71] text-white border border-white rounded-[10px] flex justify-center items-center text-[18px] font-[400] transition-all hover:bg-[#0E1A60]"
              >
                Login
              </a>
            </div>
          </nav>
        </header>
        <div className="relative flex h-screen flex-col md:flex-row justify-start items-start pt-[60px] sm:pt-[80px] w-full bg-gradient-to-br from-[#0E1A60] to-[#1A237E] bg-opacity-40">
          <div className="flex flex-col gap-[20px] pl-6 pr-4 w-[95%] sm:w-[55%] items-start sm:px-[60px]">
          <button
  className="rounded-[12px] border-4 border-white !border-opacity-100 backdrop-blur-lg bg-white/20 px-6 py-3 text-white font-semibold"
  style={{
    borderColor: "white !important",
    borderStyle: "solid",
    background: "linear-gradient(rgba(255, 255, 255, 0.3) 0%, rgba(153, 153, 153, 0.4) 100%)",
  }}
>
  Cross-platform Password Manager
</button>



            <h1 className="text-white text-[50px] sm:text-[60px] md:text-[66px] font-bold leading-[50px]">
              Secure Your Systems with the Ultimate Password Manager
            </h1>
            <p className="text-[#FFFFFFB2] font-['DM_Sans'] text-[16px] sm:text-[18px] md:text-[20px] font-[400] leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0px]">
              "Let us store your passwords and auto-fill them into your favorite apps, so you can forget all about them. We do the heavy lifting in a no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and open source."
            </p>
            <a
              href="/get-started"
              className="bg-white mt-4 px-[20px] py-[10px] text-black text-[16px] font-[400] rounded-[8px] border border-white  transition-all"
            >
              Get Started
            </a>
          </div>
          <div className="absolute right-0 top-20 hidden md:block">
            <img src="/images/lock.svg" alt="Security Illustration" className="w-[450px]" />
          </div>
          </div>
          </div>
      </>
    
  );
};

export default Header;

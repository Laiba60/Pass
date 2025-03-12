import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0E1A60] text-white w-screen">
      
      <header className="flex flex-wrap justify-between items-center px-4 md:px-8 py-4">
       
        <div className="flex items-center">
          <img src="/images/icon.svg" alt="Logo" className="w-8 h-8" />
          <h1 className="text-lg font-semibold ml-2">PasswordManager</h1>
        </div>

       
        <div className="flex flex-wrap items-center gap-3 mt-3 md:mt-0">
          <input
            type="search"
            placeholder="Search"
            className="w-full sm:w-64 md:min-w-[400px] p-2 rounded-lg bg-[#0E1A60] border border-blue-950 text-white focus:outline-none"
          />
          <button
            className="px-4 md:px-7 py-2 text-black bg-white rounded-lg hover:bg-gray-200 transition"
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
          <button
            className="px-4 md:px-7 py-2 border border-white rounded-lg hover:bg-white text-black transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </header>

     
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-12">
       
        <div className="max-w-lg text-center md:text-left">
          <h3 className="text-white tracking-widest text-sm border inline-block p-2 rounded-full">
            Cross-platform Password Manager
          </h3>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mt-2">
            Secure Your Systems with the{" "}
            <span className="text-white">Ultimate Password Manager</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Let us store your passwords and auto-fill them into your favorite
            apps, so you can forget all about them. We do the heavy lifting in a
            no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and
            open source.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-black font-semibold rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

       
        <div className="relative mt-10 md:mt-0">
          <img
            src="/images/lock.svg"
            alt="Secure Lock"
            className="w-64 sm:w-[300px] md:w-[350px] drop-shadow-lg"
          />

          
          <img src="/images/facebook.svg" className="absolute top-10 left-[10%] sm:left-[120px] w-6 sm:w-8" alt="" />
          <img src="/images/spotify.svg" className="absolute top-20 right-5 sm:right-10 w-6 sm:w-8" alt="" />
          <img src="/images/tiktok.svg" className="absolute bottom-12 left-[10%] sm:left-[100px] w-6 sm:w-8" alt="" />
          <img src="/images/slack.svg" className="absolute bottom-20 right-5 sm:right-12 w-6 sm:w-8" alt="" />
          <img src="/images/amazon.svg" className="absolute bottom-5 left-[20%] sm:left-[160px] w-6 sm:w-8" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Header;

import form from "/images/form.svg"; 

const Heromid = () => {
  return (
    <div
      className="min-h-screen bg-[#0b0f33] flex items-center justify-center px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/back.svg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
       
        <div className="text-white">
          <h2 className="text-sm font-semibold uppercase bg-white/10 text-white px-3 py-1 rounded-md inline-block mb-3">
            Try our Additional Solution
          </h2>
          <h1 className="text-4xl font-bold leading-tight">
            Password without <span className="text-blue-500">saving password</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-md">
            Let us store your passwords and auto-fill them into your favorite apps, so you can forget all about them.
            We do the heavy lifting in a no-nonsense, ad-free, tracker-free, and cloud-free manner. Free and open source.
          </p>
        </div>

        
        <div className="flex justify-center">
          <img src={form} alt="Security Icon" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Heromid;

import form from "/images/form.svg"; 
import whole from "/images/whole.svg";
const Heromid = () => {
  return(
    <div
      className="min-h-screen bg-[#0b0f33] flex items-center justify-center px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/whole.svg')" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        <div className="text-white">
        <button 
         className="relative rounded-[12px] border border-white/80 backdrop-blur-[12px] 
             flex justify-center items-center text-center 
             text-white font-dmSans font-normal 
             text-[12px] sm:text-[16px] mq2000:text-[32px] 
             h-[39px] mq2000:h-[69px] w-auto min-w-[210px] md:min-w-[250px] mq2000:min-w-[450px]
             px-6 whitespace-nowrap transition-all duration-300 hover:scale-105"
             style={{
             background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0.15) 100%)"
  }}
>
  Try our additional services
</button>
          <h1 className="font-plak font-normal text-[66px] leading-[61px] tracking-[0px]">

            Password<br></br> without<br></br> saving<br></br> password
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

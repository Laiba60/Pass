import icon1 from "/images/icon1.svg";
import icon2 from "/images/icon2.svg";
import icon3 from "/images/icon3.svg";
import box from "/images/box.svg";

const Hero = () => {
  return (
    <section className="w-full h-[1112px] sm:h-[480px] mq1500:h-[520px] mq2000:h-[820px] mq2400:h-[1000px] flex items-center justify-center relative bg-[#0e1a60]">
      <section className="flex flex-row justify-center items-center w-full relative">
        <div className="flex flex-col sm:flex-row justify-center items-center z-20 gap-[30px] mx-3 sm:mx-8">
          <div className="relative z-10 w-[320px] sm:w-[384px] h-[274px] mq1500:w-[410px] mq2000:w-[550px] mq2000:h-[470px] rounded-[16px] border border-[#ffffff4d] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,26,96,1) 0%, rgba(18,30,110,1) 100%)",
            }}>
            <img src={box} className="absolute top-0 left-0 w-full opacity-20" />
            <div className="relative p-6 flex flex-col justify-between h-full">
              <img src={icon1} className="w-12 mq1500:w-16 mq2000:w-20" />
              <h1 className="text-white text-lg mq1500:text-xl mq2000:text-2xl font-semibold">Instant Store, Safe & Sort</h1>
              <p className="text-[#FFFFFFB2] text-sm mq1500:text-base mq2000:text-lg leading-relaxed">
                You can filter and sort data in lope instantly, without having to export it to a spreadsheet first.
              </p>
            </div>
          </div>
          <div className="relative z-10 w-[320px] sm:w-[384px] h-[274px] mq1500:w-[410px] mq2000:w-[550px] mq2000:h-[470px] rounded-[16px] border border-[#ffffff4d] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,26,96,1) 0%, rgba(18,30,110,1) 100%)",
            }}>
            <img src={box} className="absolute top-0 left-0 w-full opacity-20" />
            <div className="relative p-6 flex flex-col justify-between h-full">
              <img src={icon2} className="w-12 mq1500:w-16 mq2000:w-20" />
              <h1 className="text-white text-lg mq1500:text-xl mq2000:text-2xl font-semibold">Store in High Security</h1>
              <p className="text-[#FFFFFFB2] text-sm mq1500:text-base mq2000:text-lg leading-relaxed">
                Secure way to store your passwords in secrets and manage them. Make your passwords only for you.
              </p>
            </div>
          </div>
          <div className="relative z-10 w-[320px] sm:w-[384px] h-[274px] mq1500:w-[410px] mq2000:w-[550px] mq2000:h-[470px] rounded-[16px] border border-[#ffffff4d] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,26,96,1) 0%, rgba(18,30,110,1) 100%)",
            }}>
            <img src={box} className="absolute top-0 left-0 w-full opacity-20" />
            <div className="relative p-6 flex flex-col justify-between h-full">
              <img src={icon3} className="w-12 mq1500:w-16 mq2000:w-20" />
              <h1 className="text-white text-lg mq1500:text-xl mq2000:text-2xl font-semibold">Unbreakable Passwords</h1>
              <p className="text-[#FFFFFFB2] text-sm mq1500:text-base mq2000:text-lg leading-relaxed">
                Use the strongest password for your accounts, located in the internet. Give more work to the Hackers.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </section>
  );
};
export default Hero;

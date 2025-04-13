import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGeneratePassphrase } from "../api";
import { generateToken } from "../api";

const Seed = ({}) => {
  const navigate = useNavigate();
  const { mutate: generatePassphrase, data } = useGeneratePassphrase();
  const [seed, setSeed] = useState(new Array(12).fill("••••••")); 

  useEffect(() => {
    generatePassphrase(); 
  }, [generatePassphrase]);

  useEffect(() => {
    if (data?.seed) {
      setSeed(data.seed.split(" ")); 
     
    }
    console.log(data);
  }, [data]);

  return (
    <div className="flex min-h-screen w-screen bg-[#0E1A60] text-white">
      <div
        className="w-1/2 flex flex-col justify-center px-14 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/register.svg')" }}
      >
        <div className="flex items-center space-x-3">
          <img src="/images/icons.svg" alt="Logo" className="w-[70px] h-[64px]" />
          <h2 className="text-white font-neue-plak text-[22px]" onClick={() => navigate("/")}>
            Password Manager
          </h2>
        </div>
        <p className="text-white font-dm-sans text-[18px]">
          Login to your account with seed. We do the heavy lifting in a no-nonsense, ad-free, tracker-free,
          and cloud-free manner. Free and open source.
        </p>
      </div>

      <div
        className="w-1/2 flex flex-col justify-center items-center px-10 pt-10 relative bg-cover bg-center rounded-l-[100px]"
        style={{ backgroundImage: "url('/images/leaf.svg')" }}
      >
        <h3 className="text-white text-[25px] lg:text-[46px] font-[400]">Your Seed</h3>

        <div className="flex flex-col gap-[2px]">
          <div className="border-[1px] py-[8px] px-[19px] h-[166px] border-[#28399F] bg-[#0E1A60]">
            <div className="flex gap-[8px] flex-wrap">
              {seed.map((word, index) => (
                <span key={index} className="border-[#9F42FF] border-[1px] px-[8px] text-[16px] text-white rounded-[6px]">
                  {word}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-[26px] items-center mt-0 md:mt-[20px]">
              <span className="dm-sans cursor-pointer flex gap-[4.96px] text-[#FFFFFFA1] text-[16px] font-[400] leading-[27px]">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8887 13.6443L13.8792 16.6348L16.8697 13.6443" stroke="white" stroke-opacity="0.63" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                  <path d="M13.8789 4.67273V16.553" stroke="white" stroke-opacity="0.63" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                    <path d="M23.3645 14.2284C23.3645 19.3917 19.86 23.5737 14.0192 23.5737C8.17833 23.5737 4.67383 19.3917 4.67383 14.2284" stroke="white" stroke-opacity="0.63" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                      </path>
                      </svg>Save</span>
                      <span className="dm-sans cursor-pointer flex gap-[4.96px] text-[#FFFFFFA1] text-[16px] font-[400] leading-[27px]" onClick={() => navigator.clipboard.writeText(seed)}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.2606 4.84595H7.58793C6.07452 4.84595 4.84766 6.07281 4.84766 7.58622V18.2589C4.84766 19.7723 6.07452 20.9991 7.58793 20.9991H18.2606C19.774 20.9991 21.0008 19.7723 21.0008 18.2589V7.58622C21.0008 6.07281 19.774 4.84595 18.2606 4.84595Z" stroke="white" stroke-opacity="0.63" stroke-linejoin="round"></path>
                        <path d="M17.1291 4.84599L17.1532 3.6922C17.1511 2.97881 16.8669 2.29521 16.3624 1.79077C15.858 1.28632 15.1744 1.00203 14.461 1H4.0768C3.26152 1.00241 2.48032 1.32734 1.90383 1.90383C1.32734 2.48032 1.00241 3.26152 1 4.0768V14.461C1.00203 15.1744 1.28632 15.858 1.79077 16.3624C2.29521 16.8669 2.97881 17.1511 3.6922 17.1532H4.84599" stroke="white" stroke-opacity="0.63" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>Copy</span>
            </div>
          </div>
          <p className="text-[#A143FF] text-[16px]">Please write these down in case you lose your seed</p>
        </div>

        <div className="flex flex-col gap-[20px]">
          <button
            className="bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)] py-[19px] max-w-[312px] w-[100%] rounded-[18.37px] text-white"
            onClick={async () => {
             
              try {
                await generateToken(data?.seed);
                navigate('/userdata');
              } catch (error) {
                console.error("Token generation failed:", error);
              }
            }}
          >
            Next
          </button>
          <p className="text-[#DFDFDF] text-[16px]">
            Already have an account?
            <a className="text-[#A143FF]" href="/auth/logon">
              {" "}
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seed;

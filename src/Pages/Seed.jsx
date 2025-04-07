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

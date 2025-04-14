import React, { useState } from "react";
import generate from "/images/generate.svg";
import cross from "/images/cross.svg";
import show from "/images/show.svg";
import copy from "/images/copy.svg";
import refresh from "/images/refresh.svg";
import icons from "/images/icons.svg";
import first from "/images/first.svg";
import ups from "/images/ups.svg";
import down from "/images/down.svg";
import second from "/images/second.svg";
import third from "/images/third.svg";
import search from "/images/search.svg";
import { useNavigate } from "react-router-dom";
import { useGenerateRandom } from "../hooks/useGenerateRandom";
import axios from "axios";
import { getAuthHeaders } from "../utils/header";
const Generate = ({ setIsgenerate }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [length, setLength] = useState(10);
  const handleClick = () => {
    setIsgenerate(false);
  };
  const { mutate, data, isLoading, isError, error } = useGenerateRandom();
  const [formData, setFormData] = useState({
    length: 10,
    is_alphabets: false,
    is_lowercase: false,
    is_uppercase: false,
    is_numeric: false,
    is_special: false,
  });

  const handleGenerate = async () => {
    try {
      const response = await axios.post("https://dev.api.neuropassword.com/api/passwords/generate-random/", formData, getAuthHeaders());
      console.log(response)
      setPassword(response.data.password)
    } catch (error) {
      console.log(error);
    }
  };
  const toggleOption = (key) => {
    setFormData((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };
  const handleLengthChange = (value) => {
    setLength(value);
    setFormData((prev) => ({ ...prev, length: parseInt(value) }));
  };
  return (
      <section className="fixed inset-0 flex justify-center items-center bg-[rgba(14,26,96,0.95)] z-100 px-[20px] pt-[80px]">
        <section className="bg-[#101E71] relative w-full max-w-[973px] px-[8px] py-[20px] sm:p-[20px] rounded-[5px] flex flex-col items-center">
          <h4 className="flex items-center gap-[9px] text-white text-[18px] sm:text-[22px] font-[400] text-center">
            <img
              src={generate}
              className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
            />
            Generate Password
          </h4>
          <span className="absolute right-[17px] top-[17px] cursor-pointer">
            <img src={cross} onClick={handleClick} />
          </span>
          <section className="mt-[40px] sm:mt-[7px] w-full flex flex-col gap-[3px]">
            <span className="text-white font-[400] text-[10px] sm:text-[16px] dm-sans">
              "Password Quality: " "Fair"
            </span>
            <section className="w-full flex flex-wrap justify-between items-center gap-[4px] sm:gap-[11px]">
              <div className="relative password-input flex-1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  className="relative w-full dm-sans rounded-[10px] outline-none bg-[#0E1a60] py-[10px] sm:py-[12px] px-[7px] sm:px-[17px] placeholder:text-[#DFDFDF36] text-white text-[9px] sm:text-[16px] font-[400]"
                />
                <span
                  className="cursor-pointer absolute top-[50%] right-[13px] translate-y-[-50%]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={show}
                    className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                  />
                </span>
                <div
                  className="absolute bottom-0 left-0 h-[4px] rounded-b-[10px]"
                  style={{
                    width: "32.2581%",
                    background:
                      "linear-gradient(90deg, rgb(80, 3, 219) 0%, rgb(161, 67, 255) 100%)",
                  }}
                ></div>
              </div>
              <section className="flex gap-[4px] sm:gap-[10px] items-center">
                <div
                  className="w-[25px] h-[32px] cursor-pointer sm:w-[62px] sm:h-[55px] flex items-center justify-center rounded-[10px] bg-[#0E1A60] border-none outline-none"
                  onClick={handleGenerate}
                >
                  <img
                    src={refresh}
                    className="w-[11px] h-[11px] sm:w-[26px] sm:h-[26px]"
                  />
                </div>
                <div
                  className="w-[25px] h-[32px] sm:w-[62px] sm:h-[55px] flex items-center justify-center rounded-[10px] bg-[#0E1A60] border-none outline-none"
                  onClick={handleCopy}
                >
                  <img
                    src={copy}
                    className="w-[13px] h-[13px] sm:w-[26px] sm:h-[26px]"
                  />
                </div>
              </section>
            </section>
          </section>
          <section className="mt-[-40px] w-full flex flex-col gap-[3px]">
            <span className="text-white font-[400] text-[10px] sm:text-[16px] dm-sans">
              Password settings
            </span>
            <section className="w-full flex gap-[15px] sm:gap-[20px] flex-wrap justify-between items-center">
              <section className="flex-1 flex items-baseline gap-[10px] mt-10">
                <span className="w-[30px] sm:w-[71px] text-[#90BCFF] font-[400] dm-sans text-[8px] sm:text-[16px]">
                  Length
                </span>
                <section className="relative flex-1 flex flex-col gap-[3px]">
                  <span className="relative w-full">
                    <input
                      name="length"
                      type="range"
                      className="custom-range"
                      min="10"
                      max="31"
                      step="3"
                      value={length}
                      onChange={(e) => handleLengthChange(e.target.value)}
                    />
                  </span>
                </section>
              </section>
              <section className="flex justify-between pl-[23px] sm:pl-[40px] pr-[10px] sm:pr-[17px] items-center w-[84px] sm:w-[204px] min-h-[33px] sm:min-h-[55px] bg-[#0E1A60] rounded-[10px] mt-10">
                <span className="w-[29px] sm:w-[70px] dm-sans text-[12px] sm:text-[22px] text-white font-[400]">
                  10
                </span>
                <div className="flex flex-col gap-[5px] ">
                  <span className="cursor-pointer">
                    <img
                      src={ups}
                      className="w-[4.57px] h-[4.57px] sm:w-[11px] sm:h-[8px]"
                    />
                  </span>
                  <span className="cursor-pointer">
                    <img
                      src={down}
                      className="w-[4.57px] h-[4.57px] sm:w-[11px] sm:h-[8px]"
                    />
                  </span>
                </div>
              </section>
            </section>
          </section>
          <section className="mt-[24px] w-full flex flex-col gap-[3px]">
            <span className="text-white font-[400] text-[10px] sm:text-[16px] dm-sans">
              Character Type
            </span>
            <section className="border-[1px] w-full min-h-[70px] sm:min-h-[116px] border-[#194D9E] px-[8px] sm:px-[19px] py-[20px] sm:py-[32px] flex flex-wrap justify-between items-center gap-[19px] sm:gap-[30px]">
              <section className="flex flex-1 gap-[5px] sm:gap-[14px] items-center flex-wrap justify-between">
                <button
                  name="is_uppercase"
                  onClick={() => {
                    toggleOption("is_uppercase");
                    handleGenerate();
                    console.log("ghjghj");
                  }}
                  className={`dm-sans flex-1 h-[30px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none border-none flex items-center justify-center text-[11px] sm:text-[17px] font-[400] text-black ${
                    formData.is_uppercase ? "bg-blue-900" : "bg-[#0E1A60]"
                  }`}
                >
                  A - Z
                </button>

<button
  name="is_lowercase"
  onClick={() => {toggleOption("is_lowercase");handleGenerate(); console.log("ghjghj")}}
  className={`dm-sans flex-1 h-[30px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none border-none flex items-center justify-center text-[11px] sm:text-[17px] font-[400] text-black ${
    formData.is_lowercase ? "bg-blue-900" : "bg-[#0E1A60]"
  }`}
>
  a - z
</button>

<button
  name="is_numeric"
  onClick={() => {toggleOption("is_numeric");handleGenerate(); console.log("ghjghj")}}
  className={`dm-sans flex-1 h-[30px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none border-none flex items-center justify-center text-[11px] sm:text-[17px] font-[400] text-black ${
    formData.is_numeric ? "bg-blue-900" : "bg-[#0E1A60]"
  }`}
>
  0 - 9
</button>

<button
  name="is_special"
  onClick={() => {toggleOption("is_special");handleGenerate(); console.log("ghjghj")}}
  className={`dm-sans flex-1 h-[30px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none 
  border-none flex items-center justify-center text-[11px] sm:text-[17px] 
  font-[400] text-black ${formData.is_special ? "bg-blue-900" : "bg-[#0E1A60]"}`}
>
  \*_
</button>

</section>
<button
  name="is_alphabets"
  onClick={() => {toggleOption("is_alphabets");handleGenerate(); console.log("ghjghj")}}
  className={`dm-sans w-[78px] h-[29px] sm:w-[167px] sm:h-[43px] rounded-[6.23px] sm:rounded-[15px] outline-none 
  border-none flex items-center justify-center text-[8px] sm:text-[15px] 
  font-[400] text-white hover:bg-[#091246] 
  ${
    formData.is_alphabets
      ? "bg-gradient-to-r from-[#A143FF] to-[#5003DB]"
      : "bg-[#0E1A60]"
  }`}
              >
                Extended ASCII
              </button>
            </section>
          </section>
          <section className="mt-[20px] w-full flex items-center justify-end gap-[9px] sm:gap-[20px] flex-wrap">
            <button
              className="dm-sans bg-[#0E1A60] w-[70px] h-[30px] sm:w-[140px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none 
    border-none flex items-center justify-center text-[9px] sm:text-[15px] 
    font-[400] text-black"
              onClick={handleClick}
            >
              Close
            </button>
          </section>
        </section>
      </section>
    
  );
};
export default Generate;

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



const Generate = () => {
  const navigate=useNavigate();
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [length, setLength] = useState(10);
  
  return (
    
    <div className="h-[100vh]  ">
     
    
     <header className="w-full bg-[#101E71] fixed top-0 left-0 z-50">
  <section className="w-full md:container mx-auto">
    <nav className="w-full flex justify-between items-center py-4 border-b border-white">
      <a href="/" className="flex items-center gap-4">
        <img src={icons} className="w-[70px] cursor-pointer ml-2 md:ml-0" alt="Logo" />
        <h2 className="text-white text-[22px] whitespace-nowrap">Password Manager</h2>
      </a>

      <div className="flex-1 items-center flex justify-end gap-4">
       
        <div className="relative hidden md:block border-2 border-blue-500 rounded-full bg-[#101E71] w-full max-w-[300px]">
          <img src={search} className="absolute top-1/2 left-3 -translate-y-1/2 w-7 h-7" alt="Search" />
          <input
            type="search"
            placeholder="Search"
            className="w-full p-2 pl-12 text-white bg-transparent outline-none placeholder:text-gray-300"
          />
        </div>

       
        <a className="w-14 h-14 flex items-center justify-center bg-[#101E71] border border-[#374CC4] rounded-full" href="/dashboard/folders">
          <img src={first} className="w-6 h-6" alt="Folders" />
        </a>
        <a className="w-14 h-14 flex items-center justify-center bg-[#101E71] border border-[#374CC4] rounded-full" href="/dashboard/add">
          <img src={second} className="w-6 h-6" alt="Add" />
        </a>
        <a className="w-14 h-14 flex items-center justify-center bg-[#101E71] border border-[#374CC4] rounded-full mr-3" href="/dashboard/folders">
          <img src={third} className="w-6 h-6" alt="Settings" />
        </a>
      </div>
    </nav>
  </section>
</header>

<main className="flex">
  <section className="w-full container flex flex-col gap-[15px]">
    <h4 className="text-white text-[22px] mt-5 font-[400]">Folders</h4>
    <ul className="flex flex-col h-[420px] overflow-auto gap-[9px]"></ul>
    <div className="flex justify-between">
      <div className="flex justify-start items-center text-[14px] rounded-[10px] h-10 px-2 mt-[15px] gap-[5px] text-white cursor-pointer" 
        style={{background: "linear-gradient(90deg, rgb(161, 67, 255) 0%, rgb(80, 3, 219) 100%)"}}>
        <img src={first} className="w-[15px] mb-[2px]"/>
          
        Logout
        </div>
        <div className="flex items-end text-end justify-end">
  <img src={first}/>
      
    
</div>
</div>
</section>

</main>
<section className="fixed inset-0 flex justify-center items-center bg-[rgba(14,26,96,0.95)] z-50 px-[20px]">
  <section className="bg-[#101E71] relative w-full max-w-[973px] px-[8px] py-[20px] sm:p-[20px] rounded-[5px] flex flex-col items-center">
    <h4 className="flex items-center gap-[9px] text-white text-[18px] sm:text-[22px] font-[400] text-center">
      <img src={generate} className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"/>
       
        
      Generate Password
    </h4>
    <span className="absolute right-[17px] top-[17px] cursor-pointer">
  <img src={cross}/>
    
</span>

<section className="mt-[40px] sm:mt-[7px] w-full flex flex-col gap-[3px]">
  <span className="text-white font-[400] text-[10px] sm:text-[16px] dm-sans">
    "Password Quality: "
    "Fair"
  </span>
  <section className="w-full flex flex-wrap justify-between items-center gap-[4px] sm:gap-[11px]">
  <div className="relative password-input flex-1">
  <input
                type={showPassword ? "text" : "password"}  
                value={password}  
                onChange={(e) => setPassword(e.target.value)} //
                className="relative w-full dm-sans rounded-[10px] outline-none bg-[#0E1a60] py-[10px] sm:py-[12px] px-[7px] sm:px-[17px] placeholder:text-[#DFDFDF36] text-white text-[9px] sm:text-[16px] font-[400]"
              />
<span 
                className="cursor-pointer absolute top-[50%] right-[13px] translate-y-[-50%]" 
                onClick={() => setShowPassword(!showPassword)} 
              >
                <img src={show} className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"/>
              </span>
              <div
  className="absolute bottom-0 left-0 h-[4px] rounded-b-[10px]"
  style={{
    width: "32.2581%",
    background: "linear-gradient(90deg, rgb(80, 3, 219) 0%, rgb(161, 67, 255) 100%)"
  }}
></div>
</div>
    <section className="flex gap-[4px] sm:gap-[10px] items-center">
  <div className="w-[25px] h-[32px] sm:w-[62px] sm:h-[55px] flex items-center justify-center rounded-[10px] bg-[#0E1A60] border-none outline-none">
    <img src={refresh} className="w-[11px] h-[11px] sm:w-[26px] sm:h-[26px]"/>   
  </div>
  <div className="w-[25px] h-[32px] sm:w-[62px] sm:h-[55px] flex items-center justify-center rounded-[10px] bg-[#0E1A60] border-none outline-none">
  <img src={copy} className="w-[13px] h-[13px] sm:w-[26px] sm:h-[26px]"/>
</div>
</section>
</section>
</section>
<section className="mt-[-40px] w-full flex flex-col gap-[3px]">
  <span className="text-white font-[400] text-[10px] sm:text-[16px] dm-sans">Password settings</span>
  <section className="w-full flex gap-[15px] sm:gap-[20px] flex-wrap justify-between items-center">
    <section className="flex-1 flex items-baseline gap-[10px] mt-10">
      <span className="w-[30px] sm:w-[71px] text-[#90BCFF] font-[400] dm-sans text-[8px] sm:text-[16px]">Length</span>
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
    onChange={(e) => setLength(e.target.value)}
  />
        </span>
      </section>
    </section>
    <section className="flex justify-between pl-[23px] sm:pl-[40px] pr-[10px] sm:pr-[17px] items-center w-[84px] sm:w-[204px] min-h-[33px] sm:min-h-[55px] bg-[#0E1A60] rounded-[10px] mt-10">
  <span className="w-[29px] sm:w-[70px] dm-sans text-[12px] sm:text-[22px] text-white font-[400]">10</span>
  <div className="flex flex-col gap-[5px] ">
    <span className="cursor-pointer">
      <img src={ups} className="w-[4.57px] h-[4.57px] sm:w-[11px] sm:h-[8px]"/>
        
    </span>
    <span className="cursor-pointer">
      <img src={down} className="w-[4.57px] h-[4.57px] sm:w-[11px] sm:h-[8px]"/>
        
    </span>
  </div>
</section>
</section>
</section>

<section className="mt-[24px] w-full flex flex-col gap-[3px]">
  <span className="text-white font-[400] text-[10px] sm:text-[16px] dm-sans">Character Type</span>
  <section className="border-[1px] w-full min-h-[70px] sm:min-h-[116px] border-[#194D9E] px-[8px] sm:px-[19px] py-[20px] sm:py-[32px] flex flex-wrap justify-between items-center gap-[19px] sm:gap-[30px]">
    <section className="flex flex-1 gap-[5px] sm:gap-[14px] items-center flex-wrap justify-between">
      <button name="is_uppercase" className="dm-sans flex-1 h-[30px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none border-none flex items-center justify-center text-[11px] sm:text-[17px] font-[400] text-black  bg-[#0E1A60]">
        A - Z
      </button>
      <button name="is_lowercase" className="dm-sans flex-1 h-[30px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none border-none flex items-center justify-center text-[11px] sm:text-[17px] font-[400] text-black  bg-[#0E1A60]">
        a - z
      </button>
      <button
  name="is_numeric"
  className="dm-sans flex-1 h-[30px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none border-none flex items-center justify-center text-[11px] sm:text-[17px] font-[400] text-black bg-blue-900"
>
  0 - 9
</button>
      <button name="is_special" className="dm-sans flex-1 h-[30px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none 
  border-none flex items-center justify-center text-[11px] sm:text-[17px] 
  font-[400] text-black  bg-[#0E1A60]">
  \*_
</button>
</section>

<button name="is_alphabets" className="dm-sans w-[78px] h-[29px] sm:w-[167px] sm:h-[43px] rounded-[6.23px] sm:rounded-[15px] outline-none 
  border-none flex items-center justify-center text-[8px] sm:text-[15px] 
  font-[400] text-white hover:bg-[#091246] 
  bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)]">
  Extended ASCII
</button>
</section>
</section>
<section className="mt-[20px] w-full flex items-center justify-end gap-[9px] sm:gap-[20px] flex-wrap">
  <button className="dm-sans bg-[#0E1A60] w-[70px] h-[30px] sm:w-[140px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none 
    border-none flex items-center justify-center text-[9px] sm:text-[15px] 
    font-[400] text-black" onClick={()=>navigate('/userdata')}>
    Close
  </button>
</section>
</section>
</section>

</div>    
        
  );
};

export default Generate;

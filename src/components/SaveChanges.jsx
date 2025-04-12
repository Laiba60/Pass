import React from 'react'
const SaveChanges = ({setIsLogin}) => {
  return (                                                                                      
<section className="fixed inset-0 flex justify-center items-center bg-[#0000006B] z-40 px-[20px]">
    <section className="bg-[#101E71] z-50 relative w-full max-w-[591px] h-[280px] sm:h-[318px] rounded-[5px] flex flex-col justify-center items-center">
        <span className="absolute right-[17px] top-[17px] cursor-pointer" onClick={()=>setIsLogin(false)}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L1 1M11 1L1 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            </span>
            <section className="flex flex-col max-w-[450px] mx-5 justify-center text-center mb-5">
                <h1 className="text-white leading-[20px] sm:leading-[44.7px] text-[10px] sm:text-[32px] mb-4">Would you like to save changes to this entry?</h1>
                </section>
                <section className="mt-[0px] sm:mt-[20px] w-full flex items-center justify-center gap-[9px] sm:gap-[36px] flex-wrap">
                    <button className="dm-sans  bg-[#0E1956] w-[125px] h-[40px] sm:w-[141px] sm:h-[50px]  rounded-[6.23px] sm:rounded-[15px] outline-none 
          border-none flex items-center justify-center text-[12px] sm:text-[15.5px] 
           font-[400] text-white" onClick={()=>setIsLogin(false)}>Cancel</button>
           <button className="dm-sans w-[125px] h-[40px] sm:w-[141px] sm:h-[50px] rounded-[6.23px] sm:rounded-[15px] outline-none 
          border-none flex items-center justify-center text-[12px] sm:text-[15.5px]  text-white" 
          style={{
            background: "linear-gradient(90deg, rgb(161, 67, 255) 0%, rgb(80, 3, 219) 100%)",
            cursor: "pointer"
          }} onClick={handleSubmit} disabled={isLoading}>
      {isLoading ? "Updating..." : "Update Password"}Okay</button>
          </section>
          </section>
          </section>
  )
}
export default SaveChanges;

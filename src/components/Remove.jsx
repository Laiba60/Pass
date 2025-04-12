import React from 'react'
import icons from "/images/icons.svg";
import { useNavigate } from 'react-router-dom';
import table from  "/images/table.svg";
import { useDeleteFolder } from "../hooks/useDeleteFolder";
const Remove = ({setIsRemove, folders,selectedFolder}) => {
  const navigate=useNavigate();
  const deleteFolderMutation = useDeleteFolder();
  return (
                         <section className="fixed inset-0 flex justify-center items-center bg-[#0000006B] z-50 px-[20px]">
                          <section className="bg-[#101E71] relative w-full max-w-[853px] h-[338px] rounded-[5px] flex flex-col justify-center items-center ">
                          <span className="absolute right-[17px] top-[17px] cursor-pointer">
                            <svg  onClick={()=>(setIsRemove(false))} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 11L1 1M11 1L1 11" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            </svg>
                            </span>
                            <section className="flex flex-col justify-center text-center mb-7 sm:mb-12px ">
                            <h1 className="text-white leading-[20px] sm:leading-[44.7px] text-[15px] sm:text-[16px] mb-4">Are you sure you want to delete  this folder.?</h1>
                            <p className="font-sans text-white px-5 max-w-[600px] leading-[20.83px] text-[11px] sm:text-[16px] ml-19">If you will delete this folder then existing passwords and the accounts will delete automatically. Are you sure you want to delete?</p>

                            </section>
                            <section className="mt-[0px] sm:mt-[20px] w-full flex items-center justify-center gap-[9px] sm:gap-[36px] flex-wrap">
                              <button className="dm-sans  bg-[#0E1956] w-[125px] h-[40px] sm:w-[254px] sm:h-[58px] rounded-[6.23px] sm:rounded-[18.37px] outline-none 
            border-none flex items-center justify-center text-[12px] sm:text-[15.5px] 
             font-[400] text-black" onClick={()=>(setIsRemove(false))}>Cancel</button>

{folders?.map((folder) => (
  <div key={folder?.id} className="flex items-center justify-between mb-2">
    
    <button
      className="dm-sans w-[125px] h-[40px] sm:w-[254px] sm:h-[58px] rounded-[6.23px] sm:rounded-[18.37px] outline-none border-none flex items-center justify-center text-[12px] sm:text-[16px] text-white"
      style={{
        background: "linear-gradient(90deg, rgb(161, 67, 255) 0%, rgb(80, 3, 219) 100%)",
        cursor: "pointer"
      }}
      onClick={() =>{
         deleteFolderMutation.mutate(folder.id)
      setIsRemove(false)
      }}
     
    >
      Delete
    </button>
  </div>
))}
  </section>

  </section>

 </section>

   
  )
}

export default Remove;


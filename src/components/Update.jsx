import React from 'react'
import icons from "/images/icons.svg";
import table from "/images/table.svg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUpdateFolder } from "../hooks/useUpdateFolder";
import { ClipLoader } from 'react-spinners';
const Update = ({ setIsUpdate,isUpdate,selectedFolder,setSelectedFolder,folders }) => {
    const navigate=useNavigate();
    const [newFolderName, setNewFolderName]=useState("");
    const updateFolderMutation = useUpdateFolder();
    const [editFolderId, setEditFolderId] = useState(null);
  const [editFolderName, setEditFolderName] = useState("");

  return (         
        <section className="fixed inset-0 flex justify-center items-center bg-[#0000006B] z-50 px-[20px]">
        <section className="bg-[#101E71] relative w-full max-w-[700px] h-[290px] flex flex-col justify  sm:h-[340px]">
        <span className="absolute right-[17px] top-[17px] cursor-pointer">
          <svg onClick={()=>(setIsUpdate(false))} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]">
        <path d="M1 19L19 1M1 1L19 19" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
        </span>
        <section className="flex justify-center flex-col mx-8 text-start mb-7">

        <h1 className="text-white text-start leading-[44.7px] text-[20px] sm:text-[32px] mb-9">Update Folder Name</h1>
        <div className="gap-[5px]">
            <label for="" className="text-white text-[12px] font-sans">Folder Name</label>
            {isUpdate && (
  <input 
    type="text" 
    value={selectedFolder?.title || ''} 
    onChange={(e) => setSelectedFolder({...selectedFolder, title: e.target.value})}
    className="border px-2 py-1 rounded"
  />
)}
        </div>
        </section>
        <section className="mt-[20px] w-full flex items-center justify-center gap-[9px] sm:gap-[36px] flex-wrap">
            <button className="dm-sans  bg-[#0E1956] w-[125px] h-[40px] sm:w-[254px] sm:h-[58px] rounded-[6.23px] sm:rounded-[18.37px] outline-none 
border-none flex items-center justify-center text-[12px] sm:text-[16px] 
font-[400] text-black" onClick={()=>setIsUpdate(false)}>Cancel</button>
<button
  className="dm-sans w-[125px] h-[40px] sm:w-[254px] sm:h-[58px] rounded-[6.23px] sm:rounded-[18.37px] outline-none border-none flex items-center justify-center text-[12px] sm:text-[16px] text-white"
  style={{
    background: "linear-gradient(90deg, rgb(161, 67, 255) 0%, rgb(80, 3, 219) 100%)",
    cursor: "pointer",
  }}
  onClick={() => {
    if (selectedFolder?.id) {
      updateFolderMutation.mutate(
        { folderId: selectedFolder.id, title: selectedFolder.title },
        {
          onSuccess: () => {
            setIsUpdate(false); 
            setSelectedFolder(null); 
          },
        }
      );
    }
  }}
  disabled={updateFolderMutation.isPending}
>
  {updateFolderMutation.isPending ? (
    <ClipLoader size={12} color="#fff" />
  ) : (
    "Update"
  )}
</button>


</section>
        </section>
        </section>                   
  )
}
export default Update;


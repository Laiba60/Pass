import icons from "/images/icons.svg";
import search from "/images/search.svg";
import table from "/images/table.svg";
import { useNavigate } from "react-router-dom";
import { useFetchFolder } from "../hooks/useFetchFolder";
import React, { useState } from "react";
import Add from "../components/Add";
import Remove from "../components/Remove";
import Update from "../components/Update";
import Generate from "../components/Generate";
import RemovePassword from "../components/RemovePassword";
import { useFetchPasswords } from "../hooks/useFetchPasswords";
const Userdata = () => {
  const navigate = useNavigate();
  const { data: passwords,isPasswordsLoading, isError } = useFetchPasswords();
  if (isPasswordsLoading) return <p>Loading passwords...</p>;
  if (isError) return <p>Error fetching passwords.</p>;
  const [searchQuery, setSearchQuery] = useState("");
  const [isShowAdd, setIsShowAdd]= useState(false);
  const [isShowRemove, setIsRemove]= useState(false);
  const [isUpdate, setIsUpdate]= useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null)
  const [Isgenerate,setIsgenerate]=useState(false);
  const { data: folders = [], isLoading } = useFetchFolder();
  const [folderToDelete, setFolderToDelete] = useState(null);
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [isRemove,setRemove]=useState(false);
const [isChecked, setIsChecked] = useState(false);


  
  return (
    <div className="relative min-h-[100vh] bg-[#0E1A60] text-white w-screen flex flex-col ">
      {/* Header */}
      <header className="bg-transparent z-1000 relative ml-30">
        <section className="md:container">
          <nav className="relative flex justify-between items-center py-[16px] mq2000:py-[24px]  gradient-border gap-[20px]">
            <a className="flex items-center gap-[4px]  md:gap-[15px] z-[2]" href="/">
            <img src={icons} className="w-[25px] mq2000:w-[100px] sm:w-[70px] cursor-pointer ml-3 md:ml-0"/>
            <h2 className="md:text-[22px] mq2000:text-[35px] xs:pb-0 text-[14.3px] text-white whitespace-nowrap">Password Manager</h2>
            </a>
            <div className="flex-1 items-center gap-[18px] flex justify-end z-[2]">
              <div className="relative flex-1 hidden md:block">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[50%] left-[13px] translate-y-[-50%] mq2000:w-[28px] mq2000:h-[28px]">
                <path d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="white"></path>
                </svg>
                <input className="dm-sans w-full border-[1px] rounded-[12px] border-[#374CC4] outline-none bg-[#101E71] py-[11px] mq2000:py-[21px] pl-[41px] mq2000:pl-[51px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] mq2000:text-[20px] leading-[32px] font-[400]"
                 placeholder="Search..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                </div>
                {isChecked ? (
  <div className="flex rounded-full">
   
   <a className="w-[36px] h-[36px]  mr-3 sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full " href="/Login">
   <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30.5" cy="30.5" r="30.35" fill="#101E71" stroke="#374CC4" stroke-width="0.3"/>
<path d="M25.8667 28L20 34M20 34L25.8667 40M20 34H36.1333C37.6893 34 39.1815 33.3679 40.2817 32.2426C41.3819 31.1174 42 29.5913 42 28C42 26.4087 41.3819 24.8826 40.2817 23.7574C39.1815 22.6321 37.6893 22 36.1333 22H34.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 </a>
 <a className="w-[36px] h-[36px]  mr-3 sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" onClick={()=>setRemove(true)}>
 <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] mq2000:w-[32px] mq2000:h-[32px]">
 <path d="M5.13542 1.62H4.95833C5.05573 1.62 5.13542 1.539 5.13542 1.44V1.62ZM5.13542 1.62H11.8646V1.44C11.8646 1.539 11.9443 1.62 12.0417 1.62H11.8646V3.24H13.4583V1.44C13.4583 0.64575 12.823 0 12.0417 0H4.95833C4.17695 0 3.54167 0.64575 3.54167 1.44V3.24H5.13542V1.62ZM16.2917 3.24H0.708333C0.316536 3.24 0 3.56175 0 3.96V4.68C0 4.779 0.0796875 4.86 0.177083 4.86H1.51406L2.06081 16.6275C2.09622 17.3948 2.72044 18 3.47526 18H13.5247C14.2818 18 14.9038 17.397 14.9392 16.6275L15.4859 4.86H16.8229C16.9203 4.86 17 4.779 17 4.68V3.96C17 3.56175 16.6835 3.24 16.2917 3.24ZM13.3543 16.38H3.6457L3.11003 4.86H13.89L13.3543 16.38Z" fill="white">
    </path>
   </svg>
   </a>
   
  </div>
) : (
  <div className="flex justify-end gap-[5px] md:gap-[19px] z-[2]">
   
    <div className="relative inline-block w-[36px] align-bottom md:hidden">
      <span className="inline-block pointer-events-none">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[13px]">
          <path d="M6.43225 5.66038H6.02573L5.88165 5.52144C6.40337 4.91631 6.6901 4.14375 6.68954 3.34477C6.68954 2.68324 6.49337 2.03656 6.12584 1.48652C5.75831 0.936472 5.23593 0.507764 4.62476 0.254607C4.01358 0.00144924 3.34106 -0.0647883 2.69224 0.0642703C2.04342 0.193329 1.44744 0.511887 0.979661 0.979661C0.511887 1.44744 0.193329 2.04342 0.0642703 2.69224C-0.0647883 3.34106 0.00144924 4.01358 0.254607 4.62476C0.507764 5.23593 0.936472 5.75831 1.48652 6.12584C2.03656 6.49337 2.68324 6.68954 3.34477 6.68954C4.17324 6.68954 4.93482 6.38594 5.52144 5.88165L5.66038 6.02573V6.43225L8.23328 9L9 8.23328L6.43225 5.66038ZM3.34477 5.66038C2.06347 5.66038 1.02916 4.62607 1.02916 3.34477C1.02916 2.06347 2.06347 1.02916 3.34477 1.02916C4.62607 1.02916 5.66038 2.06347 5.66038 3.34477C5.66038 4.62607 4.62607 5.66038 3.34477 5.66038Z" fill="white"></path>
        </svg>
      </span>
    </div>
    <a className="w-[36px] h-[36px] sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" href="/login">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]">
        <path d="M1 3.55556C1 2.87778 1.26925 2.22776 1.7485 1.7485C2.22776 1.26925 2.87778 1 3.55556 1H21.4444C22.1222 1 22.7722 1.26925 23.2515 1.7485C23.7308 2.22776 24 2.87778 24 3.55556V21.4444C24 22.1222 23.7308 22.7722 23.2515 23.2515C22.7722 23.7308 22.1222 24 21.4444 24H3.55556C2.87778 24 2.22776 23.7308 1.7485 23.2515C1.26925 22.7722 1 22.1222 1 21.4444V3.55556Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M8.02756 8.66669C8.38041 8.66669 8.66645 8.38065 8.66645 8.0278C8.66645 7.67496 8.38041 7.38892 8.02756 7.38892C7.67471 7.38892 7.38867 7.67496 7.38867 8.0278C7.38867 8.38065 7.67471 8.66669 8.02756 8.66669Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M16.9719 17.6112C17.3247 17.6112 17.6108 17.3251 17.6108 16.9723C17.6108 16.6194 17.3247 16.3334 16.9719 16.3334C16.619 16.3334 16.333 16.6194 16.333 16.9723C16.333 17.3251 16.619 17.6112 16.9719 17.6112Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12.5002 13.1389C12.8531 13.1389 13.1391 12.8528 13.1391 12.5C13.1391 12.1471 12.8531 11.8611 12.5002 11.8611C12.1474 11.8611 11.8613 12.1471 11.8613 12.5C11.8613 12.8528 12.1474 13.1389 12.5002 13.1389Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </a>
    <span className="w-[36px] h-[36px] sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" onClick={() => setIsgenerate(true)}>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] mq2000:w-[38px] mq2000:h-[38px]">
        <circle cx="11.5" cy="11.5" r="11" stroke="white"></circle>
        <path d="M15.328 12.56H11.76V16.16H10.72V12.56H7.168V11.6H10.72V8H11.76V11.6H15.328V12.56Z" fill="white"></path>
      </svg>
    </span>
    <a className="w-[36px] h-[36px] mr-3 sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" href="/login">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] mq2000:w-[32px] mq2000:h-[32px]">
        <path d="M0.675887 4.8375L0.625887 3.75C0.625887 3.08696 0.889279 2.45107 1.35812 1.98223C1.82696 1.51339 2.46285 1.25 3.12589 1.25H7.71589C8.37887 1.25014 9.01466 1.51363 9.48339 1.9825L10.5184 3.0175C10.9871 3.48637 11.6229 3.74986 12.2859 3.75H17.2634C17.6108 3.74996 17.9544 3.82233 18.2723 3.96249C18.5901 4.10265 18.8753 4.30751 19.1096 4.56403C19.3439 4.82054 19.5221 5.12306 19.633 5.4523C19.7438 5.78155 19.7848 6.13028 19.7534 6.47625L18.9571 15.2262C18.9007 15.8474 18.6141 16.425 18.1536 16.8457C17.6932 17.2664 17.0921 17.4998 16.4684 17.5H3.53339C2.90968 17.4998 2.3086 17.2664 1.84813 16.8457C1.38767 16.425 1.10108 15.8474 1.04464 15.2262L0.248387 6.47625C0.196183 5.89732 0.34735 5.31828 0.675887 4.83875V4.8375ZM2.73839 5C2.56474 4.99999 2.393 5.03616 2.23411 5.1062C2.07522 5.17624 1.93267 5.27862 1.81554 5.4068C1.69841 5.53499 1.60927 5.68617 1.5538 5.85072C1.49833 6.01526 1.47776 6.18956 1.49339 6.3625L2.28964 15.1125C2.3177 15.4231 2.46084 15.7119 2.69096 15.9224C2.92107 16.1329 3.22154 16.2497 3.53339 16.25H16.4684C16.7802 16.2497 17.0807 16.1329 17.3108 15.9224C17.5409 15.7119 17.6841 15.4231 17.7121 15.1125L18.5084 6.3625C18.524 6.18956 18.5034 6.01526 18.448 5.85072C18.3925 5.68617 18.3034 5.53499 18.1862 5.4068C18.0691 5.27862 17.9265 5.17624 17.7676 5.1062C17.6087 5.03616 17.4369 4.99999 17.2634 5H2.73839Z" fill="white"></path>
      </svg>
    </a>
  </div>
)}

                          </div>
                          </nav>
                          </section>
      </header>
      <main>
        <section className="w-full h-full relative flex mt-[10px] container mx-auto gap-[7px] ">
          <section className="hidden md:flex max-h-[624px] max-w-[296px] w-full bg-[#101E71] rounded-12px flex-col ">
            <section className="h-[575px] flex flex-col gap-[16px]">
              <h4 className="px-[21px] pb-2 flex justify-between text-white text-[16px] mt-[25px] font-[400]">
                Folders

                <span className="cursor-pointer" onClick={()=>setIsShowAdd(true)}>
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                    <path d="M8.14286 10.9167H13.8571M11 13.8293V8.08333M1 2.41667V15.1667C1 15.9181 1.30102 16.6388 1.83684 17.1701C2.37266 17.7015 3.09938 18 3.85714 18H18.1429C18.9006 18 19.6273 17.7015 20.1632 17.1701C20.699 16.6388 21 15.9181 21 15.1667V6.66242C20.9996 5.91121 20.6984 5.19091 20.1627 4.65986C19.6269 4.12882 18.9004 3.8305 18.1429 3.8305L11 3.83333L8.14286 1H2.42857C2.04969 1 1.68633 1.14926 1.41842 1.41493C1.15051 1.68061 1 2.04094 1 2.41667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
              </h4>
              <ul className="flex flex-col gap-[16px] cursor-pointer">
              {folders.map((folder) => (
                folder?.title && (
                <li key={folder.id} className="flex items-center gap-4 pl-6 w-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1786 4.58932C15.1786 4.09839 15.1454 3.61457 15.0813 3.14261H12.1452L11.0424 0.882429C10.7886 0.360666 10.2574 0.0310059 9.67871 0.0310059H1.51786C0.680664 0.0310059 0 0.71167 0 1.54886V13.7676C0 13.9265 0.0237165 14.0807 0.0711496 14.2253C1.43248 14.8586 2.95271 15.2143 4.55357 15.2143C10.421 15.2143 15.1786 10.4568 15.1786 4.58932Z"
                      fill="#FFD058"
                    />
                  </svg>
                  <h2 
  className="text-[24px] font-medium" 
  onClick={() => {
    setIsUpdate(true);
    setSelectedFolder(folder);
  }}
>
  {folder.title}
</h2>
                  <svg onClick={()=>setIsRemove(true)}
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.625 1.17H3.5C3.56875 1.17 3.625 1.1115 3.625 1.04V1.17ZM3.625 1.17H8.375V1.04C8.375 1.1115 8.43125 1.17 8.5 1.17H8.375V2.34H9.5V1.04C9.5 0.466375 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.466375 2.5 1.04V2.34H3.625V1.17ZM11.5 2.34H0.5C0.223437 2.34 0 2.57237 0 2.86V3.38C0 3.4515 0.05625 3.51 0.125 3.51H1.06875L1.45469 12.0087C1.47969 12.5629 1.92031 13 2.45312 13H9.54688C10.0813 13 10.5203 12.5645 10.5453 12.0087L10.9312 3.51H11.875C11.9438 3.51 12 3.4515 12 3.38V2.86C12 2.57237 11.7766 2.34 11.5 2.34ZM9.42656 11.83H2.57344L2.19531 3.51H9.80469L9.42656 11.83Z"
                      fill="#E14210"
                    />
                  </svg>
                </li>
                )
              ))}
              </ul>
            </section>
            <div className="flex justify-center mt-2 gap-2 text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[30px]">
                <path fill="#ffffff" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
              </svg>
              Logout
            </div>
          </section>
          <section className="flex-1">
      <section className="w-full rounded-[12px] flex flex-col gap-[11px]">
        <section className="bg-[#101E71] rounded-[12px] min-h-[624px]">
          <div className="relative h-[624px] sm:rounded-lg">
            <table className="w-full table-fixed text-center">
              <thead className="text-xs text-gray-700 uppercase z-[3] bg-[#010E59]">
                <tr>
                  <th className="p-0 w-[50px] h-[60px]">
                    <div className="flex items-center justify-center h-full">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-[18px] h-[18px] cursor-pointer bg-[#101E71] border-[#FFFFFF] rounded"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th className="border-[1.5px] w-[140px] h-[60px] border-[#002256] text-[#DFDFDF]">Title</th>
                  <th className="border-[1.5px] w-[140px] h-[60px] border-[#002256] text-[#DFDFDF]">Username</th>
                  <th className="border-[1.5px] w-[140px] h-[60px] border-[#002256] text-[#DFDFDF]">URL</th>
                  <th className="border-[1.5px] w-[160px] h-[60px] border-[#002256] text-[#DFDFDF]">Notes</th>
                  <th className="border-[1.5px] w-[230px] h-[60px] border-[#002256] text-[#DFDFDF]">Modified</th>
                </tr>
              </thead>

              <tbody className="relative w-full h-[200px] text-white">
  {isPasswordsLoading ? (
    <tr>
      <td colSpan="6" className="text-center py-10">Loading...</td>
    </tr>
  ) : isError ? (
    <tr>
      <td colSpan="2" className="text-center py-10 text-red-500">Error fetching data</td>
    </tr>
  ) : (!passwords || passwords.length === 0) ? (
    <tr>
      <td colSpan="6" className="w-full h-full mt-4px">
        <div className="flex flex-col justify-center items-center text-center py-10">
          <img src={table} className="mb-1" alt="Secure Logo" />
          <h1 className="text-[4px] text-white w-1/2">Secure Your First Password with Us</h1>
          <p className="text-[10px] font-sans leading-[13.02px] text-[#FFFFFFA1]">
            Take the first step towards safeguarding your digital world.<br />
            Start building your vault now.
          </p>
        </div>
      </td>
    </tr>
  ) : (
    (passwords || []).map((item, index) => (
      <tr key={item.id}>
        <td>
          <input type="checkbox" checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}className="w-[18px] h-[18px] cursor-pointer" />
        </td>
        <td className="border border-[#002256] px-2 py-1">{item.title}</td>
        <td className="border border-[#002256] px-2 py-1">{item.username}</td>
        <td className="border border-[#002256] px-2 py-1">{item.url}</td>
        <td className="border border-[#002256] px-2 py-1">{item.notes}</td>
        <td className="border border-[#002256]">
          {new Date(item.modified).toLocaleDateString()}
        </td>
        {isRemove && <RemovePassword setRemove={setRemove} itemid={item.id} />}
      </tr>

    ))
  )}
</tbody>

            </table>
          </div>
        </section>
      </section>
    </section>
    </section>
      </main>
      {isShowAdd && <Add setIsShowAdd={setIsShowAdd} />}
    { isShowRemove && <Remove setIsRemove={setIsRemove}selectedFolder={selectedFolder} folders={folders}/>}
    {isUpdate && <Update setIsUpdate={ setIsUpdate} isUpdate= {isUpdate}  selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} folders={folders}/>}
    {Isgenerate && <Generate setIsgenerate={setIsgenerate} />}
   
    </div>
  );
};
export default Userdata;

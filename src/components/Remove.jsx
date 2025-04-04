import React from 'react'
import icons from "/images/icons.svg";
const Remove = () => {
  return (
    <div className="relative min-h-[100vh] bg-[#0E1A60] text-white w-screen flex flex-col">
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
                              <input className="dm-sans w-full border-[1px] rounded-[12px] border-[#374CC4] outline-none bg-[#101E71] py-[11px] mq2000:py-[21px] pl-[41px] mq2000:pl-[51px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] mq2000:text-[20px] leading-[32px] font-[400]" placeholder="Search..." value="" />
                              </div>
                              <div className="flex justify-end gap-[5px] md:gap-[19px] z-[2]">
                                
                
                                <div className="relative inline-block w-[36px] align-bottom md:hidden">
                                  <input id="searchleft" type="search" name="q" placeholder="Search" className="absolute font-sans left-0 focus:w-[160px]  focus:p-[0_16px_0_0] focus:pl-[10px] placeholder:text-white text-white text-[12px] focus:border-[.5px] rounded-[20px] border-[#374CC4] bg-[#101E71] outline-none p-0 w-0 h-full z-10 transition-[width] duration-400" value=""/>
                                  <label for="searchleft" className="absolute w-[36px] h-[36px]  flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full m-0 p-0 transition duration-400 cursor-pointer">
                                    <span className="inline-block pointer-events-none"><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[13px]">
                                    <path d="M6.43225 5.66038H6.02573L5.88165 5.52144C6.40337 4.91631 6.6901 4.14375 6.68954 3.34477C6.68954 2.68324 6.49337 2.03656 6.12584 1.48652C5.75831 0.936472 5.23593 0.507764 4.62476 0.254607C4.01358 0.00144924 3.34106 -0.0647883 2.69224 0.0642703C2.04342 0.193329 1.44744 0.511887 0.979661 0.979661C0.511887 1.44744 0.193329 2.04342 0.0642703 2.69224C-0.0647883 3.34106 0.00144924 4.01358 0.254607 4.62476C0.507764 5.23593 0.936472 5.75831 1.48652 6.12584C2.03656 6.49337 2.68324 6.68954 3.34477 6.68954C4.17324 6.68954 4.93482 6.38594 5.52144 5.88165L5.66038 6.02573V6.43225L8.23328 9L9 8.23328L6.43225 5.66038ZM3.34477 5.66038C2.06347 5.66038 1.02916 4.62607 1.02916 3.34477C1.02916 2.06347 2.06347 1.02916 3.34477 1.02916C4.62607 1.02916 5.66038 2.06347 5.66038 3.34477C5.66038 4.62607 4.62607 5.66038 3.34477 5.66038Z" fill="white">
                                      </path>
                                      </svg>
                                      </span>
                                      </label>
                                      </div>
                                      <a className="w-[36px] h-[36px]  sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" href="/login">
                                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]">
                                      <path d="M1 3.55556C1 2.87778 1.26925 2.22776 1.7485 1.7485C2.22776 1.26925 2.87778 1 3.55556 1H21.4444C22.1222 1 22.7722 1.26925 23.2515 1.7485C23.7308 2.22776 24 2.87778 24 3.55556V21.4444C24 22.1222 23.7308 22.7722 23.2515 23.2515C22.7722 23.7308 22.1222 24 21.4444 24H3.55556C2.87778 24 2.22776 23.7308 1.7485 23.2515C1.26925 22.7722 1 22.1222 1 21.4444V3.55556Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M8.02756 8.66669C8.38041 8.66669 8.66645 8.38065 8.66645 8.0278C8.66645 7.67496 8.38041 7.38892 8.02756 7.38892C7.67471 7.38892 7.38867 7.67496 7.38867 8.0278C7.38867 8.38065 7.67471 8.66669 8.02756 8.66669Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M16.9719 17.6112C17.3247 17.6112 17.6108 17.3251 17.6108 16.9723C17.6108 16.6194 17.3247 16.3334 16.9719 16.3334C16.619 16.3334 16.333 16.6194 16.333 16.9723C16.333 17.3251 16.619 17.6112 16.9719 17.6112Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M12.5002 13.1389C12.8531 13.1389 13.1391 12.8528 13.1391 12.5C13.1391 12.1471 12.8531 11.8611 12.5002 11.8611C12.1474 11.8611 11.8613 12.1471 11.8613 12.5C11.8613 12.8528 12.1474 13.1389 12.5002 13.1389Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                      </a>
                                      <a className="w-[36px] h-[36px]  sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" href="/generate">
                                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] mq2000:w-[38px] mq2000:h-[38px]"><circle cx="11.5" cy="11.5" r="11" stroke="white"></circle>
                                      <path d="M15.328 12.56H11.76V16.16H10.72V12.56H7.168V11.6H10.72V8H11.76V11.6H15.328V12.56Z" fill="white"></path>
                                      </svg>
                                      </a>
                                      <a className="w-[36px] h-[36px]  mr-3 sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" href="/login">
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] mq2000:w-[32px] mq2000:h-[32px]">
                                      <path d="M0.675887 4.8375L0.625887 3.75C0.625887 3.08696 0.889279 2.45107 1.35812 1.98223C1.82696 1.51339 2.46285 1.25 3.12589 1.25H7.71589C8.37887 1.25014 9.01466 1.51363 9.48339 1.9825L10.5184 3.0175C10.9871 3.48637 11.6229 3.74986 12.2859 3.75H17.2634C17.6108 3.74996 17.9544 3.82233 18.2723 3.96249C18.5901 4.10265 18.8753 4.30751 19.1096 4.56403C19.3439 4.82054 19.5221 5.12306 19.633 5.4523C19.7438 5.78155 19.7848 6.13028 19.7534 6.47625L18.9571 15.2262C18.9007 15.8474 18.6141 16.425 18.1536 16.8457C17.6932 17.2664 17.0921 17.4998 16.4684 17.5H3.53339C2.90968 17.4998 2.3086 17.2664 1.84813 16.8457C1.38767 16.425 1.10108 15.8474 1.04464 15.2262L0.248387 6.47625C0.196183 5.89732 0.34735 5.31828 0.675887 4.83875V4.8375ZM2.73839 5C2.56474 4.99999 2.393 5.03616 2.23411 5.1062C2.07522 5.17624 1.93267 5.27862 1.81554 5.4068C1.69841 5.53499 1.60927 5.68617 1.5538 5.85072C1.49833 6.01526 1.47776 6.18956 1.49339 6.3625L2.28964 15.1125C2.3177 15.4231 2.46084 15.7119 2.69096 15.9224C2.92107 16.1329 3.22154 16.2497 3.53339 16.25H16.4684C16.7802 16.2497 17.0807 16.1329 17.3108 15.9224C17.5409 15.7119 17.6841 15.4231 17.7121 15.1125L18.5084 6.3625C18.524 6.18956 18.5034 6.01526 18.448 5.85072C18.3925 5.68617 18.3034 5.53499 18.1862 5.4068C18.0691 5.27862 17.9265 5.17624 17.7677 5.1062C17.6088 5.03616 17.437 4.99999 17.2634 5H2.73839ZM8.60089 2.86625C8.48469 2.75002 8.34672 2.65784 8.19486 2.595C8.043 2.53215 7.88024 2.49987 7.71589 2.5H3.12589C2.79844 2.49994 2.48405 2.62837 2.2503 2.85768C2.01655 3.08699 1.88211 3.39886 1.87589 3.72625L1.88339 3.9C2.15255 3.80083 2.43755 3.75083 2.73839 3.75H9.48339L8.60089 2.86625Z" fill="white">
                                        </path>
                                        </svg>
                                        </a>
                                        </div>
                                        </div>
                                        </nav>
                                        </section>
                    </header>
                    <main>
                           <section className="w-full h-full relative flex mt-[10px] container gap-[7px] ml-30">
                             <section className="hidden md:flex max-h-[624px] max-w-[296px] w-full bg-[#101E71] rounded-12px flex-col ">
                               <section className="h-[575px] flex flex-col gap-[16px]">
                                 <h4 className="px-[21px] pb-2 flex justify-between text-white text-[16px] mt-[25px] font-[400]">
                                   Folders
                                   <span className="cursor-pointer" onClick={()=>navigate('/add')}>
                     
                                     <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                                       <path d="M8.14286 10.9167H13.8571M11 13.8293V8.08333M1 2.41667V15.1667C1 15.9181 1.30102 16.6388 1.83684 17.1701C2.37266 17.7015 3.09938 18 3.85714 18H18.1429C18.9006 18 19.6273 17.7015 20.1632 17.1701C20.699 16.6388 21 15.9181 21 15.1667V6.66242C20.9996 5.91121 20.6984 5.19091 20.1627 4.65986C19.6269 4.12882 18.9004 3.8305 18.1429 3.8305L11 3.83333L8.14286 1H2.42857C2.04969 1 1.68633 1.14926 1.41842 1.41493C1.15051 1.68061 1 2.04094 1 2.41667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                     </svg>
                                   </span>
                                 </h4>
                                 <div className="flex items-center gap-2">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.1786 4.58932C15.1786 4.09839 15.1454 3.61457 15.0813 3.14261H12.1452L11.0424 0.882429C10.7886 0.360666 10.2574 0.0310059 9.67871 0.0310059H1.51786C0.680664 0.0310059 0 0.71167 0 1.54886V13.7676C0 13.9265 0.0237165 14.0807 0.0711496 14.2253C1.43248 14.8586 2.95271 15.2143 4.55357 15.2143C10.421 15.2143 15.1786 10.4568 15.1786 4.58932Z" fill="#FFD058"/>
  </svg>
  <h2 className="text-[24px] font-medium">FolderName</h2>
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.625 1.17H3.5C3.56875 1.17 3.625 1.1115 3.625 1.04V1.17ZM3.625 1.17H8.375V1.04C8.375 1.1115 8.43125 1.17 8.5 1.17H8.375V2.34H9.5V1.04C9.5 0.466375 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.466375 2.5 1.04V2.34H3.625V1.17ZM11.5 2.34H0.5C0.223437 2.34 0 2.57237 0 2.86V3.38C0 3.4515 0.05625 3.51 0.125 3.51H1.06875L1.45469 12.0087C1.47969 12.5629 1.92031 13 2.45312 13H9.54688C10.0813 13 10.5203 12.5645 10.5453 12.0087L10.9312 3.51H11.875C11.9438 3.51 12 3.4515 12 3.38V2.86C12 2.57237 11.7766 2.34 11.5 2.34ZM9.42656 11.83H2.57344L2.19531 3.51H9.80469L9.42656 11.83Z" fill="#E14210"/>
  </svg>
</div>
                                 <ul className="flex flex-col gap-[16px] ">
                                   
                                 </ul>
                               </section>
                               <div className="flex justify-center mt-2 gap-2 text-white cursor-pointer">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[30px]">
                                   <path fill="#ffffff" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                                 </svg>
                                 Logout
                               </div>
                             </section>
                             <section className="flex-1 ">
                               <section className="w-full rounded-[12px] flexx flex-col gap-[11px]">
                                 <section className="bg-[#101E71] rounded-[12px] min-h-[624px]">
                                   <div className="relative h-[624px]  sm:rounded-lg">
                                     <table className="w-full table-fixed text-center">
                                       <thead className="text-xs text-gray-700 uppercase z-[3] bg-[#010E59]">
                                         <tr>
                                           <th scope="col" className="p-0 w-[50px] h-[60px]">
                                             <div className="flex items-center justify-center h-full">
                                               <input id="checkbox-all-search" type="checkbox" className="w-[18px] h-[18px] cursor-pointer bg-[#101E71] border-[#FFFFFF] rounded" />
                                               <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                             </div>
                                           </th>
                                           <th scope="col" className="border-[1.5px] overflow-hidden w-[140px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]">Title</th>
                                           <th scope="col" className="border-[1.5px] overflow-hidden w-[140px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]">Username</th>
                                           <th scope="col" className="border-[1.5px] overflow-hidden w-[140px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]">URL</th>
                                           <th scope="col" className="border-[1.5px] overflow-hidden w-[160px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]">Notes</th>
                                           <th scope="col" className="border-[1.5px] overflow-hidden w-[230px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-0 py-0 text-[#DFDFDF]">Modified</th>
                                         </tr>
                                       </thead>
                                       <tbody className="relative w-full h-[565px]">
                                         <tr>
                                           <td className="w-full h-full">
                                             <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                                               <img src={table} className="mb-1 cursor-pointer" alt="Secure Logo"/>
                                               <h1 className="text-[5px]  text-white">Secure Your First Password with Us</h1>
                                               <p className="text-[10px] font-sans leading-[13.02px] text-[#FFFFFFA1]">
                                                 Take the first step towards safeguarding your digital world. Add your first password now and<br />
                                                 experience top-notch security, ease of access, and peace of mind. Start building your vault and
                                               </p>
                                             </div>
                                           </td>
                                         </tr>
                                       </tbody>
                                     </table>
                                   </div>
                                 </section>
                               </section>
                             </section>
                           </section>
                         </main>
                         <section className="fixed inset-0 flex justify-center items-center bg-[#0000006B] z-50 px-[20px]">
                          <section className="bg-[#101E71] relative w-full max-w-[853px] h-[338px] rounded-[5px] flex flex-col justify-center items-center ">
                          <span className="absolute right-[17px] top-[17px] cursor-pointer">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 11L1 1M11 1L1 11" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            </svg>
                            </span>
                            <section className="flex flex-col justify-center text-center mb-7 sm:mb-12px ">
                            <h1 className="text-white leading-[20px] sm:leading-[44.7px] text-[20px] sm:text-[32px] mb-4">Are you sure you want to delete <br> this folder</br>.?</h1>
                            <p className="font-sans text-white px-5 max-w-[600px] leading-[20.83px] text-[11px] sm:text-[16px]">If you will delete this folder then existing passwords and the accounts will delete automatically. Are you sure you want to delete?</p>

                            </section>
                            <section className="mt-[0px] sm:mt-[20px] w-full flex items-center justify-center gap-[9px] sm:gap-[36px] flex-wrap">
                              <button className="dm-sans  bg-[#0E1956] w-[125px] h-[40px] sm:w-[254px] sm:h-[58px] rounded-[6.23px] sm:rounded-[18.37px] outline-none 
            border-none flex items-center justify-center text-[12px] sm:text-[15.5px] 
             font-[400] text-white">Cancel</button>
             <button className="dm-sans w-[125px] h-[40px] sm:w-[254px] sm:h-[58px] rounded-[6.23px] sm:rounded-[18.37px] outline-none border-none flex items-center justify-center text-[12px] sm:text-[16px] text-white" style={{
  background: "linear-gradient(90deg, rgb(161, 67, 255) 0%, rgb(80, 3, 219) 100%)",
  cursor: "pointer"
}}

             >Delete</button>
             </section>

                          </section>

                         </section>

    </div>
  )
}

export default Remove;


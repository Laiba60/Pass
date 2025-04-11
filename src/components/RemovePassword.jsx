 import icons from "/images/icons.svg";
 import { useDeletePassword } from "../hooks/useDeletePassword";
const RemovePassword=({setRemove,itemid})=>{
    const { mutate: deletePassword, isLoading } = useDeletePassword();
    const handleDelete = (itemid) => {
        console.log("Attempting to delete password with ID:",itemid );
        deletePassword(itemid); 
      };
    return(
    <div className="h-[100vh]">
        <header className="bg-transparent z-1000 relative">
            <section class="md:container">
                <nav className="relative flex justify-between items-center py-[16px] mq2000:py-[24px]  gradient-border gap-[26px]">
                <a className="flex items-center gap-[4px]  md:gap-[15px] z-[2]" href="/">
                <img src={icons} className="w-[25px] mq2000:w-[100px] sm:w-[70px] cursor-pointer ml-2 md:ml-0"/>
                <h2 className="md:text-[22px] mq2000:text-[35px] xs:pb-0 text-[14.3px] text-white whitespace-nowrap">Password Manager</h2>
                </a>
                <div className="flex-1 items-center gap-[18px] flex justify-end z-[2]">
                    <div className="relative flex-1 hidden md:block">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[50%] left-[13px] translate-y-[-50%] mq2000:w-[28px] mq2000:h-[28px]">
                        <path d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="white">
                            </path>
                            </svg>
                            <input className="dm-sans w-full border-[1px] rounded-[12px] border-[#374CC4] outline-none bg-[#101E71] py-[11px] mq2000:py-[21px] pl-[41px] mq2000:pl-[51px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] mq2000:text-[20px] leading-[32px] font-[400]" placeholder="Search..." value=""/>
                            </div>
                            <div className="flex justify-end gap-[5px] md:gap-[19px] z-[2]">
                                <div className="relative inline-block w-[36px] align-bottom md:hidden">
                                    <input id="searchleft" type="search" name="q" placeholder="Search" className="absolute font-sans left-0 focus:w-[160px]  focus:p-[0_16px_0_0] focus:pl-[10px] placeholder:text-white text-white text-[12px] focus:border-[.5px] rounded-[20px] border-[#374CC4] bg-[#101E71] outline-none p-0 w-0 h-full z-10 transition-[width] duration-400" value=""/>
                                    <label for="searchleft" className="absolute w-[36px] h-[36px]  flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full m-0 p-0 transition duration-400 cursor-pointer">
                                        <span className="inline-block pointer-events-none">
                                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[13px]">
                                            <path d="M6.43225 5.66038H6.02573L5.88165 5.52144C6.40337 4.91631 6.6901 4.14375 6.68954 3.34477C6.68954 2.68324 6.49337 2.03656 6.12584 1.48652C5.75831 0.936472 5.23593 0.507764 4.62476 0.254607C4.01358 0.00144924 3.34106 -0.0647883 2.69224 0.0642703C2.04342 0.193329 1.44744 0.511887 0.979661 0.979661C0.511887 1.44744 0.193329 2.04342 0.0642703 2.69224C-0.0647883 3.34106 0.00144924 4.01358 0.254607 4.62476C0.507764 5.23593 0.936472 5.75831 1.48652 6.12584C2.03656 6.49337 2.68324 6.68954 3.34477 6.68954C4.17324 6.68954 4.93482 6.38594 5.52144 5.88165L5.66038 6.02573V6.43225L8.23328 9L9 8.23328L6.43225 5.66038ZM3.34477 5.66038C2.06347 5.66038 1.02916 4.62607 1.02916 3.34477C1.02916 2.06347 2.06347 1.02916 3.34477 1.02916C4.62607 1.02916 5.66038 2.06347 5.66038 3.34477C5.66038 4.62607 4.62607 5.66038 3.34477 5.66038Z" fill="white"></path>
                                            </svg>
                                            </span>
                                            </label>
                                            </div>
                                            <button className="w-[36px] h-[36px]  mr-3 sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full">
                                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] mq2000:w-[32px] mq2000:h-[32px]">
                                                <path d="M6.86667 7L1 13M1 13L6.86667 19M1 13H17.1333C18.6893 13 20.1815 12.3679 21.2817 11.2426C22.3819 10.1174 23 8.5913 23 7C23 5.4087 22.3819 3.88258 21.2817 2.75736C20.1815 1.63214 18.6893 1 17.1333 1H15.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                    </svg>
                                                    </button
                                                    ><button className="w-[36px] h-[36px]  mr-3 sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full">
                                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] mq2000:w-[32px] mq2000:h-[32px]">
                                                        <path d="M5.13542 1.62H4.95833C5.05573 1.62 5.13542 1.539 5.13542 1.44V1.62ZM5.13542 1.62H11.8646V1.44C11.8646 1.539 11.9443 1.62 12.0417 1.62H11.8646V3.24H13.4583V1.44C13.4583 0.64575 12.823 0 12.0417 0H4.95833C4.17695 0 3.54167 0.64575 3.54167 1.44V3.24H5.13542V1.62ZM16.2917 3.24H0.708333C0.316536 3.24 0 3.56175 0 3.96V4.68C0 4.779 0.0796875 4.86 0.177083 4.86H1.51406L2.06081 16.6275C2.09622 17.3948 2.72044 18 3.47526 18H13.5247C14.2818 18 14.9038 17.397 14.9392 16.6275L15.4859 4.86H16.8229C16.9203 4.86 17 4.779 17 4.68V3.96C17 3.56175 16.6835 3.24 16.2917 3.24ZM13.3543 16.38H3.6457L3.11003 4.86H13.89L13.3543 16.38Z" fill="white">
            </path>
            </svg>
            </button
            ></div>
            </div>
            </nav>
            </section>
            </header>
            <main>
                <section className="w-full h-full relative flex mt-[20px] container gap-[7px]">
                    <section className="hidden md:flex max-h-[624px] max-w-[296px] w-full bg-[#101E71] rounded-[12px] flex-col">
                        <section class="h-[575px] flex flex-col gap-[16px]">
                            <h4 class="px-[21px] pb-2 flex justify-between text-white text-[16px] mt-[25px] font-[400]">Folders<span class="cursor-pointer">
                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1"><path d="M8.14286 10.9167H13.8571M11 13.8293V8.08333M1 2.41667V15.1667C1 15.9181 1.30102 16.6388 1.83684 17.1701C2.37266 17.7015 3.09938 18 3.85714 18H18.1429C18.9006 18 19.6273 17.7015 20.1632 17.1701C20.699 16.6388 21 15.9181 21 15.1667V6.66242C20.9996 5.91121 20.6984 5.19091 20.1627 4.65986C19.6269 4.12882 18.9004 3.8305 18.1429 3.8305L11 3.83333L8.14286 1H2.42857C2.04969 1 1.68633 1.14926 1.41842 1.41493C1.15051 1.68061 1 2.04094 1 2.41667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </span>
                                </h4>
                                <ul className="flex flex-col gap-[16px] overflow-y-auto">
                                    <li>
                                        <div className="h-[54px] max-w-[296px] flex cursor-pointer items-center py-[6px] px-[13px] pl-[21px] ">
                                            <div className="flex h-full w-full justify-between items-center">
                                                <div className="flex gap-[15px] items-center relative">
                                                    <svg width="48" height="43" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="43" rx="12" fill="#0E1A60"></rect><path d="M17.2291 25.0773H31.5396C32.1989 25.0773 32.7326 24.5437 32.7326 23.8843V12H16.0361V23.8843C16.0361 24.5437 16.5698 25.0773 17.2291 25.0773Z" fill="#FFEA00"></path><path d="M15.7105 26.5951H30.0211C30.6804 26.5951 31.214 26.0615 31.214 25.4022V13.5178H14.5176V25.4022C14.5176 26.0615 15.0512 26.5951 15.7105 26.5951Z" fill="#FFFF8D"></path><path d="M34.25 19.6605V28.7676C34.25 29.6048 33.5693 30.2855 32.7321 30.2855H14.5179C13.6807 30.2855 13 29.6048 13 28.7676V16.5489C13 15.7117 13.6807 15.031 14.5179 15.031H22.6787C23.2598 15.031 23.7886 15.3607 24.0424 15.8824L25.1452 18.1426H32.7321C33.5693 18.1426 34.25 18.8233 34.25 19.6605Z" fill="#FFBC10"></path><path d="M28.1786 19.5893C28.1786 19.0984 28.1454 18.6146 28.0813 18.1426H25.1452L24.0424 15.8824C23.7886 15.3607 23.2574 15.031 22.6787 15.031H14.5179C13.6807 15.031 13 15.7117 13 16.5489V28.7676C13 28.9265 13.0237 29.0807 13.0711 29.2253C14.4325 29.8586 15.9527 30.2143 17.5536 30.2143C23.421 30.2143 28.1786 25.4568 28.1786 19.5893Z" fill="#FFD058"></path></svg>
                                                    <h4 className="text-[#DFDFDF] text-[12px] leading-[32px] font-[400] dm-sans">folder</h4>
                                                    </div>
                                                    <span className="ml-auto">
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]">
                                                        <path d="M6.04167 1.89H5.83333C5.94792 1.89 6.04167 1.7955 6.04167 1.68V1.89ZM6.04167 1.89H13.9583V1.68C13.9583 1.7955 14.0521 1.89 14.1667 1.89H13.9583V3.78H15.8333V1.68C15.8333 0.753375 15.0859 0 14.1667 0H5.83333C4.91406 0 4.16667 0.753375 4.16667 1.68V3.78H6.04167V1.89ZM19.1667 3.78H0.833333C0.372396 3.78 0 4.15538 0 4.62V5.46C0 5.5755 0.09375 5.67 0.208333 5.67H1.78125L2.42448 19.3988C2.46615 20.2939 3.20052 21 4.08854 21H15.9115C16.8021 21 17.5339 20.2965 17.5755 19.3988L18.2187 5.67H19.7917C19.9062 5.67 20 5.5755 20 5.46V4.62C20 4.15538 19.6276 3.78 19.1667 3.78ZM15.7109 19.11H4.28906L3.65885 5.67H16.3411L15.7109 19.11Z" fill="#E14210"></path></svg></span>
                                                        </div>
                                                        </div>
                                                        </li>
                                                        </ul>
                                                        </section>
                                                        <hr className="border-[1.5px] border-[#00112B]"/>
                                                        <div className="flex justify-center mt-2 gap-2 text-white cursor-pointer ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[30px]">
                                                            <path fill="#ffffff" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                                                            </svg> Logout</div>
                                                            </section>
                                                            <section className="flex-1 overflow-x-auto">
                                                                <section className="w-full rounded-[12px] flex flex-col gap-[11px]">
                                                                    <section className="bg-[#101E71] rounded-[12px] min-h-[624px]">
                                                                        <div className="relative h-[624px] overflow-auto  sm:rounded-lg">
                                                                            <table className="w-full table-fixed text-center">
                                                                                <thead className="text-xs text-gray-700 uppercase z-[3] bg-[#010E59]">
                                                                                    <tr>
                                                                                        <th scope="col" className="p-0 w-[50px] h-[60px]">
                                                                                        <div className="flex items-center justify-center h-full">
                                                                                            <input id="checkbox-all-search" type="checkbox" className="w-[18px] h-[18px] cursor-pointer bg-[#101E71] border-[#FFFFFF] rounded"/>
                                                                                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                                                                            </div>
                                                                                            </th>
                                                                                            <th scope="col" className="border-[1.5px] overflow-hidden w-[140px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]">Title</th>
                                                                                            <th scope="col" className="border-[1.5px] overflow-hidden w-[140px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]">Username</th>
                                                                                            <th scope="col" className="border-[1.5px] overflow-hidden w-[140px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]">URL</th>
                                                                                            <th scope="col" className="border-[1.5px] overflow-hidden w-[160px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]">Notes</th>
                                                                                            <th scope="col" className="border-[1.5px] overflow-hidden w-[230px] h-[60px] border-[#002256] dm-sans text-[15px] font-[400] px-0 py-0 text-[#DFDFDF]">Modified</th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                                <tr className="bg-transparent border-[1.5px] border-[#002256] hover:bg-[#4207AF]">
                                                                                                    <td className="w-4 p-4" style={{height: '70px'}}>
                                                                                                        <div class="flex items-center">
                                                                                                        <input id="checkbox-table-search-0" type="checkbox" className="w-[18px] h-[18px] bg-[#101E71] cursor-pointer border-[#FFFFFF] rounded"/>
                                                                                                        <label for="checkbox-table-search-0" className="sr-only">checkbox</label>
                                                                                                        </div>
                                                                                                        </td><th scope="row" className="border-[1.5px] relative border-[#002256] overflow-hidden dm-sans text-[15px] font-[400] pl-10 px-6 py-0 text-[#DFDFDF] whitespace-nowrap" style={{height: '70px'}}>java</th>
                                                                                                        <td className="border-[1.5px] border-[#002256] overflow-hidden dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]" style={{height: '70px'}}></td>
                                                                                                        <td className="border-[1.5px] border-[#002256] overflow-hidden dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]" style={{height: '70px'}}>
                        </td>
                        <td className="border-[1.5px] border-[#002256] overflow-hidden dm-sans text-[15px] font-[400] px-6 py-0 text-[#DFDFDF]" style={{height: '70px'}}>
                        </td>
                        <td className="border-[1.5px] border-[#002256] overflow-hidden dm-sans text-[15px] font-[400] px-3 py-0 text-[#DFDFDF]" style={{height: '70px'}}>Apr 10th 2025, 10:28:17 am</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </section>
            <div className="block lg:hidden">

            </div>
            </section>
            </section>
            </section>
            </main>
            <section className="fixed inset-0 flex justify-center items-center bg-[#0000006B] z-50 px-[20px]">
                <section className="bg-[#101E71] relative w-full max-w-[853px] h-[338px] sm:h-[448px] rounded-[5px] flex flex-col justify-center items-center">
                    <span className="absolute right-[17px] top-[17px] cursor-pointer">
                    <svg onClick={()=>setRemove(false)} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 11L1 1M11 1L1 11" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        </svg>
                    </span>
                    <section className="flex flex-col justify-center items-center text-center mb-7 sm:mb-12">
                        <h1 className="text-white leading-[20px] sm:leading-[44.7px] text-[20px] sm:text-[32px] mb-4">Are you sure you want to delete this <br /> account password record?</h1>
                        <p className="font-sans text-white px-5 leading-[20.83px] text-[11px] sm:text-[16px]">Are you sure you want to delete this account password?</p>
                        </section>
                        <section className="mt-[0px] sm:mt-[20px] w-full flex items-center justify-center gap-[9px] sm:gap-[36px] flex-wrap">
                            <button className="dm-sans  bg-[#0E1956] w-[125px] h-[40px] sm:w-[254px] sm:h-[58px] rounded-[6.23px] sm:rounded-[18.37px] outline-none 
          border-none flex items-center justify-center text-[12px] sm:text-[15.5px] 
           font-[400] text-black" onClick={()=>setRemove(false)}>Cancel</button>
          <button
     onClick={() => handleDelete(itemid)}
      disabled={isLoading}
      className="dm-sans w-[125px] h-[40px] sm:w-[254px] sm:h-[58px] rounded-[6.23px] sm:rounded-[18.37px] outline-none 
          border-none flex items-center justify-center text-[12px] sm:text-[15.5px] text-black"
      style={{
        background: "linear-gradient(90deg, rgb(161, 67, 255) 0%, rgb(80, 3, 219) 100%)",
        cursor: isLoading ? "not-allowed" : "pointer",
        opacity: isLoading ? 0.6 : 1,
      }}
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
          </section>
          </section>
          </section>

    </div>
  
                     
    )
};
export default RemovePassword;
 import icons from "/images/icons.svg";
 import { useDeletePassword } from "../hooks/useDeletePassword";
const RemovePassword=({setRemove,itemid})=>{
    const { mutate: deletePassword, isLoading } = useDeletePassword();
    const handleDelete = (itemid) => {
        console.log("Attempting to delete password with ID:",itemid );
        deletePassword(itemid); 
      };
    return(
    
            <section className="fixed inset-0 flex justify-center items-center bg-[#0000006B] z-50 px-[20px] ">
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
    onClick={() => {
        handleDelete(itemid);
        setRemove(true);
      }}
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

    
  
                     
    )
};
export default RemovePassword;
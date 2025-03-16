import icons from "/images/icons.svg";
import root2 from "/images/root2.svg";
import plus from "/images/plus.svg";
import root4 from "/images/root4.svg";
import folder from "/images/folder.svg";
import pic from "/images/pic.svg";
import data from "/images/data.svg";
import search from '/images/search.svg';
import { useNavigate } from "react-router-dom";
const Userdata = () => {
    const navigate=useNavigate();
  return (
    <div className="relative min-h-screen bg-[#0E1A60] text-white w-screen">
      <header className="flex items-center justify-between bg-[#101E71] p-2 shadow-lg">
        <div className="flex items-center space-x-3 ml-20">
          <img src={icons} alt="Security Icon" className="w-12 h-12" />
          <h2 className="text-2xl font-bold cursor-pointer" onClick={()=>navigate('/')}>Password Manager</h2>
        </div>
        <div className=" w-1/3 flex bg-[#101E71] border border-blue-500 rounded-lg">
          <img src={search}/>
        <input
          type="text"
          placeholder="Search"
          className=" p-2  rounded text-black placeholder-gray-400"/>
        
        </div>
        <div className="space-x-3 flex mr-10 items-center">
          <div className="bg-[#101e71] px-4 py-3 rounded-full w-[61px] h-[61px] border-[0.3px] border-[#374CC4] "><img src={root2} alt="security icon" onClick={()=>navigate('/login')}/></div>
          <div className="bg-[#101E71] px-4 py-3 rounded-full w-[61px] h-[61px] border-[0.3px] border-[#374CC4]"><img src={plus} alt="security icon"/></div>
          <div className="bg-[#101E71] px-4 py-3 rounded-full w-[61px] h-[61px] border-[0.3px] border-[#374CC4]"><img src={root4} alt="security icon"/></div>
        </div>
      </header>
      <div className="flex h-full">
        <aside className="w-1/4 bg-[#101E71] p-4 flex flex-col ">
        <div className="flex border-1 border-blue-900">
          <h2 className="font-[Neue Plak] font-normal text-[16px] leading-[50px] tracking-[0px] pl-3">Folders</h2>
          <img src={folder} className="pl-45"/>
          </div>
          <div className="w-full  py-2 px-3 bg-[#010E59] rounded flex">
            <img src={pic} />
          <h2 className="font-[Neue Plak] font-normal text-[16px] leading-[50px] tracking-[0px] pl-3">RecycleBin</h2>
 
          </div>
          <div className="w-full  py-2 px-3 bg-gradient-to-r from-[#4307AE] to-[#664C95] rounded flex ">
            
            <img src={data}/>
            <h2 className="font-[Neue Plak] font-normal text-[16px] leading-[50px] tracking-[0px] pl-3">Database Folder 1</h2>
            <img src={pic} className="pl-20"/>
           
          </div>
          
          <h2 className="text-sm font-[Neue Plak] mt-40">Searches and Tags</h2>

          <ul className="text-gray-400 space-y-2 mt-2">
            <li className="text-[12px] font-dm-sans font-normal leading-[32px] tracking-[0px] flex items-center"> Clear Searches</li>

            <li className="text-[12px] font-dm-sans font-normal leading-[32px] tracking-[0px] flex items-center"> All Entities</li>
            <li className="text-[12px] font-dm-sans font-normal leading-[32px] tracking-[0px] flex items-center"> Expired</li>
            <li className="text-[12px] font-dm-sans font-normal leading-[32px] tracking-[0px] flex items-center"> Weak Passwords</li>
          </ul>
        </aside>
        <main className="flex-1 pl-2">
          <section className="bg-[#101E71] p-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-600 bg-[#002256]">
                  <th className="p-2">Title</th>
                  <th className="p-2">Username</th>
                  <th className="p-2">URL</th>
                  <th className="p-2">Notes</th>
                  <th className="p-2">Modified</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center py-10">
                    <img src="/images/table.svg" alt="Secure Icon" className="mx-auto mt-10 w-40" />
                    <h3 className="font-[NeuePlak] font-normal text-[16px] leading-[64px] tracking-[0px] text-center">Secure Your First Password with Us</h3>
                    <p className="text-gray-300 font-[DM-sans] text-[16px] text-center mx-auto max-w-[700px]">
                    Take the first step towards safeguarding your digital world. Add your first password now and experience top-notch security, ease of access, and peace of mind. Start building your vault and protect what matters most.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Userdata;
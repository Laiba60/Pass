import icons from "/images/icons.svg";
import root2 from "/images/root2.svg";
import plus from "/images/plus.svg";
import root4 from "/images/root4.svg";
import { useNavigate } from "react-router-dom";
const Userdata = () => {
    const navigate=useNavigate();
  return (
    <div className="relative min-h-screen bg-[#0E1A60] text-white w-screen">
      <header className="flex items-center justify-between bg-[#101E71] p-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <img src={icons} alt="Security Icon" className="w-8 h-8" />
          <h2 className="text-lg font-semibold" onClick={()=>navigate('/')}>Password Manager</h2>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-1/3 p-2 bg-[#1C2C7C] rounded text-black placeholder-gray-400 outline-none"
        />
        <div className="space-x-3 flex">
          <div className="bg-[#101e71] px-4 py-3 rounded-full w-[61px] h-[61px] border-[0.3px] border-[#374CC4] "><img src={root2} alt="security icon" onClick={()=>navigate('/logn')}/></div>
          <div className="bg-[#101E71] px-4 py-3 rounded-full w-[61px] h-[61px] border-[0.3px] border-[#374CC4]"><img src={plus} alt="security icon"/></div>
          <div className="bg-[#101E71] px-4 py-3 rounded-full w-[61px] h-[61px] border-[0.3px] border-[#374CC4]"><img src={root4} alt="security icon"/></div>
        </div>
      </header>
      <div className="flex h-full">
        <aside className="w-1/4 bg-[#101E71] p-4 flex flex-col ">
        <div >
          <h2 className="font-[Neue Plak] font-normal text-[16px] leading-[64px] tracking-[0px]">Folders</h2>
          </div>
          <div className="w-full text-left py-2 px-3 bg-[#010E59] rounded">Recycle Bin</div>
          <div className="w-full text-left py-2 px-3 bg-gradient-to-r from-[#4307AE] to-[#664C95] rounded mt-2">Database Folder 1</div>
          
          <h2 className="text-sm font-[Neue Plak] mt-40">Searches and Tags</h2>

          <ul className="text-gray-400 space-y-2 mt-2">
            <li className="text-[12px] font-dm-sans font-normal leading-[32px] tracking-[0px] flex items-center"> Clear Searches</li>

            <li className="text-[12px] font-dm-sans font-normal leading-[32px] tracking-[0px] flex items-center"> All Entities</li>
            <li className="text-[12px] font-dm-sans font-normal leading-[32px] tracking-[0px] flex items-center"> Expired</li>
            <li className="text-[12px] font-dm-sans font-normal leading-[32px] tracking-[0px] flex items-center"> Weak Passwords</li>
          </ul>
        </aside>
        <main className="flex-1 p-4">
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
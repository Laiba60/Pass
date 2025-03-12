import icon from "/images/icon.svg";
import { useNavigate } from "react-router-dom";
const Userdata = () => {
    const navigate=useNavigate();
  return (
    <div className="relative min-h-screen bg-[#0E1A60] text-white w-screen">
      <header className="flex items-center justify-between bg-[#101E71] p-4 shadow-lg">
        <div className="flex items-center space-x-2">
          <img src={icon} alt="Security Icon" className="w-8 h-8 text-[#A143FF] fill-current" />
          <h2 className="text-lg font-semibold" onClick={()=>navigate('/')}>Password Manager</h2>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-1/3 p-2 bg-[#1C2C7C] rounded text-black placeholder-gray-400 outline-none"
        />
        <div className="space-x-3">
          <button className="bg-[#101E71] px-4 py-2 rounded">Login</button>
          <button className="bg-[#FFFFFF] px-4 py-2 rounded">Sign Up</button>
          <button className="bg-[#5003DB] px-4 py-2 rounded">register</button>
        </div>
      </header>
      <div className="flex h-full">
        <aside className="w-1/4 bg-[#101E71] p-5 flex flex-col ">
          <h2 className="text-sm  mb-4 font-[Neue Plak]">Folders</h2>
          <div className="w-full text-left py-2 px-3 bg-[#010E59] rounded">Recycle Bin</div>
          <div className="w-full text-left py-2 px-3 bg-gradient-to-r from-[#4307AE] to-[#664C95] rounded mt-2">Database Folder 1</div>
          
          <h2 className="text-sm font-[
Neue Plak] mt-50">Searches and Tags</h2>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li className="cursor-pointer hover:text-white"> Clear Searches</li>
            <li className="cursor-pointer hover:text-white"> All Entities</li>
            <li className="cursor-pointer hover:text-white"> Expired</li>
            <li className="cursor-pointer hover:text-white"> Weak Passwords</li>
          </ul>
        </aside>
        <main className="flex-1 p-5">
          <section className="bg-[#101E71] p-5 rounded-lg">
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
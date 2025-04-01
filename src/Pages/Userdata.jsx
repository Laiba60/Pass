import icons from "/images/icons.svg";
import root2 from "/images/root2.svg";
import plus from "/images/plus.svg";
import root4 from "/images/root4.svg";
import folder from "/images/folder.svg";
import pic from "/images/pic.svg";
import data from "/images/data.svg";
import search from "/images/search.svg";
import { useNavigate } from "react-router-dom";

const Userdata = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-[#0E1A60] text-white w-screen">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-[#101E71] p-4 md:p-2 shadow-lg">
        <div className="flex items-center space-x-3 md:ml-10">
          <img src={icons} alt="Security Icon" className="w-10 h-10 md:w-12 md:h-12" />
          <h2 className="text-xl md:text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
            Password Manager
          </h2>
        </div>
        {/* Search Bar */}
       
       
        <div className="relative w-full md:w-1/3 mt-3 md:mt-0">
  <img src={search} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
  <input
    type="text"
    placeholder="Search"
    className="w-full p-2 pl-10 text-black placeholder-gray-400 font-dm-sans text-base leading-8 tracking-normal border border-blue-500 rounded-lg bg-[#101E71] focus:outline-none"
  />
</div>

        {/* Icons */}
        <div className="space-x-2 md:space-x-3 flex mt-3 md:mt-0 mr-5 md:mr-10">
          <div className="bg-[#101E71] p-3 rounded-full w-12 h-12 md:w-[61px] md:h-[61px] border border-[#374CC4]">
            <img src={root2} alt="security icon" onClick={() => navigate("/generate")} />
          </div>
          <div className="bg-[#101E71] p-3 rounded-full w-12 h-12 md:w-[61px] md:h-[61px] border border-[#374CC4]">
            <img src={plus} alt="security icon" onClick={()=>navigate('/login')}/>
          </div>
          <div className="bg-[#101E71] p-3 rounded-full w-12 h-12 md:w-[61px] md:h-[61px] border border-[#374CC4]">
            <img src={root4} alt="security icon" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-[#101E71] p-4 flex flex-col">
          <div className="flex items-center border border-blue-900 p-2">
            <h2 className="font-[Neue Plak] text-[16px] leading-[30px] pl-3">Folders</h2>
            <img src={folder} className="ml-auto w-6 h-6" />
          </div>

          <div className="w-full py-2 px-3 bg-[#010E59] rounded flex items-center ">
            <img src={pic} className="w-4 h-4" />
            <h2 className="font-[Neue Plak] text-[16px] leading-[30px] pl-3">Recycle Bin</h2>
          </div>

          <div className="w-full py-2 px-3 bg-gradient-to-r from-[#4307AE] to-[#664C95] rounded flex items-center mt-3">
            <img src={data} className="w-4 h-4" />
            <h2 className="font-[Neue Plak] text-[16px] leading-[30px] pl-3">Database Folder 1</h2>
            <img src={pic} className="ml-auto w-4 h-4" />
          </div>

          <h2 className="text-sm font-[Neue Plak] mt-10 md:mt-40">Searches and Tags</h2>

          <ul className="text-gray-400 space-y-2 mt-2">
            {["Clear Searches", "All Entities", "Expired", "Weak Passwords"].map((item) => (
              <li key={item} className="text-[12px] font-dm-sans leading-[32px] flex items-center">
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Section */}
        <main className="flex-1 p-2">
          <section className="bg-[#101E71]  rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-600 bg-[#002256]">
                  {["Title", "Username", "URL", "Notes", "Modified"].map((heading) => (
                    <th key={heading} className="p-2 text-xs md:text-sm">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center py-5 md:py-10">
                    <img src="/images/table.svg" alt="Secure Icon" className="mx-auto w-24 md:w-40 mt-5 md:mt-10" />
                    <h3 className="font-[NeuePlak] text-[14px] md:text-[16px] leading-[40px] md:leading-[64px]">
                      Secure Your First Password with Us
                    </h3>
                    <p className="text-gray-300 text-[14px] md:text-[16px] text-center mx-auto max-w-[90%] md:max-w-[700px]">
                      Take the first step towards safeguarding your digital world. Add your first password now and
                      experience top-notch security, ease of access, and peace of mind. Start building your vault and
                      protect what matters most.
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
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchFolder } from "../hooks/useFetchFolder";
import { useCreatePassword } from '../hooks/useCreatePassword';
import { useUpdatePassword } from "../hooks/useUpdatePassword";
import icons from "/images/icons.svg";
import facebook from "/images/facebook.svg";
import amazon from "/images/amazon.svg";
import tiktok from "/images/tiktok.svg";
import apple from "/images/apple.svg";
import spotify from "/images/spotify.svg";
import shopify from "/images/shopify.svg";
import paypal from "/images/paypal.svg";
import twitter from "/images/twitter.svg";
import linkedin from "/images/linkedin.svg";
import dropbox from "/images/dropbox.svg";
import instagram from "/images/instagram.svg";
import ebay from "/images/ebay.svg";
import discord from "/images/discord.svg";
import snapchat from "/images/snapchat.svg";
import hulu from "/images/hulu.svg";
import stripe from "/images/stripe.svg";
import coinbase from "/images/coinbase.svg";
import airbnb from "/images/airbnb.svg";
import twitch from "/images/twitch.svg";
import slack from "/images/slack.svg";
import uber from "/images/uber.svg";
import binance from "/images/binance.svg";
import api from '../api';
const RootEntery = ({setIsLogin}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [folder, setFolder] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState(''); 
  const [selectedEmoji, setSelectedEmoji] = useState(false);
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("");
  const { data: folders = [] } = useFetchFolder();
  const [isCreating, setIsCreating] = useState(false);
  const { mutate } = useUpdatePassword();
  const handleCreate = async () => {
    console.log("🔥 handleCreate called!");
    console.log("Title:", title);
    console.log("Folder:", folder);
    localStorage.setItem("savedTitle", title);
localStorage.setItem("savedFolder", folder);
    if (!title || !folder) {
      alert('Title and Folder are required!');
      return;
    }

    try {
      setIsCreating(true);
  
      const response = await api.post('/passwords/', {
        title,
        folder,
      });
  
      console.log(' Password created successfully', response.data);
      navigate('/userdata');
    } catch (error) {
      console.error(' Failed to create password:', error.response?.data || error.message);
    } finally {
      setIsCreating(false);
    }
  };
  
  {/*
  const handleCreate = () => {
    console.log("🔥 handleCreate called!");
    console.log("Title:", title);
    console.log("Folder:", folder);
    if (!title || !folder) {
      alert('Title and Folder are required!');
      return;
    }
    createPassword({
      title,
      folder,
     
    });
  };
  
  const { mutate: createPassword, isLoading: isCreating } = useCreatePassword({
    onSuccess: (data) => {
      console.log(' Password created successfully', data);
      navigate('/userdata');
    },
    onError: (err) => {
      (" Failed to create password:", err.response?.data || err.message)
    }
  });
*/}
  const handleSelect = (e) => {
    const folderName = e.target.value;
    setSelectedFolder(folderName);
  };
  const handleSubmit = () => {
    updatePassword({
      id: "abc123", 
      data: {
        title: "My Updated Title",
        folder: "xyz-folder-id",
        url: "https://example.com",
        username: "newUser",
        password: "newStrongPassword",
        emoji: "",
        notes: "Updated this on 12 April"
      }
    });
  };
  useEffect(() => {
    const savedTitle = localStorage.getItem("editTitle");
    const savedFolder = localStorage.getItem("editFolder");

    setTitle(savedTitle || "");
    setFolder(savedFolder || "");
  }, [])
 
const updatePassword = () => {
  const id = localStorage.getItem("editId");
  mutate({ id, title, folder });
}
  return (
   <div className="h-full w-screen bg-[#101E71]">
    <header className=" z-1000 relative ">
      <section className="md:container mx-auto">
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
                <input className="dm-sans w-full border-[1px] rounded-[12px] border-[#374CC4] outline-none bg-[#101E71] py-[11px] mq2000:py-[21px] pl-[41px] mq2000:pl-[51px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] mq2000:text-[20px] leading-[32px] font-[400]"
                 placeholder="Search..." value=""/></div>
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
                        <a className="w-[36px] h-[36px]  sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" href="">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]">
                        <path d="M1 3.55556C1 2.87778 1.26925 2.22776 1.7485 1.7485C2.22776 1.26925 2.87778 1 3.55556 1H21.4444C22.1222 1 22.7722 1.26925 23.2515 1.7485C23.7308 2.22776 24 2.87778 24 3.55556V21.4444C24 22.1222 23.7308 22.7722 23.2515 23.2515C22.7722 23.7308 22.1222 24 21.4444 24H3.55556C2.87778 24 2.22776 23.7308 1.7485 23.2515C1.26925 22.7722 1 22.1222 1 21.4444V3.55556Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.02756 8.66669C8.38041 8.66669 8.66645 8.38065 8.66645 8.0278C8.66645 7.67496 8.38041 7.38892 8.02756 7.38892C7.67471 7.38892 7.38867 7.67496 7.38867 8.0278C7.38867 8.38065 7.67471 8.66669 8.02756 8.66669Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.9719 17.6112C17.3247 17.6112 17.6108 17.3251 17.6108 16.9723C17.6108 16.6194 17.3247 16.3334 16.9719 16.3334C16.619 16.3334 16.333 16.6194 16.333 16.9723C16.333 17.3251 16.619 17.6112 16.9719 17.6112Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12.5002 13.1389C12.8531 13.1389 13.1391 12.8528 13.1391 12.5C13.1391 12.1471 12.8531 11.8611 12.5002 11.8611C12.1474 11.8611 11.8613 12.1471 11.8613 12.5C11.8613 12.8528 12.1474 13.1389 12.5002 13.1389Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        </a>
                        <a className="w-[36px] h-[36px]  sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" href="">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] mq2000:w-[38px] mq2000:h-[38px]">
                        <circle cx="11.5" cy="11.5" r="11" stroke="white"></circle>
                        <path d="M15.328 12.56H11.76V16.16H10.72V12.56H7.168V11.6H10.72V8H11.76V11.6H15.328V12.56Z" fill="white"></path>
                        </svg>
                        </a>
                        <a className="w-[36px] h-[36px]  mr-3 sm:w-[61px] sm:h-[61px] mq2000:w-[81px] mq2000:h-[81px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full" href="/userdata">
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
    <main className="h-full relative flex pb-[40px] gap-[7px] bg-[#101E71]">
      <section className="w-full  h-full relative flex   pb-[40px] gap-[7px] bg-[#101E71]">
        <img src="/dots.svg" className="absolute w-[100vh] h-[20vh] md:h-auto md:w-full top-[-100px] md:-[-130px] z-[1] object-cover"/>
        <img src="/boxes.svg" className="absolute w-[100vh] md:w-[150vw] top-[-135px] h-[120vh] md:h-[75vw] z-[1] object-cover opacity-30"/>
        <section className="container mx-auto px-4 flex flex-col md:gap-[20px] z-[3] ">
          <h4 className=" text-white  text-[22px]  md:text-[32px] leading-[64px] font-[400]">Root . Add Entry</h4>
          <div className="flex flex-col md:gap-[38px] flex-wrap md:flex-row">
            <div className="flex-1 flex flex-col md:gap-[4px]">
              <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">Title</label>
              <input name="title" required className="w-full dm-sans border-[1px] mb-1 md:mb-0 h-[37.86px] md:h-auto rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[12px] md:px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
               value={title}  onChange={(e) => setTitle(e.target.value)}/>
              </div>
              <div className="flex-1 flex flex-col md:gap-[4px]">
                <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">Username</label>
                <input name="username" className="w-full dm-sans border-[1px] mb-2 md:mb-0 h-[37.86px] md:h-auto rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[12px] md:px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]" value={username} onChange={(e)=>setUsername(e.target.value)}/></div>
                </div>
                <div className="flex flex-col md:gap-[38px] flex-wrap md:flex-row">
                  <div className="flex-1 flex flex-col md:gap-[4px]">
                    <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">Password</label>
                    <div className="relative flex-1">
                      <input name="password" type="password" className="w-full dm-sans border-[1px] mb-2 md:mb-0 h-[37.86px] md:h-auto rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[12px] md:px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]" value={password} />
                      <span className="cursor-pointer absolute top-[50%] right-[13px] translate-y-[-50%]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]">
                        <path d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                          </path>
                          <path d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005" stroke="white" stroke-linecap="round" stroke-linejoin="round">

                            </path>
                            <path d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                              </path>
                              <path d="M9.47 14.53L2 22" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M22.0003 2L14.5303 9.47" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                                  </path>
                                  </svg>
                                  </span>
                     <span className="cursor-pointer absolute top-[50%] right-[38px] md:right-[50px] translate-y-[-50%]">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]">
                                <path d="M1 3.55556C1 2.87778 1.26925 2.22776 1.7485 1.7485C2.22776 1.26925 2.87778 1 3.55556 1H21.4444C22.1222 1 22.7722 1.26925 23.2515 1.7485C23.7308 2.22776 24 2.87778 24 3.55556V21.4444C24 22.1222 23.7308 22.7722 23.2515 23.2515C22.7722 23.7308 22.1222 24 21.4444 24H3.55556C2.87778 24 2.22776 23.7308 1.7485 23.2515C1.26925 22.7722 1 22.1222 1 21.4444V3.55556Z" stroke="white" stroke-linecap="round" stroke-linejoin="round">

                                </path>
                                <path d="M8.02756 8.66669C8.38041 8.66669 8.66645 8.38065 8.66645 8.0278C8.66645 7.67496 8.38041 7.38892 8.02756 7.38892C7.67471 7.38892 7.38867 7.67496 7.38867 8.0278C7.38867 8.38065 7.67471 8.66669 8.02756 8.66669Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.9719 17.6112C17.3247 17.6112 17.6108 17.3251 17.6108 16.9723C17.6108 16.6194 17.3247 16.3334 16.9719 16.3334C16.619 16.3334 16.333 16.6194 16.333 16.9723C16.333 17.3251 16.619 17.6112 16.9719 17.6112Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12.5002 13.1389C12.8531 13.1389 13.1391 12.8528 13.1391 12.5C13.1391 12.1471 12.8531 11.8611 12.5002 11.8611C12.1474 11.8611 11.8613 12.1471 11.8613 12.5C11.8613 12.8528 12.1474 13.1389 12.5002 13.1389Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </span>
                                </div>
                  </div>
                   <div className="flex-1 flex flex-col md:gap-[4px]">
                                  <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">URL</label>
                  <input name="url" className="w-full dm-sans border-[1px] mb-2 md:mb-0 h-[37.86px] md:h-auto rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[12px] md:px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]" placeholder="https://examples.com" value={url} onChange={(e)=>setUrl(e.target.value)}/></div>
                     </div>
                     <div className="flex flex-col md:gap-[38px] flex-wrap md:flex-row">
                     <div className="relative flex-1 flex flex-col md:gap-[4px]">
                     <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">Select Emoji</label>
                     <div className="relative flex-1 cursor-pointer" onClick={() => setOpen(!open)}>
                     <div className="w-full dm-sans border-[1px] flex mb-2 md:mb-0 sm:min-h-[63px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[17px] px-[12px] md:px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]">
                      </div>
                       <svg  width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[40%] md:top-[50%] w-[12px] md:w-[18px] translate-y-[-50%] right-[20px]">
                                          <path d="M18 0.623409C18 0.465262 17.9396 0.30342 17.8223 0.182052C17.5877 -0.0606842 17.2039 -0.0606842 16.9693 0.182052L8.94047 8.49025L1.02893 0.30342C0.794353 0.0606833 0.410505 0.0606833 0.175932 0.30342C-0.0586414 0.546156 -0.0586414 0.943361 0.175932 1.1861L8.51397 9.81795C8.74854 10.0607 9.13239 10.0607 9.36697 9.81795L17.8223 1.06841C17.9431 0.943362 18 0.785233 18 0.623409Z" fill="white"></path>
                         </svg>
                         {open && ( <div className="absolute mt-2 top-[100%] left-0 bg-[#101E71] border-[1px] border-[#374CC4] rounded-[12.87px] z-50 w-full py-4 px-2">
                         <div className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-10 gap-5">
                          <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                           <img src={paypal} alt="paypal" className="w-auto h-auto" />
                           </div>
                            <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                          <img src={amazon} alt="amazon" className="w-auto h-auto" />
                           </div>
                            <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                             <img src={facebook} alt="facebook" className="w-auto h-auto" />
                               </div>
                               <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                               <img src={apple} alt="apple" className="w-auto h-auto" />
                               </div>
                                 <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                        
                                 <img src={twitter} alt="twitter" className="w-auto h-auto"/>
                                 </div>
                                 <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                 <img src={linkedin} alt="linkedin" className="w-auto h-auto"/>
                                 </div>
                                  <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                    <img src={instagram} alt="instagram" className="w-auto h-auto"/>
                                     </div>
                                      <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                       <img src={ebay} alt="ebay" className="w-auto h-auto" />
                                         </div>
                                         <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                          <img src={shopify} alt="shopify" className="w-auto h-auto" />
                                         </div>
                                           <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                            <img src={tiktok} alt="tiktok" className="w-auto h-auto" />
                                          </div>
                                            <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                             <img src={discord} alt="discord" className="w-auto h-auto" />
                                               </div>
                                                <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                              <img src={snapchat} alt="snapchat" className="w-auto h-auto" />
                                               </div>
                                                 <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                               <img src={stripe} alt="stripe" className="w-auto h-auto" s/>
                                                 </div>
                                                  <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                   <img src={hulu} alt="hulu" className="w-auto h-auto" />
                                                     </div>
                                                    <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                     <img src={spotify} alt="spotify" className="w-auto h-auto"/>
                                                    </div>
                                                     <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                     <img src={coinbase} alt="coinbase" className="w-auto h-auto"/>
                                                      </div>
                                                     <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                     <img src={airbnb} alt="airbnb" className="w-auto h-auto"/>
                                                   </div>
                                                     <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                     <img src={twitch} alt="twitch" class="w-auto h-auto"/>
                                                     </div>
                                                      <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                       <img src={dropbox} alt="dropbox" className="w-auto h-auto"/>
                                                         </div>
                                               <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                <img src={slack} alt="slack" className="w-auto h-auto" />
                                                </div>
                                                  <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                                   <img src={uber} alt="uber" className="w-auto h-auto" />
                                                    </div>
                                                     <div className="cursor-pointer w-[35.55px] h-[35.55px] flex justify-center items-center">
                                               <img src={binance} alt="binance" className="w-auto h-auto" />
                                                </div>
                                                   </div>
                                               </div> )}
                                                 </div> 
                                                   </div>
                                               <div className="flex-1 flex flex-col md:gap-[4px]">
                                               <label
                                               htmlFor="folder-select"
                                                 className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]"
                                                     >
                                                  Choose your Folder
                                                       </label>

                                                 <div className="relative flex-1">
   
                                                       <svg
                                                        width="20"
                                                         height="20"
                                                   viewBox="0 0 20 20"
                                                  fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px] absolute top-[50%] translate-y-[-50%] left-[20px]"
                                                 >
                                                 <path
                                                 d="M0.675887 4.8375L0.625887 3.75C0.625887 3.08696 0.889279 2.45107 1.35812 1.98223C1.82696 1.51339 2.46285 1.25 3.12589 1.25H7.71589C8.37887 1.25014 9.01466 1.51363 9.48339 1.9825L10.5184 3.0175C10.9871 3.48637 11.6229 3.74986 12.2859 3.75H17.2634C17.6108 3.74996 17.9544 3.82233 18.2723 3.96249C18.5901 4.10265 18.8753 4.30751 19.1096 4.56403C19.3439 4.82054 19.5221 5.12306 19.633 5.4523C19.7438 5.78155 19.7848 6.13028 19.7534 6.47625L18.9571 15.2262C18.9007 15.8474 18.6141 16.425 18.1536 16.8457C17.6932 17.2664 17.0921 17.4998 16.4684 17.5H3.53339C2.90968 17.4998 2.3086 17.2664 1.84813 16.8457C1.38767 16.425 1.10108 15.8474 1.04464 15.2262L0.248387 6.47625C0.196183 5.89732 0.34735 5.31828 0.675887 4.83875V4.8375Z"
                                                   fill="white"
                                                  />
                                                 </svg> 
                                                   <select
                                                        id="folder-select"
                                                        required
                                                        value={folder}
                                                        onChange={(e) => setFolder(e.target.value)}
                                                          className="w-full bg-[#101E71] text-white border border-[#374CC4] rounded-[10px] py-[10px] pl-[60px] pr-[40px] text-[16px] leading-[32px] font-[400] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                        >
                                                      <option value="" className="w-1/2">Folder</option>
                                                      {folders?.map((folder) => (
                                                        <option key={folder.id} value={folder.id}>
                                                          {folder.title}
                                                        </option>
                                                          ))}
                                                        </select>

    
                                                        <svg
                                                          width="18"
                                                          height="10"
                                                          viewBox="0 0 18 10"
                                                          fill="none"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="absolute top-[50%] translate-y-[-50%] right-[20px] w-[12px] md:w-[18px]"
                                                        >
                                                            <path
                                                              d="M18 0.623409C18 0.465262 17.9396 0.30342 17.8223 0.182052C17.5877 -0.0606842 17.2039 -0.0606842 16.9693 0.182052L8.94047 8.49025L1.02893 0.30342C0.794353 0.0606833 0.410505 0.0606833 0.175932 0.30342C-0.0586414 0.546156 -0.0586414 0.943361 0.175932 1.1861L8.51397 9.81795C8.74854 10.0607 9.13239 10.0607 9.36697 9.81795L17.8223 1.06841C17.9431 0.943362 18 0.785233 18 0.623409Z"
                                                              fill="white"
                                                            />
                                                            </svg>
                                                          </div>
                                                          
                                                        </div>
                                                        </div>
                                                          <div className="flex flex-col md:gap-[4px]">
                                                            <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">Notes</label>
                                                             <textarea name="notes" rows="1" className=" w-full dm-sans border-[1px] h-[118.26px] md:h-auto rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[12px] md:px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"></textarea>
                                                            </div>
                                                            <div className="flex flex-col mt-5 sm:mt-0">
                                                     <div className="flex gap-3">
                                                      <svg width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M33.8625 10.0387C33.2747 7.20944 31.6708 4.66177 29.3249 2.83085C26.9789 0.999935 24.0364 -0.000651921 21 3.18673e-07C15.9425 3.18673e-07 11.55 2.72574 9.3625 6.71462C6.79041 6.97861 4.41176 8.13601 2.68361 9.96444C0.955449 11.7929 -0.000300478 14.1633 7.08623e-08 16.6204C7.08623e-08 22.1217 4.7075 26.5926 10.5 26.5926H33.25C38.08 26.5926 42 22.8696 42 18.2824C42 13.8946 38.4125 10.3379 33.8625 10.0387Z" fill="url(#paint0_linear_1652_8665)">
                                                       </path>
                                                      <path d="M16.9619 17.8919H25.0909H16.9619ZM21.0264 15.6401V8.88477V15.6401ZM21.0264 8.88477L23.3974 10.8551L21.0264 8.88477ZM21.0264 8.88477L18.6555 10.8551L21.0264 8.88477Z" fill="url(#paint1_linear_1652_8665)">
                                                   </path>
                                                    <path d="M16.9619 17.8919H25.0909M21.0264 15.6401V8.88477M21.0264 8.88477L23.3974 10.8551M21.0264 8.88477L18.6555 10.8551" stroke="white" stroke-width="0.826311" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_1652_8665" x1="-2.01923" y1="3.63461" x2="44.4231" y2="24.2308" gradientUnits="userSpaceOnUse">
                                                     <stop stop-color="#A143FF">
                                                    </stop><stop offset="1" stop-color="#5305DD">
                                                     </stop>
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1652_8665" x1="16.5711" y1="10.1158" x2="26.6787" y2="12.6773" gradientUnits="userSpaceOnUse"><stop stop-color="#A143FF"></stop><stop offset="1" stop-color="#5305DD"></stop></linearGradient></defs>
                                                    </svg>
                                                   <div>
                                                    <p className="text-[14px] sm:text-[16px] leading-[32px] text-white font-sans">Add any Attachments, upload document or file here, <span style={{
                                                     background: 'linear-gradient(90deg, rgb(150, 58, 251) 0%, rgb(98, 17, 228) 100%)',
                                                  WebkitBackgroundClip: 'text',
                                                   WebkitTextFillColor: 'transparent',
                                                   cursor: 'pointer',
                                                   borderBottom: '1px solid rgb(150, 58, 251)',
                                                   borderTopColor: 'rgb(150, 58, 251)',
                                                     borderRightColor: 'rgb(150, 58, 251)',
                                                   borderLeftColor: 'rgb(150, 58, 251)'
                                                   }}>Browse.</span>
                                                    </p>
                                                    </div>
                                                    </div>
                                                  <input type="file" style={{ display: 'none' }} />
                                                   </div>
                                                  <div className="flex gap-[12px] justify-center md:justify-end mt-[15px] bg-[#101E71] h-full">
                                               <button className="py-[17px] w-[140px] rounded-[18.37px] bg-[#101E71] border-none outline-none text-black text-[15.5px] font-[400] dm-sans">Cancel</button>
                                               <button
  className="dm-sans w-[140px] h-[57px] flex items-center justify-center rounded-[18.37px] border-none outline-none text-white text-[15.5px] font-[400] bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)]"
  style={{
    background: 'linear-gradient(90deg, rgb(161, 67, 255) 0%, rgb(80, 3, 219) 100%)',
    cursor: 'pointer',
  }}
  onClick={() => {
    handleCreate();
    setIsLogin(true);
  }}
  disabled={isCreating}  
>
  {isCreating ? 'Creating...' : 'Create Password'}
</button>

                                            </div>                                                                                   
                                         </section>
                                           </section>
                                          </main>
                                         
                                           </div>
                                                                                                                        
                                                                                                                              
                                         );
                                          };

export default RootEntery;

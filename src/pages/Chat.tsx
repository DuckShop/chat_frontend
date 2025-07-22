import React from 'react';
import ChatList from '../layouts/ChatList';
import ChatBoard from '../layouts/ChatBoard';
import { useState, useEffect } from 'react';
import NavtigationIcon from "@/assets/TextAlignRight.svg";
import Back from "@/assets/chevron-left.svg";
import { filemocs } from '../data/filenockdb';
import type { FileType } from '../type/Type';

const Chat: React.FC = () => {
    const [selectedChat, setSelectedChat] = useState<string | null>("user_6");
    const [showChatBoard, setShowChatBoard] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [files, setFiles] = useState<FileType[]>(filemocs);


    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 500);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return <div className={`${isMobile ? (showChatBoard ? "p-0" : "p-4") : "p-6"} bg-[#f5f5f5]  xs:h-full h-[calc(100vh-40px)]`}>
        <div className={`w-full fixed top-0 right-0 sm:hidden flex justify-end items-center h-[40px] px-4 z- ${isMobile ? (showChatBoard ? "bg-white" : "bg-[#f5f5f5]") : "bg-[#f5f5f5]"}`}>
            <div className="w-[36px] h-[36px] flex justify-center items-center  border border-[#EBEBEB] cursor-pointer rounded-[8px]">
                <img src={NavtigationIcon} className="w-[20px] h-[20px]" />
            </div>
        </div>
        {
            showChatBoard && <div onClick={() => setShowChatBoard(false)} className='sm:hidden fixed top-[9px] z-1 left-4 h-[22px] flex items-center'>
                <img src={Back} className='w-[16px] h-[16px] cursor-pointer' />
                <span className='font-mulish text-[16px] font-bold leading-normal text-[#7A58D0]'>Back</span>
            </div>
        }
        <div className={`flex bg-white ${isMobile ? (showChatBoard ? "rounded-none" : "rounded-[16px] border-[#EBEBEB] border ") : "rounded-[16px] border-[#EBEBEB] border"} h-full overflow-hidden`}>
            {/* ChatList */}
            <div
                className={`
                transition-all duration-300 ease-in-out
                ${isMobile ? (showChatBoard ? "w-0" : "w-full border-r border-[#EBEBEB]") : "w-[365px]  border-r border-[#EBEBEB]"}
                xs:w-[365px] xs:block rounded-l-[16px]
                `}
            >
                <ChatList
                    selectedChat={selectedChat}
                    isMobile={isMobile}
                    isShowChatBoard={showChatBoard}
                    setSelectedChat={(chat) => {
                        setSelectedChat(chat);
                        setShowChatBoard(true); // trigger switch to board
                    }}
                />
            </div>

            {/* ChatBoard */}
            <div
                className={`
                transition-all duration-300 ease-in-out]
                xs:${showChatBoard ? "w-full rounded-r-[16px]" : "w-0"}
                xs:w-[calc(100%-365px)] xs:block
                `}
            >
                <ChatBoard selectedChat={selectedChat} files={files} setFiles={setFiles} />
            </div>
        </div>
    </div >
};

export default Chat;
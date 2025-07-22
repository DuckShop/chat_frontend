import React from "react";
import Setting from "@/assets/settings.svg";
import ContactSearchInput from "../components/UI/Common/ContactSearchInput";
import ContactItem from "../components/UI/Chat/ContactItem";
import { chatData } from "../data/chatmockdb";
import type { ChatType } from "../type/Type";
import { useState, useEffect } from "react";
import SettingDialogue from "../components/UI/Dialogue/SettingDialogue";
import Dialogue from "./Dialogue";
import { userData } from "../data/usermockdb";

const ChatList: React.FC<{ selectedChat: string | null, setSelectedChat: (chat: string | null) => void, isMobile: boolean, isShowChatBoard: boolean }> = ({ selectedChat, setSelectedChat, isMobile, isShowChatBoard }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState<ChatType[]>([]);
    const latestChatsForUser1: Record<string, ChatType> = {};

    useEffect(() => {
        chatData
            .filter(chat => chat.receiver === "user_1")
            .filter(chat => searchText.length > 0 ? userData.find((user: { id: string; }) => user.id === chat.responder)?.name.toLowerCase().includes(searchText.toLowerCase()) : true)

            .forEach(chat => {
                const existing = latestChatsForUser1[chat.responder];
                if (!existing || chat.time > existing.time) {
                    latestChatsForUser1[chat.responder] = chat;
                }
            });

        setResult(Object.values(latestChatsForUser1));
        console.log(result);
    }, [searchText]);


    return <div className='w-full h-full py-4'>
        {isOpen && <Dialogue setIsOpen={setIsOpen} windowsize={458}>
            <SettingDialogue />
        </Dialogue>}
        {isMobile && !isShowChatBoard && <div className="flex w-full items-center justify-between mb-3 px-4">
            <span className='font-mulish text-[24px] font-bold leading-normal text-[#282529]'>Chats</span>
            <img src={Setting} className="w-5 h-5 cursor-pointer" onClick={() => setIsOpen(true)} />
        </div>}
        {isMobile && !isShowChatBoard &&
            <div className="px-4 mb-2">
                <ContactSearchInput placeholder="Search for a contact..." setSearchText={setSearchText} value={searchText} />
            </div>}
        <div className="xs:flex hidden w-full items-center justify-between mb-3 px-4">
            <span className='font-mulish text-[24px] font-bold leading-normal text-[#282529]'>Chats</span>
            <img src={Setting} className="w-5 h-5 cursor-pointer" onClick={() => setIsOpen(true)} />
        </div>
        <div className="xs:block hidden px-4 mb-2">
            <ContactSearchInput placeholder="Search for a contact..." setSearchText={setSearchText} value={searchText} />
        </div>
        <div className="w-full h-[calc(100%-90px)] py-4 overflow-y-auto">
            {result.map((item, key) => (
                <ContactItem key={key} item={item} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
            ))}
        </div>
    </div>
}

export default ChatList;
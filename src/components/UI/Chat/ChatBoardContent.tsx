import type { ChatType } from "../../../type/Type";
import ChatItem from "./Chatitem";
import { userData } from "../../../data/usermockdb";
import React, { useEffect, useRef } from "react";
import LinkSimple from "@/assets/LinkSimple.svg";
import FolderNotch from "@/assets/FolderNotch1.svg";

const ChatBoardContent: React.FC<{
    selectedChat: string | null,
    isSearchBarOpen: boolean,
    searchText: string,
    searchResults?: { chatIdx: number, indices: number[] }[],
    activeResultIndex?: number,
    getActiveResult?: () => { chatIdx: number, matchIdx: number } | null,
    setChatData: (chatData: ChatType[]) => void,
    filteredChats: ChatType[],
    isOnlyLink: boolean,
    setChangedChat: (chat: ChatType | null) => void,
    isOnlyFile: boolean
}> = ({ selectedChat, isSearchBarOpen, searchText, searchResults = [], activeResultIndex = 0, getActiveResult = () => null, filteredChats, isOnlyLink, setChangedChat, setChatData, isOnlyFile }) => {
    if (!selectedChat) return null;

    const me = userData.find(user => user.id === "user_1");
    const user = userData.find(user => user.id === selectedChat);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [selectedChat]);

    useEffect(() => {
        if (!searchResults || !getActiveResult) return;
        const active = getActiveResult();
        if (active && itemRefs.current[active.chatIdx]) {
            itemRefs.current[active.chatIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [activeResultIndex, searchResults, getActiveResult]);

    return <div ref={containerRef} className={`w-full relative px-4 overflow-y-auto ${(isOnlyLink || isOnlyFile) ? 'h-[calc(100%-161px)]' : 'h-[calc(100%-211px)]'} ${!isSearchBarOpen ? 'md:h-[calc(100%-161px)] h-[calc(100%-211px)]' : 'md:h-[calc(100%-242px)] h-[calc(100%-292px)]'}`}>
        {filteredChats.filter(chat => isOnlyFile ? chat.file : true).length > 0 ?
            filteredChats.filter(chat => isOnlyLink ? chat.content.includes("https://") : true).length > 0 ?
                filteredChats.filter(chat => isOnlyFile ? chat.file : isOnlyLink ? chat.content.includes("https://") : true).map((item, key) => (
                    <div key={key} ref={el => { itemRefs.current[key] = el; }}>
                        <ChatItem
                            item={item}
                            me={me}
                            user={user}
                            searchText={searchText}
                            chatIdx={key}
                            getActiveResult={getActiveResult}
                            setChangedChat={setChangedChat}
                            setChatData={setChatData}
                        />
                    </div>
                ))
                : <div className="w-full h-full flex items-center justify-center">
                    <img className="w-8 h-8 mr-3" src={LinkSimple}></img>
                    <span className="text-[#7C7C7C] text-openSans text-[24px] font-normal">
                        No Links found</span>
                </div>
            : <div className="w-full h-full flex items-center justify-center">
                <img className="w-8 h-8 mr-3" src={FolderNotch}></img>
                <span className="text-[#7C7C7C] text-openSans text-[24px] font-normal">
                    No Files found</span>
            </div>}
    </div>
}

export default ChatBoardContent;
import React, { useState, useRef, useEffect } from "react";
import type { ChatType, UserType } from "../../../type/Type";
import NamePresenter from "../Common/NamePresenter";
import DotsThreeVertical from "@/assets/DotsThreeVertical.svg";
import Search from "@/assets/search.svg";
import Document from "@/assets/document.svg";
import Clock from "@/assets/Clock.svg";
import SmallDailogue from "../Dialogue/SmallDailogue";
import MuteDialogue from "../Dialogue/MuteDialogue";
import Dialogue from "../../../layouts/Dialogue";
import ChatSearchBar from "./ChatSearchBar";
import LinkSimplePurple from "@/assets/LinkSimplePurple.svg";
import Close from "@/assets/Close.svg";
import FolderNotch from "@/assets/FolderNotch1.svg";

const ChatMemberInfo: React.FC<{
    user: UserType,
    setIsSearchBarOpen: (isSearchBarOpen: boolean) => void,
    isSearchBarOpen: boolean,
    setSearchText: (searchText: string) => void,
    searchText: string,
    activeResultIndex: number,
    goToNextResult: () => void,
    goToPrevResult: () => void,
    getTotalResults: () => number,
    setIsOnlyLink: (isOnlyLink: boolean) => void,
    isOnlyLink: boolean,
    filteredChats: ChatType[],
    setIsOnlyFile: (isOnlyFile: boolean) => void,
    isOnlyFile: boolean
}> = ({ user, setIsSearchBarOpen, isSearchBarOpen, setSearchText, searchText, activeResultIndex, goToNextResult, goToPrevResult, getTotalResults, setIsOnlyLink, isOnlyLink, filteredChats, setIsOnlyFile, isOnlyFile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMuteOpen, setIsMuteOpen] = useState(false);
    const dialogueRef = useRef<HTMLDivElement>(null);
    const linkcount= filteredChats.filter(chat => chat.content.includes("https://")||chat.content.includes("http://")).length;
    const filecount= filteredChats.filter(chat => chat.file).length;

    useEffect(() => {
        if (!isOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (dialogueRef.current && !dialogueRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return <><div className="w-full flex md:flex-row flex-col  md:justify-between justify-start items-center gap-3 border-b border-[#EBEBEB] p-4 relative">
        {isOpen && (
            <div ref={dialogueRef} style={{ position: 'absolute', zIndex: 10 }}>
                <SmallDailogue setIsOpen={setIsOpen} setIsMuteOpen={setIsMuteOpen} setIsOnlyLink={setIsOnlyLink} linkcount={linkcount} setIsOnlyFile={setIsOnlyFile} filecount={filecount} />
            </div>
        )}
        {isMuteOpen && (
            <Dialogue setIsOpen={setIsMuteOpen} windowsize={458}><MuteDialogue /></Dialogue>
        )}
        <div className="flex flex-row w-full justify-between">
            <div className="flex items-center gap-3">
                <div className="relative w-[48px]">
                    <img src={user.avatar} className="rounded-full w-[48px] h-[48px]" />
                    {user.online && <div className="absolute bottom-[2px] right-[2px] w-[12px] h-[12px] bg-[#26B05D] border border-white rounded-full"></div>}
                </div>
                <div className="flex  flex-col gap-[2px]">
                    <div className="flex justify-between items-start">
                        <NamePresenter name={user.name} verified={user.verified} />
                    </div>
                    <div className="w-full font-openSans text-[14px] text-left text-[#7C7C7C] self-stretch leading-normal font-normal line-clamp-2">
                        {user.headline}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="md:flex items-center hidden p-2 gap-[6px] cursor-pointer text-[#282529] rounded-[8px] bg-[#F6F3FC]">
                    <img src={Document} className="w-4 h-4" />
                    <span className="font-openSans text-[14px] text-[#282529] font-normal">Active Contracts <b>2</b></span>
                </div>
                <div className="md:flex items-center hidden p-2 gap-[6px] cursor-pointer text-[#282529] rounded-[8px] bg-[#F6F3FC]">
                    <img src={Clock} className="w-4 h-4" />
                    <span className="font-openSans text-[14px] text-[#282529] font-normal">05:00pm <span className="text-[#7C7C7C]">(From you +1 hr)</span></span>
                </div>
                <img src={Search} className="w-5 h-5 cursor-pointer" onClick={() => setIsSearchBarOpen(!isSearchBarOpen)} />
                <img src={DotsThreeVertical} className="w-5 h-5 cursor-pointer" onClick={() => setIsOpen(true)} />
            </div>
        </div>
        <div className="flex w-full md:hidden justify-start gap-3">
            <div className="flex items-center p-2 gap-[6px] cursor-pointer text-[#282529] rounded-[8px] bg-[#F6F3FC]">
                <img src={Document} className="w-4 h-4" />
                <span className="font-openSans text-[12px] xs:text-[14px] text-[#282529] font-normal">Active Contracts <b>2</b></span>
            </div>
            <div className="flex items-center p-2 gap-[6px] cursor-pointer text-[#282529] rounded-[8px] bg-[#F6F3FC]">
                <img src={Clock} className="w-4 h-4" />
                <span className="font-openSans  text-[12px] xs:text-[14px] text-[#282529] font-normal">05:00pm <span className="text-[#7C7C7C]">(From you +1 hr)</span></span>
            </div>

        </div>
    </div>
        {isOnlyLink && <div className="left-0 z-10 w-full flex flex-row justify-between bg-[#F6F3FC] px-[10px] py-[14px] items-center gap-2">
            <img src={LinkSimplePurple} className="w-4 h-4" />
            <span className="w-full text-left text-[#282529] font-normal text-openSans text-[14px]">{linkcount} links</span>
            <img src={Close} className="w-3 h-3 cursor-pointer" onClick={() => { setIsOnlyLink(false); setIsOnlyFile(false) }} />
        </div>}
        {isOnlyFile && <div className="left-0 z-10 w-full flex flex-row justify-between bg-[#F6F3FC] px-[10px] py-[14px] items-center gap-2">
            <img src={FolderNotch} className="w-4 h-4" />
            <span className="w-full text-left text-[#282529] font-normal text-openSans text-[14px]">{filecount} files</span>
            <img src={Close} className="w-3 h-3 cursor-pointer" onClick={() => { setIsOnlyFile(false); setIsOnlyLink(false) }} />
        </div>}
        {isSearchBarOpen && <ChatSearchBar
            setIsSearchBarOpen={setIsSearchBarOpen}
            setSearchText={setSearchText}
            searchText={searchText}
            activeResultIndex={activeResultIndex}
            goToNextResult={goToNextResult}
            goToPrevResult={goToPrevResult}
            getTotalResults={getTotalResults}
        />}</>
}

export default ChatMemberInfo;
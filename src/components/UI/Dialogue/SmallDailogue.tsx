import React from "react";
import DialogueItem from "./DialogueItem";
import FolderNotch from "@/assets/FolderNotch1.svg";
import LinkSimple from "@/assets/LinkSimple.svg";
import Mute from "@/assets/mute.svg";


const SmallDailogue: React.FC<{ setIsOpen: (isOpen: boolean) => void, setIsMuteOpen: (isMuteOpen: boolean) => void, setIsOnlyLink: (isOnlyLink: boolean) => void, linkcount: number, setIsOnlyFile: (isOnlyFile: boolean) => void, filecount: number }> = ({ setIsOpen, setIsMuteOpen, setIsOnlyLink, linkcount, setIsOnlyFile, filecount }) => {
    return <>
        <div className="fixed xs:top-[80px] xs:right-[40px] bottom-0 right-0 z-50 xs:rounded-xl rounded-t-[16px] xs:w-[244px] xs:h-[148px] w-full h-auto bg-white xs:py-2 pt-1 pb-[30px] xs:px-0 px-[14px] shadow-[4px_4px_32px_0px_rgba(0,0,0,0.08)]">
            <div className="xs:hidden flex w-full items-center justify-center pt-2" onClick={() => setIsOpen(false)}>
                <div className="w-[40px] h-[3px] bg-[#EBEBEB] rounded-[20px]"></div>
            </div>
            <DialogueItem img={FolderNotch} name={`${filecount} Files`} onClick={() => { setIsOpen(false); setIsOnlyFile(true); setIsOnlyLink(false) }} />
            <DialogueItem img={LinkSimple} name={`${linkcount} Links`} onClick={() => { setIsOpen(false); setIsOnlyLink(true); setIsOnlyFile(false) }} />
            <div className="h-2 border-t border-[#E5E5E5]"></div>
            <DialogueItem img={Mute} name="Mute Chat" onClick={() => { setIsOpen(false); setIsMuteOpen(true) }} />
        </div>
        <div className="fixed block xs:hidden inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setIsOpen(false)}></div>
    </>
}

export default SmallDailogue;
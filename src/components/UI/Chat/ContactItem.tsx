import React from "react";
import NamePresenter from "../Common/NamePresenter";
import ChatReceived from "./ChatReceived";
import type { ChatType } from "../../../type/Type";
import { userData } from "../../../data/usermockdb";

const ContactItem: React.FC<{ item: ChatType, selectedChat: string | null, setSelectedChat: (chat: string | null) => void }> = ({ item, selectedChat, setSelectedChat }) => {
    const user = userData.find(user => user.id === item.responder);
    if (!user) return null;

    return <div onClick={() => setSelectedChat(user.id)} className={`cursor-pointer flex items-center justify-between gap-3 py-2 px-4 ${selectedChat === user.id ? "bg-[#F6F3FC]" : "bg-white"}`}>
        <div className="relative w-[48px]">
            <img src={user.avatar} className="rounded-full w-[48px] h-[48px]" />
            {user.online && <div className="absolute bottom-[2px] right-[2px] w-[9px] h-[9px] bg-[#26B05D] border border-white rounded-full"></div>}
        </div>
        <div className="flex w-[273px] flex-col gap-[2px]">
            <div className="flex justify-between items-start">
                <NamePresenter name={user.name} verified={user.verified} />
                <ChatReceived time={item.time} read={item.read} />
            </div>
            <div className="w-full font-openSans text-[14px] text-left text-[#7C7C7C] self-stretch leading-normal font-normal line-clamp-2">
                {item.content}
            </div>
        </div>
    </div>
}

export default ContactItem;
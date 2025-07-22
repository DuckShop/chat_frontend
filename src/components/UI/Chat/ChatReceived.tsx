import React from "react";
import Checked from "@/assets/Checks.svg";

const ChatReceived: React.FC<{ time: Date, read: boolean }> = ({ time, read }) => {
    return <div className="flex items-center gap-1">
        {read && <img src={Checked} className="2-4 h-4" />}
        <span className="font-openSans text-[12px] font-normal leading-normal text-[#7C7C7C]">
            {time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0')}
        </span>
    </div>
}
export default ChatReceived;
import React from "react";
import type { SettingItem } from "./SettingDialogue";
import ToggleButton from "../Common/ToggleButton";

export const DailogueGroup: React.FC<{ item: SettingItem }> = ({ item }) => {
    return (<div className="flex flex-col gap-y-3">
        <div className="flex items-start gap-x-3 pb-4 border-b border-[#E5E5E5]">
            <img src={item.groupicon} alt={item.groupname} className="w-5 h-5" />
            <div className="mulish text-black text-[16px] font-bold">{item.groupname}</div>
        </div>
        <div className="flex flex-col gap-y-3 p-3 rounded-[12px]  bg-[#F6F3FC]">
            {item.groupdata.map((data, index) => (
                <div key={index} className={`flex items-start justify-between gap-x-3 border-b ${index === item.groupdata.length - 1 ? "border-b-0" : "border-[#E5E5E5] pb-4 "}`}>
                    <div className="text-left">
                        <div className="mulish text-black text-[14px] font-bold">{data.title}</div>
                        {data.content && <div className="mulish text-black text-[12px] font-normal">{data.content}</div>}
                    </div>
                    <ToggleButton />
                </div>
            ))}
        </div>
    </div>)
}
import React from "react";
import type { NavigationItemType } from "../../../type/Type";

const NavigationItem: React.FC<{ item: NavigationItemType, hide: boolean }> = ({ item, hide }) => {
    return <div className={`${item.notifcation > 0 ? "bg-[#F6F3FC]" : "bg-white"} justify-between cursor-pointer hover:bg-[#EBEBEB] flex px-[8px] py-[10px] rounded-[8px]`}>
        <div className="flex items-center gap-2 self-stretch">
            <img src={item.img} alt={item.name} />
            {!hide && <span className="font-openSans text-[14px] font-normal leading-normal text-[#282529] ">{item.name}</span>}
        </div>
        {item.notifcation > 0 &&
            <div className=" bg-[#7A58D0] 
            flex items-center justify-center rounded-[60px] flex-col
            w-5 h-5 p-1">
                <span className="font-openSans text-[14px] shrink-0 font-normal
            leading-normal text-[white]">{item.notifcation}</span>
            </div>}
    </div>
}
export default NavigationItem;
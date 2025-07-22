import React from "react";
import Search from "@/assets/search.svg";

const ContactSearchInput: React.FC<{ placeholder: string, setSearchText: (searchText: string) => void, value: string}> = ({ placeholder, setSearchText, value}) => {
    return <div className="p-3 border border-[#EBEBEB] rounded-[8px] w-full items-center flex gap-4">
        <img src={Search} className="w-[16px] h-[16px]"/>
        <input
            className="w-full outline-none text-[16px]"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setSearchText(e.target.value)}
        />
    </div>
}

export default ContactSearchInput; 
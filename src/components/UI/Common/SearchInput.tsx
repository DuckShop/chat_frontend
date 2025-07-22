import React from "react";
import Search from "@/assets/search.svg";

const SearchInput: React.FC<{ placeholder: string}> = ({ placeholder}) => {
    return <div className="p-3 border border-[#EBEBEB] rounded-[8px] w-full items-center flex gap-4">
        <img src={Search} className="w-[16px] h-[16px]"/>
        <input
            className="w-full outline-none text-[16px]"
            placeholder={placeholder}
        />
    </div>
}

export default SearchInput; 
import React from "react";
import Search from "@/assets/search.svg";

const KeywordSearchInput: React.FC<{ placeholder: string, setSearchText: (searchText: string) => void, value?: string, current?: number, total: number, onEnter?: () => void }> = ({ placeholder, setSearchText, value, current, total, onEnter }) => {
    return <div className="p-3 border border-[#EBEBEB] rounded-[8px] w-full items-center flex gap-4">
        <img src={Search} className="w-[16px] h-[16px]"/>
        {total > 0 && <span className="text-[16px] text-[#7A58D0] font-bold">{`(${current}/${total})`}</span>}
        <input
            className="w-full outline-none text-[16px]"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setSearchText?.(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onEnter && onEnter();
                }
            }}
        />
    </div>
}

export default KeywordSearchInput;
import React from "react";
import Smiley from "@/assets/Smiley.svg";
import WarningCircle from "@/assets/WarningCircle.svg";

const MultilineInput: React.FC<{
    title: string,
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
}> = ({ title, placeholder, value, onChange }) => {
    return (<>
        <div className="mulish text-[#282529]  text-left mb-2 text-[16px] font-normal leading-normal">{title}</div>
        <div className="w-full h-full border border-[#EBEBEB] rounded-[8px] p-3 flex flex-row gap-2 mb-3">
            <img src={Smiley} className="w-4 h-4" />
            <textarea className="w-full h-full outline-none" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
        <div className="flex flex-row gap-2 items-center justify-start mb-10">
            <img src={WarningCircle} className="w-[14px] h-[14px]" />
            <span className="mulish text-[#7C7C7C] text-[14px] font-normal leading-normal">Maximum 500 characters.</span>
        </div>
    </>)
}

export default MultilineInput;
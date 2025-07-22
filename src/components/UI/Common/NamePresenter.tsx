import React from "react";
import Verified from "@/assets/verification-fill.svg";

const NamePresenter: React.FC<{ name: string; verified: boolean; }> = ({ name, verified }) => {
    return <div className="items-center flex gap-1">
        <span className="font-openSans text-[16px] font-bold leading-normal text-[#282529]">{name}</span>
        {verified && <img src={Verified} className="w-4 h-4" />}
    </div>
};

export default NamePresenter;
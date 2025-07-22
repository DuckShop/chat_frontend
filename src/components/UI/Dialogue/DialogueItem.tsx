import React from "react";
interface DialogueItemProps {
    img: string;
    name: string;
    onClick: () => void;
}

const DialogueItem: React.FC<DialogueItemProps> = ({img, name, onClick}) => {
    return <div className="flex cursor-pointer items-start bg-white hover:bg-[#F5F5F5] px-[14px] py-[10px] gap-2" onClick={onClick}>
        <img src={img} alt={name} className="w-[20px] h-[20px]" />
        <p className="text-[14px] font-medium text-black">{name}</p>
    </div>
}

export default DialogueItem;
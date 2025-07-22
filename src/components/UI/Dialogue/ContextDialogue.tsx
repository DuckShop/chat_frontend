import React from "react";
import RedEdit from "@/assets/red_fluent_edit.svg";
import Delete from "@/assets/delete.svg";
import Copy from "@/assets/copy_past.svg";
import type { ChatType } from "../../../type/Type";

const ContextDialogue: React.FC<{
    menuPos: { x: number; y: number };
    menuRef: React.RefObject<HTMLDivElement | null>;
    handleCopy: () => void;
    handleEdit: () => void;
    setMenuOpen: (isOpen: boolean) => void;
    setIsDeleteMessageDialogueOpen: (item: ChatType | null) => void;
}> = ({ menuPos, menuRef, handleCopy, handleEdit, setMenuOpen, setIsDeleteMessageDialogueOpen }) => {
    const handleDelete = () => {
        setMenuOpen(false);
        setIsDeleteMessageDialogueOpen(null);
    };
    return (
        <>
            <div
                ref={menuRef}
                style={{ top: menuPos.y, left: menuPos.x }}
                className="fixed min-w-[244px] flex flex-col py-2 px-0 select-none z-50 rounded-[8px] bg-white border border-[#E0E0E0] shadow-[4px_4px_32px_0px_rgba(0,0,0,0.18)]"
            >
                <div className="px-[14px] py-[10px] hover:bg-gray-100 cursor-pointer flex items-center jsutify-start gap-2" onClick={handleCopy}>
                    <img src={Copy} className="w-[15px] h-[15px]" alt="Copy" />
                    <span>Copy Text</span>
                </div>
                <div className="px-[14px] py-[10px] hover:bg-gray-100 cursor-pointer flex items-center jsutify-start gap-2" onClick={handleEdit}>
                    <img src={RedEdit} className="w-[15px] h-[15px]" alt="Copy" />
                    <span>Edit</span>
                </div>
                <div className="px-[14px] py-[10px] hover:bg-gray-100 cursor-pointer text-red-500 flex items-center jsutify-start gap-2" onClick={handleDelete}>
                    <img src={Delete} className="w-[15px] h-[15px]" alt="Delete" />
                    <span>Delete</span>
                </div>
            </div>
        </>
    )
}
export default ContextDialogue;
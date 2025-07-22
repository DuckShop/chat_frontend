import React from 'react';
import Delete from "@/assets/delete.svg";
import Edit from "@/assets/fluent_edit.svg";

const MessageTemplateDialgoue: React.FC<{ messageTemplate: string,setMessageTemplate: (messageTemplate: string) => void, setIsEditAutomateOpen: (isEditAutomateOpen: boolean) => void, setIsDeleteAutomateOpen: (isDeleteAutomateOpen: boolean) => void }> = ({ messageTemplate, setMessageTemplate, setIsEditAutomateOpen, setIsDeleteAutomateOpen }) => {
    return (<>  
    <div className="block xs:hidden fixed w-[100vw] h-[100vh] top-0 left-0  bg-black  bg-opacity-70 z-40" onClick={() => setMessageTemplate("")}></div>
    <div className='fixed xs:absolute bottom-[0px] xs:bottom-[56px] right-0 xs:right-1 bg-white z-50 w-full h-auto rounded-t-[8px] xs:rounded-[8px] shadow-[4px_4px_32px_0px_rgba(0,0,0,0.08)]'>
        <div className='flex flex-row justify-between p-4 justify-between items-center border-b border-[#EBEBEB]'>
            <span className='text-openSans text-[16px] font-bold leading-normal'>
                Automatic Response
            </span>
            <div className='flex flex-row gap-3'>
                <img src={Edit} className='w-[16px] h-[16px] cursor-pointer' onClick={() => setIsEditAutomateOpen(true)} />
                <img src={Delete} className='w-[16px] h-[16px] cursor-pointer' onClick={() => setIsDeleteAutomateOpen(true)} />
            </div>
        </div>
        <div className='flex flex-col px-4 py-3 gap-2'>
            <span className='text-openSans text-left w-full p-3 bg-[#F6F3FC] rounded-[8px] text-[16px] text-[#282529] leading-normal'>
                {messageTemplate}
            </span>
        </div>
    </div>
    </>)
}

export default MessageTemplateDialgoue;
import React from 'react';
import Upload from "@/assets/Upload.svg";

const FileUploadDialogue: React.FC<{ setIsOpen: (isOpen: boolean) => void, setIsFileUploadListOpen: (isOpen: boolean) => void }> = ({ setIsOpen, setIsFileUploadListOpen }) => {
    return (
        <>
            <div className='fixed xs:absolute bottom-0 xs:bottom-[54px] hover:bg-[#F5F5F5] bg-white items-start justify-start xs:top-[-50px] border border-[#EBEBEB] left-0 xs:w-auto w-full z-50 bg-white p-[30px] xs:px-[14px] xs:py-[10px] rounded-t-[32px] xs:rounded-[8px] shadow-[4px_4px_32px_0px_rgba(0,0,0,0.08)] flex flex-col items-center'>
                <div className='flex items-start gap-2 w-full rounded-[8px] cursor-pointer' onClick={() => {
                    setIsOpen(false);
                    setIsFileUploadListOpen(true);
                }}>
                    <img src={Upload} className='w-5 h-5' />
                    <span className='xs:block hidden text-openSans text-[14px] leading-normal'>Upload from your computer</span>
                    <span className='xs:hidden block text-openSans text-[14px] leading-normal'>Upload from your phone</span>
                </div>
            </div>
            <div className="xs:hidden fixed w-[100vw] h-[100vh] top-0 left-0  bg-black  bg-opacity-70 z-40" onClick={() => setIsOpen(false)}></div>
        </>
    )
}

export default FileUploadDialogue;
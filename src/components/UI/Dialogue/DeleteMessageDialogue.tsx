import React from 'react';
import GradientButton from '../Common/GradientButton';
import RedWarning from '@/assets/Redwarning.svg';
import type { ChatType } from '../../../type/Type';
import { chatData } from '../../../data/chatmockdb';

const DeleteMessageDialogue: React.FC<{ setIsOpen: (isOpen: boolean) => void, setChatData: (chatData: ChatType[]) => void, item: ChatType }>
    = ({ setIsOpen, setChatData, item }) => {    
        return (
            <div className="flex flex-col justify-center items-center">
                <img src={RedWarning} className='w-[48px] h-[48px] mb-8' />
                <div className={`text-mulish text-[#E63838] xs:text-[40px] text-[24px] font-bold`}>Delete Automatic Response?</div>
                <div className='text-mulish text-[#282529] xs:text-[16px] text-[14px] font-normal leading-normal mb-8'>Are you sure you want to delete your automatic response? You won't have the opportunity to restore it later, this process is irreversible.</div>
                <div className="flex flex-row gap-2 w-full">
                    <GradientButton className='w-full' variant='secondary' onClick={() => setIsOpen(false)}>Cancel</GradientButton>
                    <GradientButton className='w-full' variant='primary' onClick={() => {
                        setChatData(chatData.filter(chat => chat.time !== item.time));
                        setIsOpen(false);
                    }}>Delete</GradientButton>
                </div>
            </div>
        )
    };

export default DeleteMessageDialogue;
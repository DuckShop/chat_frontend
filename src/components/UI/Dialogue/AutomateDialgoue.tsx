import React from 'react';
import MultilineInput from '../Common/MultilineInput';
import GradientButton from '../Common/GradientButton';
import RedWarning from '@/assets/Redwarning.svg';

const AutomateDialgoue: React.FC<{ title: string, subtitle: string, isDelete: boolean, setIsOpen: (isOpen: boolean) => void, setMessageTemplate: (messageTemplate: string) => void, messageTemplateText: string }>
    =
    ({ title, subtitle, isDelete, setIsOpen, setMessageTemplate, messageTemplateText }) => {

        return (
            <div className="flex flex-col justify-center items-center">
                {isDelete && <img src={RedWarning} className='w-[48px] h-[48px] mb-8' />}
                <div className={`text-mulish ${isDelete ? "text-[#E63838]" : "text-[#282529]"} xs:text-[40px] text-[24px] font-bold`}>{title}</div>
                <div className='text-mulish text-[#282529] xs:text-[16px] text-[14px] font-normal leading-normal mb-8'>{subtitle}</div>
                {isDelete === false ? <MultilineInput title="Automatic Message" placeholder="Write a message..." value={messageTemplateText} onChange={setMessageTemplate} /> : <></>}
                <div className="flex flex-row gap-2 w-full">
                    <GradientButton className='w-full' variant='secondary' onClick={() => setIsOpen(false)}>Cancel</GradientButton>
                    <GradientButton className='w-full' variant='primary' onClick={() => {
                        if (isDelete) {
                            setIsOpen(false);
                            setMessageTemplate("");
                        }
                        else {
                            if (messageTemplateText.length > 500) {
                                alert("Message template must be less than 500 characters");
                            } else {
                                setIsOpen(false);
                                setMessageTemplate(messageTemplateText);
                            }
                        }
                    }}>{isDelete ? "Delete" : "Save"}</GradientButton>
                </div>
            </div>
        )
    };

export default AutomateDialgoue;
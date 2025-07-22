import React from 'react';
import FileTransparent from "@/assets/FileTransparent.svg";
import File from "@/assets/File.svg";
import Close from "@/assets/Close.svg";
import Delete from "@/assets/delete.svg";

const FileUploadProgress: React.FC<{ filename: string, filetype: string, progress: number, filesize: number, removeFile: (index: number) => void, index: number }>
    =
    ({ filename, filetype, progress, filesize, removeFile, index }) => {
        const filetypevalid = ["PDF", "JPG", "XLSX", "ZIP"];
        const filevalid = filetypevalid.includes(filetype.toUpperCase()) && filesize <= 10;
        return (
            <div className={`flex flex-row items-center py-2 pl-2 pr-4 rounded-[8px] justify-between border ${filevalid ? "border-[#EBEBEB] bg-white" : "border-[#E63838] bg-[#FCF3F3]"}  relative`}>
                {progress !== 100 && <div
                    className="absolute z-0 top-0 left-0 h-full bg-[#F6F3FC] rounded-l-[8px]"
                    style={{ width: `${progress}%` }}
                ></div>}
                {!filevalid &&
                    <div className='w-8 h-8 z-10 flex items-center justify-center bg-[#E63838] rounded-[6px] mr-4'>
                        <img src={FileTransparent} className='w-5 h-5' />
                    </div>}
                {filevalid && (progress !== 100 ?
                    <div className='w-8 h-8 z-10 flex items-center justify-center bg-[#7A58D0] rounded-[6px] mr-4'>
                        <img src={FileTransparent} className='w-5 h-5' />
                    </div>
                    : <div className='w-8 z-10 h-8 flex items-center justify-center bg-[#F6F3FC]  rounded-[6px] mr-4'>
                        <img src={File} className='w-5 h-5' />
                    </div>)}
                <div className='flex-1 z-10 flex-col mr-6 justify-start items-start text-left'>
                    <div className='text-[14px] text-[#282529] text-openSans font-bold leading-normal'>{filename}.{filetype}</div>
                    {filesize > 10 && <div className='text-[10px] text-[#E63838] text-openSans font-normal leading-normal'>File Size Limit Exceeded: Maximum file size 10MB</div>}
                    {filesize <= 10 && !filetypevalid.includes(filetype.toUpperCase()) && <div className='text-[10px] text-[#E63838] text-openSans font-normal leading-normal'>Invalid File Format: File type PDF, JPG/, XLSX, and ZIP</div>}
                    {filevalid && (progress === 100 ? <div className='text-[12px] text-[#282529] text-openSans font-normal leading-normal'>{filesize}MB</div> :
                        <div className='text-[10px] text-[#7C7C7C] text-openSans font-normal leading-normal'>{progress}% uploaded</div>)}
                    {!filevalid && <div className='text-[14px] text-[#E63838] text-openSans font-normal leading-normal'>Try Again</div>}
                </div>
                <div className='flex flex-col gap-1 items-center justify-center'>
                    {progress !== 100 && <img src={Close} className='w-3 h-3 cursor-pointer' onClick={() => removeFile(index)} />}
                    {progress == 100 && <img src={Delete} className='w-3 h-3 cursor-pointer' onClick={() => removeFile(index)} />}
                </div>
            </div>
        )
    }

export default FileUploadProgress;
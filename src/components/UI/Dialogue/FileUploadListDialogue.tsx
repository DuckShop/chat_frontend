import React, { useState } from 'react';
import FileUploadProgress from '../Common/FileUploadProgress';
import plus from "@/assets/plus.svg";
import Smiley from "@/assets/Smiley.svg";
import Send from "@/assets/send.svg";
import { useRef } from 'react';
import type { ChatType, FileType } from '../../../type/Type';
import { chatData } from '../../../data/chatmockdb';
const FileUploadListDialogue: React.FC<{ setIsOpen: (isOpen: boolean) => void, files: FileType[], setFiles: React.Dispatch<React.SetStateAction<FileType[]>>, setChatData: (chatData: ChatType[]) => void, selectedChat: string|null }>
    =
    ({ setIsOpen, files, setFiles, setChatData, selectedChat }) => {
        const fileInputRef = useRef<HTMLInputElement>(null);
        const [message, setMessage] = useState('');
        const removeFile = (index: number) => {
            setFiles(files.filter((_, i) => i !== index));
        }

        const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFiles = event.target.files;
            if (selectedFiles && selectedFiles.length > 0) {
                const file = selectedFiles[0];

                // Convert file to FileType format
                const newFile: FileType = {
                    filename: file.name.split('.').slice(0, -1).join('.'), // Remove extension
                    filetype: file.name.split('.').pop()?.toLowerCase() || '',
                    progress: 0, // Start with 0 progress
                    filesize: Math.round(file.size / (1024 * 1024)) // Convert bytes to MB
                };

                // Simulate upload progress
                const simulateUpload = () => {
                    let progress = 0;
                    const interval = setInterval(() => {
                        progress += Math.random() * 20;
                        if (progress >= 100) {
                            progress = 100;
                            clearInterval(interval);
                        }

                        setFiles((prevFiles: FileType[]) =>
                            prevFiles.map((f: FileType, index: number) =>
                                index === prevFiles.length - 1
                                    ? { ...f, progress: Math.round(progress) }
                                    : f
                            )
                        );
                    }, 200);
                };

                // Add new file to the list
                setFiles((prevFiles: FileType[]) => [...prevFiles, newFile]);

                // Start upload simulation
                setTimeout(simulateUpload, 100);
            }

            // Reset input value to allow selecting the same file again
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        };

        const handleAddFileClick = () => {
            fileInputRef.current?.click();
        };

        return (
            <div className="flex flex-col">
                <div className='text-[24px] text-[#282529] text-center text-mulish font-bold leading-normal mb-4'>Uploaded Files</div>
                <div className='flex flex-col gap-2 justify-start mb-3'>
                    {files.map((file, index) => (
                        <FileUploadProgress key={index} removeFile={removeFile} index={index} filename={file.filename} filetype={file.filetype} progress={file.progress} filesize={file.filesize} />
                    ))}
                </div>
                <div className='flex flex-row justify-start items-center gap-2 mb-6 cursor-pointer' onClick={handleAddFileClick}>
                    <img src={plus} className='w-[14px] h-[14px]' />
                    <span className='text-[14px] text-[#7A58D0] text-openSans font-bold leading-normal'>Add file</span>
                </div>

                {/* Hidden file input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                />

                <div className='flex flex-row justify-between items-center gap-2 px-[10px] py-3 border border-[#EBEBEB] rounded-[8px]'>
                    <img src={Smiley} className='w-[20px] h-[20px]' />
                    <input type="text" placeholder='Type a message' className='flex-1 border-l outline-none border-[#EBEBEB] px-2' value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setMessage('');
                            setChatData([
                                ...chatData,
                                {
                                    receiver: "user_1", // or appropriate value
                                    responder: selectedChat || "",    // or appropriate value
                                    time: new Date(),
                                    content: message,       // or your file message
                                    file: files,            // if your ChatType supports a file field
                                    read: false
                                }
                            ]);
                            setIsOpen(false);
                            setFiles([]);
                        }
                    }} />
                    <img src={Send} className='cursor-pointer w-[20px] h-[20px]' onClick={() => {
                        setMessage('');
                        setChatData([
                            ...chatData,
                            {
                                receiver: "user_1", // or appropriate value
                                responder: selectedChat || "",    // or appropriate value
                                time: new Date(),
                                content: message,       // or your file message
                                file: files,            // if your ChatType supports a file field
                                read: false
                            }
                        ]);
                        setIsOpen(false);
                        setFiles([]);
                    }} />
                </div>
            </div>
        )
    }

export default FileUploadListDialogue;
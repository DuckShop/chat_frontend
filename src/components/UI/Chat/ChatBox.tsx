import React, { useState, useEffect } from "react";
import Attachment from "@/assets/plus.svg";
import Emoji from "@/assets/Smiley.svg";
import Microphone from "@/assets/Microphone.svg";
import Send from "@/assets/send.svg";
import ChatTeardropDot from "@/assets/ChatTeardropDots.svg";
import type { ChatType } from "../../../type/Type";
import Dialogue from "../../../layouts/Dialogue";
import AutomateDialgoue from "../Dialogue/AutomateDialgoue";
import MessageTemplateDialgoue from "../Dialogue/MessageTemplateDialgoue";
import FileUploadDialogue from "../Dialogue/FileUploadDialogue";
import FileUploadListDialogue from "../Dialogue/FileUploadListDialogue";
import type { FileType, AudioRecordingType } from "../../../type/Type";
import OK from "@/assets/OK.svg";
import Cancel from "@/assets/Close.svg";
import MainInput from "./MainInput";
import Pause from "@/assets/pause.svg";
import Play from "@/assets/play.svg";
import SendPurple from "@/assets/send_purple.svg";

const ChatBox: React.FC<{ selectedChat: string | null, chatData: ChatType[], setChatData: (chatData: ChatType[]) => void, files: FileType[], setFiles: React.Dispatch<React.SetStateAction<FileType[]>>, changedChat: ChatType | null, setChangedChat: (chat: ChatType | null) => void }> = (
    { selectedChat, chatData, setChatData, files, setFiles, changedChat, setChangedChat }
) => {
    const [input, setInput] = useState("");
    const [isAutomateOpen, setIsAutomateOpen] = useState(false);
    const [messageTemplate, setMessageTemplate] = useState("");
    const [isEditAutomateOpen, setIsEditAutomateOpen] = useState(false);
    const [isDeleteAutomateOpen, setIsDeleteAutomateOpen] = useState(false);
    const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);
    const [isFileUploadListOpen, setIsFileUploadListOpen] = useState(false);
    const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
    const [isAudioRecording, setIsAudioRecording] = useState<AudioRecordingType>({
        status: "cancel",
        time: 0
    });
    const handleSend = () => {
        if (!selectedChat) return;
        
        // Handle audio-only message
        if (audioChunks.length > 0 && !input.trim()) {
            setChatData([...chatData, {
                receiver: "user_1",
                responder: selectedChat,
                time: new Date(),
                content: "",
                read: false,
                audio: audioChunks[0]
            }]);
            setAudioChunks([]);
            setIsAudioRecording({ status: "cancel", time: 0 });
            return;
        }
        
        // Handle text message or text + audio message
        if (input.trim()) {
            setChatData([...chatData, {
                receiver: "user_1",
                responder: selectedChat,
                time: new Date(),
                content: input,
                read: false,
                audio: audioChunks.length > 0 ? audioChunks[0] : undefined
            }]);
            setInput("");
            setAudioChunks([]);
            setIsAudioRecording({ status: "cancel", time: 0 });
        }
    };
    useEffect(() => {
        setAudioChunks([]);
        setIsAudioRecording({ status: "cancel", time: 0 });
    }, [selectedChat]);
    useEffect(() => {
        if (changedChat) {
            setInput(changedChat.content);
        }
    }, [changedChat]);
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return <div className="absolute bottom-4 left-4 right-4 w-[calc(100%-32px)] flex py-3 items-center flex-row px-[10px] border border-[#EBEBEB] rounded-[16px] gap-2">
        {isAutomateOpen && <Dialogue setIsOpen={setIsAutomateOpen} windowsize={600}>
            <AutomateDialgoue title="Add Automatic Response" isDelete={false} subtitle="You can create new automatic message templates" setIsOpen={setIsAutomateOpen} setMessageTemplate={setMessageTemplate} messageTemplateText={messageTemplate} />
        </Dialogue>}

        {isEditAutomateOpen && <Dialogue setIsOpen={setIsEditAutomateOpen} windowsize={600}>
            <AutomateDialgoue title="Edit Automatic Response" isDelete={false} subtitle="Change your automatic response into new one" setIsOpen={setIsEditAutomateOpen} setMessageTemplate={setMessageTemplate} messageTemplateText={messageTemplate} />
        </Dialogue>}

        {isDeleteAutomateOpen && <Dialogue setIsOpen={setIsDeleteAutomateOpen} windowsize={600}>
            <AutomateDialgoue title="Delete Automatic Response?" isDelete={true} subtitle="Are you sure you want to delete your automatic response? You won't have the opportunity to restore it later, this process is irreversible." setIsOpen={setIsDeleteAutomateOpen} setMessageTemplate={setMessageTemplate} messageTemplateText={messageTemplate} />
        </Dialogue>}
        {!isDeleteAutomateOpen && !isAutomateOpen && !isEditAutomateOpen && messageTemplate &&
            <MessageTemplateDialgoue messageTemplate={messageTemplate} setMessageTemplate={setMessageTemplate} setIsEditAutomateOpen={setIsEditAutomateOpen} setIsDeleteAutomateOpen={setIsDeleteAutomateOpen} />}

        {isFileUploadOpen && <FileUploadDialogue setIsOpen={setIsFileUploadOpen} setIsFileUploadListOpen={setIsFileUploadListOpen} />}

        {isFileUploadListOpen && <Dialogue setIsOpen={setIsFileUploadListOpen} windowsize={498}>
            <FileUploadListDialogue setIsOpen={setIsFileUploadListOpen} files={files} setFiles={setFiles} setChatData={setChatData} selectedChat={selectedChat} />
        </Dialogue>}
        {isAudioRecording.status === "cancel" && <> <div className="w-6 p-[2px] flex justify-center items-center gap-10px border border-[#7C7C7C] rounded-[50px] h-6 cursor-pointer bg-[#F5F5F5]" onClick={() => setIsFileUploadOpen(true)}>
            <img src={Attachment} className="w-4 h-4" />
        </div>
            <img
                src={ChatTeardropDot} className="w-5 h-5 cursor-pointer"
                onClick={() => setIsAutomateOpen(true)}
            />
        <img src={Emoji} className="w-5 h-5 cursor-pointer" />
        </>}
        {isAudioRecording.status === "cancel" && <img src={Microphone} className="w-5 h-5 cursor-pointer" onClick={() => setIsAudioRecording({ status: "start", time: 0 })} />}
        {isAudioRecording.status === "start" && <img src={Pause} className="w-5 h-5 cursor-pointer" onClick={() => setIsAudioRecording({ status: "pause", time: 0 })} />}
        {(isAudioRecording.status === "pause"|| isAudioRecording.status==="listen") && <img src={Play} className="w-5 h-5 cursor-pointer" onClick={() => setIsAudioRecording({ status: "start", time: 0 })} />}
        <MainInput
            input={input}
            setInput={setInput}
            handleInputKeyDown={handleInputKeyDown}
            selectedChat={selectedChat}
            isAudioRecording={isAudioRecording}
            setIsAudioRecording={setIsAudioRecording}
            setAudioChunks={setAudioChunks}
        />
        {changedChat ? <div className="flex items-center gap-2 mr-2"><img
            src={OK}
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
                if (typeof selectedChat === "string") {
                    setChatData(chatData.map(chat =>
                        chat.time === changedChat.time && chat.responder === changedChat.responder
                            ? { ...chat, content: input }
                            : chat
                    ));
                }
                setChangedChat(null);
                setInput("");
            }}
            style={{ opacity: selectedChat && input.trim() ? 1 : 0.5 }}
        /> <img
                src={Cancel}
                className="w-[14px] h-[14px] cursor-pointer"
                onClick={() => {
                    setChangedChat(null);
                    setInput("");
                }}
                style={{ opacity: selectedChat && input.trim() ? 1 : 0.5 }}
            /> </div>
            : <img
                src={(audioChunks.length > 0||input.trim()) ? SendPurple : Send}
                className="w-5 h-5 cursor-pointer"
                onClick={handleSend}
                style={{ opacity: selectedChat && (input.trim() || audioChunks.length > 0) ? 1 : 0.5 }}
            />}
    </div>
}

export default ChatBox;
import React, { useEffect, useState } from "react";
import type { AudioRecordingType } from "../../../type/Type";
import Volume from "@/assets/volume.svg";
import Close from "@/assets/Close.svg";
import Delete from "@/assets/delete.svg";
import VoiceVisualizer from "./VoiceVisualizer";

const MainInput: React.FC<{
    input: string,
    setInput: (value: string) => void,
    handleInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    selectedChat: string | null,
    isAudioRecording: AudioRecordingType,
    setIsAudioRecording: (value: AudioRecordingType) => void,
    setAudioChunks: (value: Blob[]) => void,
}> = ({ input, setInput, handleInputKeyDown, selectedChat, isAudioRecording, setIsAudioRecording, setAudioChunks }) => {
    const [recordingTime, setRecordingTime] = useState(0);

    console.log(isAudioRecording.status);

    // Timer effect for audio recording
    useEffect(() => {
        let interval: number | null = null;

        if (isAudioRecording.status === "start") {
            interval = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);
        }
        if (isAudioRecording.status === "cancel") {
            setRecordingTime(0);
            if (interval) {
                clearInterval(interval);
            }
        }
        if (isAudioRecording.status === "delete") {
            setRecordingTime(0);
            setIsAudioRecording({ status: "pause", time: 0 });
            if (interval) {
                clearInterval(interval);
            }
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isAudioRecording.status]);

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`${isAudioRecording.status === "cancel" ? "w-[calc(100%-140px)]" : "w-[calc(100%-55px)]"} h-5 border-l border-[#EBEBEB] flex items-center px-2 justify-between`}>
            <div className="flex items-center w-full">
                {isAudioRecording.status === "cancel" && <input
                    type="text"
                    className="outline-none w-full"
                    placeholder="Write a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    disabled={!selectedChat}
                />}
                {isAudioRecording.status === "start" && <div className="w-[6px] h-[6px] my-2 mx-[7px] bg-red-500 rounded-full animate-pulse" />}
                {isAudioRecording.status === "pause" && <img src={Volume} className="w-5 h-5 cursor-pointer" onClick={() => setIsAudioRecording({ status: "listen", time: 0 })} />}
                {isAudioRecording.status === "start" && <span className="text-[#282529] text-[14px] ">{formatTime(recordingTime)}</span>}
                <VoiceVisualizer
                    isRecording={isAudioRecording.status === "start"}
                    isListening={isAudioRecording.status === "listen"}
                    recordingTime={recordingTime}
                    isAudioRecording={isAudioRecording}
                    setAudioChunks={setAudioChunks}
                    onAudioData={(audioBlob) => {
                        console.log('Audio recorded:', audioBlob);
                    }}
                />
            </div>
            {(isAudioRecording.status === "pause" || isAudioRecording.status === "start") && <img src={Delete} className="w-4 h-4 cursor-pointer" onClick={() => setIsAudioRecording({ status: "cancel", time: 0 })} />}
            {isAudioRecording.status === "listen" && <img src={Close} className="w-4 h-4 cursor-pointer" onClick={() => setIsAudioRecording({ status: "pause", time: 0 })} />}
        </div >)
}

export default MainInput;
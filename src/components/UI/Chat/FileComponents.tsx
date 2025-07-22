import React from "react";
import type { FileType } from "../../../type/Type";
import FileIcon from "@/assets/File.svg";
import Download from "@/assets/DownloadSimple.svg";

const FileComponents: React.FC<{ file: FileType }> = ({ file }) => {
    return <div className="flex w-full items-start justify-between px-2 p-1 min-w-[280px]">
        <div className="flex flex items-center justify-start gap-2 ">
            <div className="w-8 h-8 rounded-full flex justify-center items-center border border-[#7A58D0] bg-white">
                <img src={FileIcon} className="w-[11px] h-[13px] " />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">{file.filename}.{file.filetype}</div>
                <span className="text-[12px] text-[#7C7C7C]">{file.filesize} MB</span>
            </div>
        </div>
        <div className="flex flex-row items-center cursor-pointer    gap-2">
            <img src={Download} className="w-[14px] h-[14px] " />
            <span className="text-[12px] text-[#7A58D0]">Donwload</span>
        </div>
    </div>;
};

export default FileComponents;
import React from "react";
import Mute from "@/assets/mute.svg";
import Clock from "@/assets/Clock.svg";
import type { SettingItem } from "./SettingDialogue";
import { DailogueGroup } from "./DialogueGroup";

const settingItems: SettingItem[] = [{
    groupname: "Chat Notifications",
    groupicon: Clock,
    groupdata: [
        { title: "Mute for 1 Hour", content: "" },
        { title: "Mute for 8 Hours", content: "" },
        { title: "Mute for 1 Day", content: "" },
    ]
}, {
    groupname: "Disable Chat",
    groupicon: Mute,
    groupdata: [
        { title: "Set a timer for 24 hours", content: "After 24 hours, automatically re-enable chat notifications for the conversation." },
        { title: "Mute for Always", content: "Disable chat notifications permanently." },
    ]
}]

const MuteDialogue: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="mulish text-black text-[24px] font-bold">Chat Settings</div>
            {settingItems.map((item, index) => (
                <DailogueGroup item={item} key={index} />
            ))}
        </div>)
}

export default MuteDialogue;
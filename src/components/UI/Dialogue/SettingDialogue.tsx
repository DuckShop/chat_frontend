import React from "react";
import WifiHigh from "@/assets/WifiHigh.svg";
import Notification from "@/assets/Notification.svg";
import { DailogueGroup } from "./DialogueGroup";

export type SettingItem = {
    groupname: string;
    groupicon: string;
    groupdata: { title: string; content: string; }[];
}

const settingItems: SettingItem[] = [{
    groupname: "Online & Offline Mode",
    groupicon: WifiHigh,
    groupdata: [
        { title: "Online", content: "Other users see your activity." },
    ]
}, {
    groupname: "Notifications",
    groupicon: Notification,
    groupdata: [
        { title: "Text Messages", content: "Notifications for direct messages from other users." },
        { title: "Multimedia", content: "Notifications for sending pictures or videos." },
        { title: "Reactions", content: "Notifications for reactions to the user’s message." }
    ]
}]

const SettingDialogue: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="mulish text-black text-[24px] font-bold">Chat Settings</div>
            {settingItems.map((item, index) => (
                <DailogueGroup item={item} key={index} />
            ))}
        </div>
    )
}

export default SettingDialogue;
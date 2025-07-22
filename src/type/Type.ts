export type NavigationItemType = {
    img: string;
    name: string;
    notifcation: number;
    path?: string;
}

export type ChatType = {
    receiver: string;
    responder: string;
    time: Date;
    imgs?: string[];
    file?: FileType[];
    content: string;
    read: boolean;
    audio?: Blob;
};

export type UserType = {
    id: string;
    name: string;
    verified: boolean;
    online: boolean;
    headline: string;
    avatar: string;
}

export type FileType = {
    filename: string;
    filetype: string;
    progress: number;
    filesize: number;
    url?: string;
}

export type AudioRecordingType = {
    status: "start" | "pause" | "cancel" | "send" | "listen" | "delete";
    time: number;
}
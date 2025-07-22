import React, { useState, useRef, useEffect } from "react";
import type { ChatType, UserType } from "../../../type/Type";
import ChatReceived from "./ChatReceived";
import LinkPreview from "./LinkPreview";
import ContextDialogue from "../Dialogue/ContextDialogue";
import Dialogue from "../../../layouts/Dialogue";
import DeleteMessageDialogue from "../Dialogue/DeleteMessageDialogue";
import FileComponents from "./FileComponents";
import AudioPlayer from "../Common/AudioPlayer";

// Utility to detect URLs in a string
const urlRegex = /(https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+)|(www\.[\w\-._~:/?#[\]@!$&'()*+,;=%]+)/gi;

const ImageModal: React.FC<{
    images: string[];
    open: boolean;
    initialIndex: number;
    onClose: () => void;
}> = ({ images, open, initialIndex, onClose }) => {
    const [current, setCurrent] = useState(initialIndex);
    React.useEffect(() => {
        setCurrent(initialIndex);
    }, [initialIndex, open]);
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" >
            <div className="relative bg-white rounded-lg shadow-lg flex flex-col items-center p-4"
                style={{ width: '80vw', maxWidth: 480, height: '70vh', maxHeight: 600 }}>
                <button
                    className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="flex items-center justify-center w-full h-full">
                    <img
                        src={images[current]}
                        alt={`modal-img-${current}`}
                        className="max-w-full max-h-full object-contain rounded-lg"
                    />
                </div>
                {images.length > 1 && (
                    <div className="flex items-center justify-between w-full mt-4">
                        <button
                            className="px-4 py-2 text-lg font-bold text-gray-700 hover:text-black disabled:opacity-50"
                            onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
                            disabled={images.length <= 1}
                        >
                            &#8592;
                        </button>
                        <span className="text-gray-700">{current + 1} / {images.length}</span>
                        <button
                            className="px-4 py-2 text-lg font-bold text-gray-700 hover:text-black disabled:opacity-50"
                            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                            disabled={images.length <= 1}
                        >
                            &#8594;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const renderImages = (
    imgs?: string[],
    onImgClick?: (idx: number) => void
) => {
    if (!imgs || imgs.length === 0) return null;
    if (imgs.length === 1) {
        return (
            <img
                src={imgs[0]}
                alt="chat-img"
                className="w-full max-h-64 object-cover rounded-lg mb-2 cursor-pointer"
                onClick={() => onImgClick && onImgClick(0)}
            />
        );
    }
    if (imgs.length === 2) {
        return (
            <div className="flex gap-2 mb-2">
                {imgs.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`chat-img-${idx}`}
                        className="w-[calc(50%-4px)] max-h-48 object-cover rounded-lg cursor-pointer"
                        onClick={() => onImgClick && onImgClick(idx)}
                    />
                ))}
            </div>
        );
    }
    if (imgs.length === 3) {
        return (
            <div className="flex flex-col gap-2 mb-2">
                <img
                    src={imgs[0]}
                    alt="chat-img-0"
                    className="w-full max-h-40 object-cover rounded-lg cursor-pointer"
                    onClick={() => onImgClick && onImgClick(0)}
                />
                <div className="flex gap-2">
                    {imgs.slice(1).map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`chat-img-${idx + 1}`}
                            className="w-[calc(50%-4px)] max-h-32 object-cover rounded-lg cursor-pointer"
                            onClick={() => onImgClick && onImgClick(idx + 1)}
                        />
                    ))}
                </div>
            </div>
        );
    }
    if (imgs.length === 4) {
        return (
            <div className="flex flex-col gap-2 mb-2 w-full max-w-[373px]">
                <div className="flex gap-2 w-full">
                    <img
                        src={imgs[0]}
                        alt="chat-img-0"
                        className="w-[calc(50%-4px)] h-32 object-cover rounded-lg cursor-pointer"
                        onClick={() => onImgClick && onImgClick(0)}
                    />
                    <img
                        src={imgs[1]}
                        alt="chat-img-1"
                        className="w-[calc(50%-4px)] h-32 object-cover rounded-lg cursor-pointer"
                        onClick={() => onImgClick && onImgClick(1)}
                    />
                </div>
                <div className="flex gap-2 w-full">
                    <img
                        src={imgs[2]}
                        alt="chat-img-2"
                        className="w-[calc(50%-4px)] h-32 object-cover rounded-lg cursor-pointer"
                        onClick={() => onImgClick && onImgClick(2)}
                    />
                    <img
                        src={imgs[3]}
                        alt="chat-img-3"
                        className="w-[calc(50%-4px)] h-32 object-cover rounded-lg cursor-pointer"
                        onClick={() => onImgClick && onImgClick(3)}
                    />
                </div>
            </div>
        );
    }
    // For more than 4, show a grid (optional, fallback)
    return (
        <div className="grid grid-cols-2 gap-2 mb-2">
            {imgs.map((img, idx) => (
                <img
                    key={idx}
                    src={img.replace(/^@\//, '/src/assets/')}
                    alt={`chat-img-${idx}`}
                    className="w-full max-h-32 object-cover rounded-lg cursor-pointer"
                    onClick={() => onImgClick && onImgClick(idx)}
                />
            ))}
        </div>
    );
};

const ChatItem: React.FC<{
    item: ChatType,
    me: UserType | undefined,
    user: UserType | undefined,
    searchText?: string,
    chatIdx?: number,
    getActiveResult?: () => { chatIdx: number, matchIdx: number } | null,
    setChangedChat: (chat: ChatType | null) => void,
    setChatData: (chatData: ChatType[]) => void
}> = ({ item, me, user, searchText = '', chatIdx = 0, getActiveResult = () => null, setChangedChat, setChatData }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPos, setMenuPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);
    const mainDivRef = useRef<HTMLDivElement>(null);
    const [isDeleteMessageDialogueOpen, setIsDeleteMessageDialogueOpen] = useState<ChatType | null>(null);
    const imgs = item.imgs;
    if (!me || !user) return null;

    const urls = typeof item.content === 'string' ? item.content.match(urlRegex) : null;
    const hasUrl = urls && urls.length > 0;

    const handleImgClick = (idx: number) => {
        setModalIndex(idx);
        setModalOpen(true);
    };

    // Highlight logic
    let content = item.content;
    let lowerContent = content.toLowerCase();
    let lowerSearch = searchText.toLowerCase();
    let parts: React.ReactNode[] = [];
    let lastparts: React.ReactNode[] = [];
    let lastIdx = 0;
    let matchIndices: number[] = [];
    if (searchText && lowerSearch && lowerSearch.length > 0) {
        let pos = 0;
        while (true) {
            const found = lowerContent.indexOf(lowerSearch, pos);
            if (found === -1) break;
            matchIndices.push(found);
            pos = found + lowerSearch.length;
        }
    }
    const activeResult = getActiveResult();
    const isActive = activeResult && activeResult.chatIdx === chatIdx;
    if (matchIndices.length > 0) {
        for (let i = 0; i < matchIndices.length; i++) {
            const idx = matchIndices[i];
            parts.push(content.substring(lastIdx, idx));
            const isCurrent = isActive && activeResult && activeResult.matchIdx === i;
            parts.push(
                <b
                    key={i}
                    style={{ color: '#7A58D0', fontWeight: isCurrent ? 700 : 500 }}
                >
                    {content.substring(idx, idx + lowerSearch.length)}
                </b>
            );
            lastIdx = idx + lowerSearch.length;
        }
        parts.push(content.substring(lastIdx));
    } else {
        parts = [content];
    }

    // Add content except links to lastparts
    if (hasUrl && urls) {
        let nonLinkContent = content;
        urls.forEach(url => {
            nonLinkContent = nonLinkContent.replace(url, '');
        });
        // Clean up extra spaces and trim
        nonLinkContent = nonLinkContent.replace(/\s+/g, ' ').trim();
        if (nonLinkContent) {
            lastparts = [<span key="non-link-content">{nonLinkContent}</span>];
        }
    }

    // Border highlight if active
    const responderborderStyle = isActive ? { border: '2px solid #7A58D0', borderRadius: 16, borderBottomLeftRadius: 0 } : {};
    const receiverborderStyle = isActive ? { border: '2px solid #7A58D0', borderRadius: 16, borderBottomRightRadius: 0 } : {};

    // Context menu handlers
    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuPos({ x: e.clientX, y: e.clientY });
        setMenuOpen(true);
    };
    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);
    // Menu actions
    const handleCopy = () => {
        if (typeof item.content === 'string') {
            navigator.clipboard.writeText(item.content);
        }
        setMenuOpen(false);
    };
    const handleEdit = () => {
        setChangedChat(item);
        setMenuOpen(false);
    };
    return <div ref={mainDivRef} className={`flex flex-col items-end gap-1 mt-6 ${item.receiver === me.id ? "justify-end" : "justify-start"}`}>
        {menuOpen && (
            <ContextDialogue
                menuPos={menuPos}
                menuRef={menuRef}
                handleCopy={handleCopy}
                handleEdit={handleEdit}
                setMenuOpen={setMenuOpen}
                setIsDeleteMessageDialogueOpen={() => setIsDeleteMessageDialogueOpen(item)}
            />
        )}
        {isDeleteMessageDialogueOpen && <Dialogue setIsOpen={() => setIsDeleteMessageDialogueOpen(null)} windowsize={668}>
            <DeleteMessageDialogue setIsOpen={() => setIsDeleteMessageDialogueOpen(null)} setChatData={setChatData} item={isDeleteMessageDialogueOpen}/>
        </Dialogue>}
        {/* Main chat item content */}
        <div className={`flex items-end gap-3 w-full ${item.receiver === me.id ? "justify-end" : "justify-start"}`}>
            {
                item.receiver === me.id ?
                    <div className="flex relative items-end gap-3">
                        <div 
                            className="flex text-left flex-col items-end md:max-w-[373px] max-w-[300px] min-w-[50px] rounded-l-[8px] rounded-tr-[8px] bg-[#F6F3FC] p-2 pb-4" 
                            style={receiverborderStyle}
                            onContextMenu={handleContextMenu}
                        >{item.file && item.file?.map((item,key) => (
                            <FileComponents file={item} key={key}/>
                        ))}
                            {item.audio && <AudioPlayer audio={item.audio} />}
                            <span>{renderImages(imgs, handleImgClick)}
                            {lastparts}
                                {hasUrl ? (
                                    urls!.map((url, idx) => <LinkPreview key={idx} url={url.startsWith('http') ? url : `https://${url}`} />)
                                ) : parts}
                            </span>
                        </div>
                        <img src={me.avatar} className="w-[32px] h-[32px] rounded-full" />
                        <div className="absolute bottom-0 right-[54px]"><ChatReceived time={item.time} read={item.read} /></div>
                    </div> :
                    <div className="flex relative items-end gap-3">
                        <img src={user.avatar} className="w-[32px] h-[32px] rounded-full" />
                        <div 
                            className="flex flex-col text-left items-end md:w-[373px] w-[300px] rounded-r-[8px] rounded-tl-[8px] bg-[#F5F5F5] p-2 pb-4" 
                            style={responderborderStyle}
                            onContextMenu={handleContextMenu}
                        >
                            <span>{renderImages(imgs, handleImgClick)}
                            {lastparts}
                                {hasUrl ? (
                                    urls!.map((url, idx) => <LinkPreview key={idx} url={url.startsWith('http') ? url : `https://${url}`} />)
                                ) : parts}
                            </span>
                        </div>
                        <div className="absolute bottom-0 right-[8px] text-[#7C7C7C] text-[12px] font-normal leading-normal">
                            {item.time.getHours().toString().padStart(2, '0') + ':' + item.time.getMinutes().toString().padStart(2, '0')}</div>
                    </div>
            }
        </div>
        {imgs && imgs.length > 0 && (
            <ImageModal
                images={imgs}
                open={modalOpen}
                initialIndex={modalIndex}
                onClose={() => setModalOpen(false)}
            />
        )}
    </div >
}

export default ChatItem;
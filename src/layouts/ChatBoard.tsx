import React from "react";
import ChatMemberInfo from "../components/UI/Chat/ChatMemberInfo";
import { userData } from "../data/usermockdb";
import ChatBoardContent from "../components/UI/Chat/ChatBoardContent";
import ChatBox from "../components/UI/Chat/ChatBox";
import { useState, useEffect, useCallback } from "react";
import { chatData as chatDataMock } from "../data/chatmockdb";
import type { ChatType, FileType } from "../type/Type";

const ChatBoard: React.FC<{selectedChat: string | null, files: FileType[], setFiles: React.Dispatch<React.SetStateAction<FileType[]>>}> = ({selectedChat, files, setFiles}) => {
    const [chatData, setChatData] = useState(chatDataMock);
    const user = userData.find(user => user.id === selectedChat);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<{chatIdx: number, indices: number[]}[]>([]);
    const [activeResultIndex, setActiveResultIndex] = useState(0);
    const [isOnlyLink, setIsOnlyLink] = useState(false);
    const [isOnlyFile, setIsOnlyFile] = useState(false);
    const [filteredChats, setFilteredChats] = useState<ChatType[]>([]);
    const [changedChat, setChangedChat] = useState<ChatType | null>(null);

    useEffect(() => {
        setSearchText('');
        setIsSearchBarOpen(false);
        setSearchResults([]);
        setActiveResultIndex(0);
        setIsOnlyLink(false);
        setIsOnlyFile(false);
        setChangedChat(null);
    }, [selectedChat]);
    // Open search bar on Ctrl+F
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                setIsSearchBarOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Search logic: find all matches in filtered chats
    useEffect(() => {
        if (!searchText) {
            setSearchResults([]);
            setActiveResultIndex(0);
            return;
        }
        const filteredChats = chatData.filter(
            chat => chat.receiver === selectedChat || chat.responder === selectedChat
        );
        const results: {chatIdx: number, indices: number[]}[] = [];
        filteredChats.forEach((chat, idx) => {
            const indices: number[] = [];
            let content = chat.content;
            let search = searchText;
            let pos = 0;
            if (search) {
                let lowerContent = content.toLowerCase();
                let lowerSearch = search.toLowerCase();
                while (true) {
                    const found = lowerContent.indexOf(lowerSearch, pos);
                    if (found === -1) break;
                    indices.push(found);
                    pos = found + lowerSearch.length;
                }
            }
            if (indices.length > 0) {
                results.push({chatIdx: idx, indices});
            }
        });
        setSearchResults(results);
        setActiveResultIndex(results.length > 0 ? 0 : 0);
    }, [searchText, chatData, selectedChat]);

    // Navigation handlers
    const goToNextResult = useCallback(() => {
        if (searchResults.length === 0) return;
        setActiveResultIndex(idx => Math.min(idx + 1, getTotalResults() - 1));
    }, [searchResults]);
    const goToPrevResult = useCallback(() => {
        if (searchResults.length === 0) return;
        setActiveResultIndex(idx => Math.max(idx - 1, 0));
    }, [searchResults]);
    const getTotalResults = useCallback(() => searchResults.reduce((acc, r) => acc + r.indices.length, 0), [searchResults]);

    useEffect(() => {
        const filteredChats = chatData.filter(
            chat => chat.receiver === selectedChat || chat.responder === selectedChat
        );
        setFilteredChats(filteredChats);
    }, [chatData, selectedChat]);

    // Map activeResultIndex to chatIdx and matchIdx
    const getActiveResult = useCallback(() => {
        let count = 0;
        for (let i = 0; i < searchResults.length; i++) {
            for (let j = 0; j < searchResults[i].indices.length; j++) {
                if (count === activeResultIndex) {
                    return {chatIdx: searchResults[i].chatIdx, matchIdx: j};
                }
                count++;
            }
        }
        return null;
    }, [searchResults, activeResultIndex]);

    if (!user) return null;

    return <div className="w-full relative h-full">
        <ChatMemberInfo
            user={user}
            setIsSearchBarOpen={setIsSearchBarOpen}
            isSearchBarOpen={isSearchBarOpen}
            setSearchText={setSearchText}
            searchText={searchText}
            activeResultIndex={activeResultIndex}
            goToNextResult={goToNextResult}
            goToPrevResult={goToPrevResult}
            getTotalResults={getTotalResults}
            setIsOnlyLink={setIsOnlyLink}
            isOnlyLink={isOnlyLink}
            filteredChats={filteredChats}
            setIsOnlyFile={setIsOnlyFile}
            isOnlyFile={isOnlyFile}
        />
        <ChatBoardContent
            selectedChat={selectedChat}
            isSearchBarOpen={isSearchBarOpen}
            searchText={searchText}
            searchResults={searchResults}
            activeResultIndex={activeResultIndex}
            getActiveResult={getActiveResult}
            filteredChats={filteredChats}
            isOnlyLink={isOnlyLink}
            setChangedChat={setChangedChat}
            setChatData={setChatData}
            isOnlyFile={isOnlyFile}
        />
        <ChatBox selectedChat={selectedChat} chatData={chatData} setChatData={setChatData} files={files} setFiles={setFiles} changedChat={changedChat} setChangedChat={setChangedChat}/>
    </div>
}
export default ChatBoard;
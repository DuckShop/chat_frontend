import React from 'react';
import CaretDown from '@/assets/CaretDown.svg';
import CaretUp from '@/assets/CaretUp.svg';
import KeywordSearchInput from '../Common/KeywordSearchInput';
import CloseCircle from '@/assets/CloseCircle.svg';

const ChatSearchBar: React.FC<{
    setIsSearchBarOpen: (isSearchBarOpen: boolean) => void,
    setSearchText: (searchText: string) => void,
    searchText: string,
    activeResultIndex: number,
    goToNextResult: () => void,
    goToPrevResult: () => void,
    getTotalResults: () => number,
}> = ({ setIsSearchBarOpen, setSearchText, searchText, activeResultIndex, goToNextResult, goToPrevResult, getTotalResults }) => {
    const total = getTotalResults();
    const current = total === 0 ? 0 : activeResultIndex + 1;
    const isFirst = activeResultIndex === 0;
    const isLast = activeResultIndex === total - 1;
    return (
        <div className='right-0 top-[81px] w-full p-4 bg-white z-20 flex flex-row items-center border-b border-[#EBEBEB]'>
            <div className='flex flex-row items-center gap-3 shrink-0'>
                <img
                    src={CaretDown}
                    className='w-[24px] h-[24px] cursor-pointer'
                    style={{ filter: (!isLast && total > 0) ? `invert(32%) sepia(61%) saturate(747%) hue-rotate(227deg) brightness(92%) contrast(92%)` : 'grayscale(1)' }}
                    onClick={() => !isLast && total > 0 && goToNextResult()}
                />
                <img
                    src={CaretUp}
                    className='w-[24px] h-[24px] cursor-pointer'
                    style={{ filter: (!isFirst && total > 0) ? `invert(32%) sepia(61%) saturate(747%) hue-rotate(227deg) brightness(92%) contrast(92%)` : 'grayscale(1)' }}
                    onClick={() => !isFirst && total > 0 && goToPrevResult()}
                />
            </div>
            <div className='flex-1 mx-4 flex '>
                <KeywordSearchInput placeholder='Search' setSearchText={setSearchText} value={searchText} current={current} total={total} />
            </div>
            <div className='shrink-0'>
                <img src={CloseCircle} className='w-[24px] h-[24px] cursor-pointer' onClick={() => setIsSearchBarOpen(false)} />
            </div>
        </div>
    );
};

export default ChatSearchBar;

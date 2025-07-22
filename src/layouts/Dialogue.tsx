import React from "react";
import Close from "@/assets/Close.svg";

const Dialogue: React.FC<{ children: React.ReactNode, setIsOpen: (isOpen: boolean) => void, windowsize: number }> = ({ children, setIsOpen, windowsize }) => {
    return <>
        <div
            className="fixed bottom-0 xs:bottom-auto xs:top-[176px] right-0 z-50 xs:rounded-2 rounded-4 w-full bg-white rounded-b-[0px] rounded-t-[8px] xs:rounded-[8px] xs:py-6 pt-8 pb-6 xs:px-6 px-[14px] shadow-[4px_4px_32px_0px_rgba(0,0,0,0.08)]"
            style={
                window.innerWidth > 500
                    ? {
                        width: `${windowsize}px`,
                        right: `calc(50% - ${windowsize / 2}px)`,
                    }
                    : undefined
            }
        >

            <img src={Close} alt="close" className="w-3 h-3 cursor-pointer absolute top-5 right-5" onClick={() => setIsOpen(false)} />
            {children}
        </div>
        <div className="fixed w-[100vw] h-[100vh] top-0 left-0  bg-black  bg-opacity-70 z-40" onClick={() => setIsOpen(false)}></div>
    </>
}

export default Dialogue;
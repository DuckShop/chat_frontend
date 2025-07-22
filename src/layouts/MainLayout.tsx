import React from "react";
import Vector from "@/assets/Vector.svg";
import Back from "@/assets/Group.svg";
import SearchInput from "../components/UI/Common/SearchInput";
import { NavigationItems } from "../data/navigation";
import NavigationItem from "../components/UI/Navigation/NavigationItem";
import { useState } from "react";
import Logo from "@/assets/logo_only.png";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [hide, setHide] = useState(false);
    const hideSidebar = () => {
        setHide(!hide);
    }
    return (
        <div className="w-full sm:h-[100vh] h-auto flex flex-col sm:flex-row">
            <div className="w-full sm:hidden flex justify-end items-center h-[40px] px-4">
            </div>
            <div className={`transition-all duration-300 ease-in-out
                    ${hide ? "w-[100px] p-4 border-none" : "w-[300px] p-4 border-r border-[#EbEBEB]"}
                    hidden sm:block overflow-hidden`}>
                <div className="flex items-center justify-between py-[9px] mb-4">
                    {hide ? <img src={Logo} className="w-[16px] h-[16px]" /> : <img src={Vector} className="w-[76px] h-[16px]" />}
                    <img src={Back} onClick={hideSidebar} className={`w-[16px] h-[16px] cursor-pointer transition-transform duration-300 ${hide ? "rotate-180" : ""
                        }`} />
                </div>
                {!hide && <SearchInput placeholder="Serach" />}
                <div className="flex flex-col gap-1 my-[6px]">
                    {
                        NavigationItems.map((item, key) => (
                            <NavigationItem key={key} item={item} hide={hide} />
                        ))
                    }
                </div>
            </div>
            <div className={`transition-all duration-300 ease-in-out h-full
                    ${hide ? "w-[calc(100%-100px)]" : "sm:w-[calc(100%-300px)] w-full"}`}>
                {children}
            </div>
        </div>
    )
}

export default MainLayout;
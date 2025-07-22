import Dashboard from "@/assets/dashboard.svg";
import Profile from "@/assets/freelancer.svg";
import FindJob from "@/assets/Find-Job.svg";
import Messages from "@/assets/EnvelopeSimple.svg";
import Booking from "@/assets/Calendar.svg";
import Master from "@/assets/CrownSimple.svg";
import MyPortfolio from "@/assets/Briefcase.svg";
import MyProjects from "@/assets/FolderNotch.svg";
import Finances from "@/assets/wallet-line.svg";
import Notifications from "@/assets/Notification.svg";
import Settings from "@/assets/settings.svg";
import Community from "@/assets/UsersThree.svg";
import HelpCenter from "@/assets/SealQuestion.svg";
import Logout from "@/assets/SignOut.svg";
import type { NavigationItemType } from "../type/Type";

export const NavigationItems: NavigationItemType[] = [
    {
        img: Dashboard,
        name: "Dashboard",
        notifcation: 0,
        path: "/dashboard",	
    },
    {
        img: Profile,
        name: "Profile",
        notifcation: 0,
        path: "/profile",
    },
    {
        img: FindJob,
        name: "Find Job",
        notifcation: 0,
        path: "/find-job",
    },
    {
        img: Messages,
        name: "Messages",
        notifcation: 4,
        path: "/messages",
    },
    {
        img: Booking,
        name: "Booking",    
        notifcation: 0,
        path: "/booking",
    },
    {
        img: Master,
        name: "Master",
        notifcation: 0,
        path: "/master",
    },
    {
        img: MyPortfolio,
        name: "My Portfolio",
        notifcation: 0,
        path: "/my-portfolio",
    },
    {
        img: MyProjects,
        name: "My Projects",
        notifcation: 0,
        path: "/my-projects",
    },
    {
        img: Finances,
        name: "Finances",
        notifcation: 0,
        path: "/finances",
    },
    {
        img: Notifications,
        name: "Notifications",
        notifcation: 2,
        path: "/notifications",
    },
    {
        img: Settings,
        name: "Settings",
        notifcation: 0,
        path: "/settings",
    },
    {
        img: Community,
        name: "Community",
        notifcation: 0,
    },
    {
        img: HelpCenter,
        name: "Help Center",
        notifcation: 0,
        path: "/help-center",
    },
    {
        img: Logout,
        name: "Logout",
        notifcation: 0,
        path: "/logout",
    }
]
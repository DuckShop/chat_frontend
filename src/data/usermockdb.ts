import type { UserType } from "../type/Type";
import avatar1 from "@/assets/avatar chat (1).png";
import avatar2 from "@/assets/avatar chat (2).png";
import avatar3 from "@/assets/avatar chat (3).png";
import avatar4 from "@/assets/avatar chat (4).png";
import avatar5 from "@/assets/avatar chat (5).png";
import avatar6 from "@/assets/avatar chat (6).png";
import avatar7 from "@/assets/avatar chat (7).png";
import avatar8 from "@/assets/avatar chat (8).png";
import avatar9 from "@/assets/avatar chat (9).png";

export const userData: UserType[] = [
    {
        id: "user_1",
        name: "Jhon Doe",
        verified: true,
        online: true,
        headline: "Software Engineer&Freelancer",
        avatar: avatar1
    },
    {
        id: "user_2",
        name: "Omar Korsgaard",
        verified: true,
        online: false,
        headline: "Social Media Manager",
        avatar: avatar2
    },
    {
        id: "user_3",
        name: "David Green",
        verified: true,
        online: true,
        headline: "CEO of Strategy Partnerships",
        avatar: avatar3
    },
    {
        id: "user_4",
        name: "Carla Lubin",
        verified: true,
        online: false,
        headline: "CTO of Ventera",
        avatar: avatar4
    },
    {
        id: "user_5",
        name: "Leo Korsgaard",
        verified: true,
        online: false,
        headline: "Team Lead of Product",
        avatar: avatar5
    },
    {
        id: "user_6",
        name: "Randy Baptista",
        verified: true,
        online: false,
        headline: "Social Media Manager",
        avatar: avatar6
    },
    {
        id: "user_7",
        name: "Gretchen Herwitz",
        verified: true,
        online: false,
        headline: "Cofounder & CEO of Enquire",
        avatar: avatar7
    },
    {
        id: "user_8",
        name: "Ahmad Lubin",
        verified: false,
        online: true,
        headline: "Technical Recruiter",
        avatar: avatar8
    },
    {
        id: "user_9",
        name: "Phillip Phillips",
        verified: true,
        online: false,
        headline: "Product Manager&Product Owner",
        avatar: avatar9
    }
]
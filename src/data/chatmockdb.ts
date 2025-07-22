import type { ChatType } from "../type/Type";

import first from "@/assets/img/1.png";
import second from "@/assets/img/2.png";
import third from "@/assets/img/3.jpg";
import fourth from "@/assets/img/4.jpg";
import fifth from "@/assets/img/5.jpg";

export const chatData: ChatType[] = [
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T12:00:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        file:[{
            filename: "1",
            filetype: "zip",
            progress: 100,
            filesize: 1,
            url: ""
        }],
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T12:03:00'),
        content: "https://vercel.com/ Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T12:06:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: false
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T12:09:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T12:12:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T12:15:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T12:18:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T12:21:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T12:24:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T12:27:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T12:30:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T12:33:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T12:36:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T12:39:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T12:42:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T12:45:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T12:48:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T12:51:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T12:54:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T12:57:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T13:00:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T13:03:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T13:06:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T13:09:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T13:12:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T13:15:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T13:18:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T13:21:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T13:24:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T13:27:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T13:30:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T13:33:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T13:36:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T13:39:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T13:42:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T13:45:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T13:48:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T13:51:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T13:54:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T13:57:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T14:00:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T14:03:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T14:06:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T14:09:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T14:12:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T14:15:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T14:18:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T14:21:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T14:24:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T14:27:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T14:30:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T14:33:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T14:36:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T14:39:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T14:42:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T14:45:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T14:48:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T14:51:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T14:54:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T14:57:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T15:00:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T15:03:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T15:06:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T15:09:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T15:12:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T15:15:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T15:18:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T15:21:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T15:24:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T15:27:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T15:30:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T15:33:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T15:36:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T15:39:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T15:42:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T15:45:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T15:48:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T15:51:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T15:54:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T15:57:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T16:00:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T16:03:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T16:06:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T16:09:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T16:12:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T16:15:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T16:18:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T16:21:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T16:24:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T16:27:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T16:30:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T16:33:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T16:36:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T16:39:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T16:42:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T16:45:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T16:48:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T16:51:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T16:54:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T16:57:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T17:00:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T17:03:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T17:06:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T17:09:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T17:12:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: false
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T17:15:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T17:18:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T17:21:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T17:24:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T17:27:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T17:30:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T17:33:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T17:36:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T17:39:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T17:42:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T17:45:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T17:48:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T17:51:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T17:54:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T17:57:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T18:00:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T18:03:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T18:06:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T18:09:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T18:12:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T18:15:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T18:18:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T18:21:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T18:24:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T18:27:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T18:30:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T18:33:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T18:36:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T18:39:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T18:42:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T18:45:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T18:48:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T18:51:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T18:54:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T18:57:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T19:00:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T19:03:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T19:06:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T19:09:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T19:12:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T19:15:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T19:18:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T19:21:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T19:24:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T19:27:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T19:30:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T19:33:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T19:36:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T19:39:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T19:42:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T19:45:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T19:48:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T19:51:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T19:54:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T19:57:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T20:00:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T20:03:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T20:06:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T20:09:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T20:12:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T20:15:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T20:18:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T20:21:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T20:24:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T20:27:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T20:30:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T20:33:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T20:36:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T20:39:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T20:42:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T20:45:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T20:48:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T20:51:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T20:54:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T20:57:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T21:00:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T21:03:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T21:06:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T21:09:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T21:12:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T21:15:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T21:18:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-26T21:21:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T21:24:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T21:27:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T21:30:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T21:33:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T21:36:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T21:39:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T21:42:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T21:45:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T21:48:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T21:51:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T21:54:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T21:57:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T22:00:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T22:03:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T22:06:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T22:09:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T22:12:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T22:15:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T22:18:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T22:21:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T22:24:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T22:27:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T22:30:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T22:33:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T22:36:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T22:39:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T22:42:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T22:45:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T22:48:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T22:51:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-26T22:54:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T22:57:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-26T23:00:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-26T23:03:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-26T23:06:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T23:09:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-26T23:12:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-26T23:15:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-26T23:18:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T23:21:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T23:24:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T23:27:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T23:30:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-26T23:33:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-26T23:36:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-26T23:39:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-26T23:42:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T23:45:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-26T23:48:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-26T23:51:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-26T23:54:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-26T23:57:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-27T00:00:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-27T00:03:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-27T00:06:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-27T00:09:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-27T00:12:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-27T00:15:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-27T00:18:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-27T00:21:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-27T00:24:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-27T00:27:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-27T00:30:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-27T00:33:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-27T00:36:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-27T00:39:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-27T00:42:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-27T00:45:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-27T00:48:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-27T00:51:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_2",
        responder: "user_1",
        time: new Date('2025-06-27T00:54:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-27T00:57:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-27T01:00:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-27T01:03:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-27T01:06:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-27T01:09:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_4",
        responder: "user_1",
        time: new Date('2025-06-27T01:12:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-27T01:15:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-27T01:18:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-27T01:21:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-27T01:24:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_8",
        time: new Date('2025-06-27T01:27:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-27T01:30:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-27T01:33:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-27T01:36:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-27T01:39:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-27T01:42:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-27T01:45:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-27T01:48:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-27T01:51:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_9",
        responder: "user_1",
        time: new Date('2025-06-27T01:54:00'),
        content: "Thanks for the update! That really helped clarify the situation on my end.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-27T01:57:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-27T02:00:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_2",
        time: new Date('2025-06-27T02:03:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_6",
        time: new Date('2025-06-27T02:06:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-27T02:09:00'),
        content: "Hey, I just wanted to check what time the meeting is scheduled for tomorrow?",
        read: false
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-27T02:12:00'),
        content: "Can we talk now? I have a few updates to share regarding the project.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_5",
        time: new Date('2025-06-27T02:15:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_3",
        time: new Date('2025-06-27T02:18:00'),
        content: "Hey, how's everything going with the new deployment? Need any help?",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-27T02:21:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: false
    },
    {
        receiver: "user_8",
        responder: "user_1",
        time: new Date('2025-06-27T02:24:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_9",
        time: new Date('2025-06-27T02:27:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-27T02:30:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_6",
        responder: "user_1",
        time: new Date('2025-06-27T02:33:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_5",
        responder: "user_1",
        time: new Date('2025-06-27T02:36:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_3",
        responder: "user_1",
        time: new Date('2025-06-27T02:39:00'),
        content: "Let\u2019s catch up later this evening. I\u2019ve got some news you might find interesting.",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-27T02:42:00'),
        content: "Did you get the file I sent earlier? Let me know if it opened properly.",
        read: true
    },
    {
        receiver: "user_1",
        responder: "user_7",
        time: new Date('2025-06-27T02:45:00'),
        content: "Talk soon! I\u2019ll be free after 5 PM if you want to continue the conversation.",
        read: true
    },
    {
        receiver: "user_7",
        responder: "user_1",
        time: new Date('2025-06-27T02:48:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_4",
        time: new Date('2025-06-27T02:51:00'),
        content: "No worries at all, take your time. I understand you\u2019ve been busy lately.",
        read: false
    },
    {
        receiver: "user_9",
        responder: "user_1",
        imgs:[second, third, fourth, fifth],
        time: new Date('2025-06-27T02:54:00'),
        content: "I\u2019ll get back to you soon with more details after checking with the team.",
        read: false
    },
    {
        receiver: "user_1",
        responder: "user_3",
        imgs:[first],
        time: new Date('2025-06-27T02:57:00'),
        content: "How was your weekend? Hope you got some time to relax and recharge.",
        read: false
    },
];
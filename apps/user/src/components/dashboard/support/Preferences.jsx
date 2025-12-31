import {
    TypographyH2BlueColor,
    TypographyMuted,
    TypographyP,
    TypographyPBlueColor,
    TypographySmall
} from "@/custom/Typography";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineLocalPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BiMessageDetail } from "react-icons/bi";
import { Switch } from "@/components/ui/switch"
import { useContextFile } from '@/context/contextFile';


export default function Preferences() {
    const { user, setUser } = useContextFile();

    const notificationsPannel = [
        {
            name: "SMS",
            icon: <BiMessageDetail size={20} />,
            notificationActive: user?.SMSNotification
        },
        {
            name: "WhatApps",
            icon: <FaWhatsapp size={20} />,
            notificationActive: user?.whatAppNotification
        },
        {
            name: "Call",
            icon: <MdOutlineLocalPhone size={20} />,
            notificationActive: user?.CallNotification
        },
        {
            name: "Email",
            icon: <AiOutlineMail size={20} />,
            notificationActive: user?.EmailNotification
        },
    ]

    return (
        <div className="bg-white p-6 sm:rounded-md shadow-sm">
            <TypographyH2BlueColor className="mt-0 mb-2 tracking-wide">
                Communication Preferences
            </TypographyH2BlueColor>
            <TypographyMuted>
                Please select communication preferences for
            </TypographyMuted>

            <div className="bg-gray-50 border mt-6 rounded-md p-4 max-w-sm ">
                <TypographyMuted>
                    Mobile
                </TypographyMuted>
                <div className="flex justify-between items-center mt-2">
                    <TypographyP className="tracking-wider text-sm text-blue-950 font-medium">
                        +91-{user?.phone}
                    </TypographyP>
                    <IoIosStarOutline size={22} className="text-green-600" />
                </div>
            </div>

            <TypographyMuted className="mt-4">
                Your email address is <span className="font-semibold text-black/80">{user?.email}</span>
            </TypographyMuted>
            <TypographyPBlueColor>
                Manage notifications for important updates on Credit Report, Loans and Cards offers, payment reminders and more
            </TypographyPBlueColor>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 mb-4">
                {
                    notificationsPannel?.map((option, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-primary">{option?.icon}</span>
                                <TypographySmall className="font-medium text-blue-950">
                                    {option?.name}
                                </TypographySmall>
                            </div>
                            <Switch id={option?.name} checked={option?.notificationActive} onCheckedChange={option?.notificationActive} />
                        </div>
                    ))
                }
            </div>
            <TypographyMuted>
                <span className="text-blue-800 font-medium">Note: </span> Communication preferences usually get updated within 48 hours.
            </TypographyMuted>
        </div>
    )
}

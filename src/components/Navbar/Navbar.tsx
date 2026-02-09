import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
    IconHome,
    IconMessage,
    IconUser,
} from "@tabler/icons-react";
// import { navItems } from '@/content/nav-data'

export const Navbar = () => {
    const navItems = [
        {
            name: "About",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Projects",
            link: "#projects",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Experiences",
            link: "#experiences",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
                {
            name: "Contact",
            link: "#contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div>
            <FloatingNav navItems={navItems} />
        </div>
    )
}

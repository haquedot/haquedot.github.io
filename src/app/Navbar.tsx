import React from "react";
import { FloatingDock } from "./components/ui/floating-dock";
import {
    IconUser,
    IconMessage,
    IconHome,
    IconSettings,
    IconTerminal2,
    IconSocial,
} from "@tabler/icons-react";

import haquedot from "/public/images/haquedot.png";
import Image from "next/image";

export function Navbar() {
    const links = [

        {
            title: "Projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 text-neutral-300" />
            ),
            href: "/project",
        },
        {
            title: "Skills",
            icon: (
                <IconSettings className="h-full w-full text-neutral-500 text-neutral-300" />
            ),
            href: "/skill",
        },
        {
            title: "Haque",
            icon: (
                <Image
                    src={haquedot}
                    alt="haque."
                    className="text-neutral-500 text-neutral-300"
                />

            ),
            href: "/",
            noBackground: true, // Add a flag for no background
        },

        {
            title: "About",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 text-neutral-300" />
            ),
            href: "/about",
        },
        {
            title: "Contact",
            icon: (
                <IconMessage className="h-full w-full text-neutral-500 text-neutral-300" />
            ),
            href: "/contact",
        },
    ];
    return (
        <div className="fixed mx-auto w-min z-50 bottom-5 right-5 md:right-0 md:left-0">
            <FloatingDock
                mobileClassName="fixed bottom-5 right-5" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}

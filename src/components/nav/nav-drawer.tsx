"use client";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import { navLinks } from "@/configs/nav.config"
import Link from "next/link"
import { useState } from "react";
import { SITE_INFO } from "@/configs/site";

export function NavDrawer() {
    const [open, setOpen] = useState(false);
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Menu />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{SITE_INFO.site_name}</DrawerTitle>
                    <DrawerDescription>Navigate to the section</DrawerDescription>
                </DrawerHeader>
                <div className="flex items-center justify-center flex-col space-y-2 pb-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={`nav-link-${link.name}`} 
                            href={link.href} 
                            onClick={() => setOpen(false)}
                            {...(link.href === "/resume.pdf" ? { target: "_blank", download: true } : {})}
                            {...(link.href.startsWith("https://") && link.href !== "/resume.pdf" ? { target: "_blank" } : {})}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </DrawerContent>
        </Drawer>
    )
}

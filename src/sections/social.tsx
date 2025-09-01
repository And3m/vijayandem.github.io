import { appConfig } from "@/configs/config";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export function SocialSecion() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full py-6 px-6 mt-6 mb-6">
                <SocialPanel />
            </div>
        </div>
    )
}

function SocialPanel() {
    return appConfig.profile.socials.map((item, index) => (
        <Link
            key={`social-link-${index}`}
            href={item.link}
            target="_blank"
            className="flex items-center p-2 rounded-lg border justify-between gap-2 bg-secondary/20 hover:bg-secondary/40 transition-all"
        >
            <div className="flex gap-4 items-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-secondary/50 rounded-md text-primary/60 border-l-2 border-t-2 border-b border-r border-primary/10 shadow-md shadow-secondary/50 flex items-center justify-center">
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </div>
                <div className="text-base sm:text-lg text-primary font-semibold">{item.name}</div>
            </div>
            <MoveUpRight className="h-4 w-4 mr-4" />
        </Link>
    ));
}
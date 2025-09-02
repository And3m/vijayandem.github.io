import { ABOUT_ME } from "@/configs/site";
import { ProfileSection } from "./profile";
import ReactMarkdown from "react-markdown";

export function AboutSection() {
    return (
        <div className="flex flex-col items-center py-8">
            <div className="flex flex-col max-w-4xl w-full">
                <ProfileSection className="mb-8" />
                <div className="prose prose-lg max-w-none px-6 md:px-0 prose-headings:text-foreground prose-strong:text-foreground prose-p:text-foreground prose-ul:text-foreground prose-li:text-foreground dark:prose-headings:text-foreground dark:prose-strong:text-foreground dark:prose-p:text-foreground dark:prose-ul:text-foreground dark:prose-li:text-foreground">
                    <ReactMarkdown>{ABOUT_ME}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
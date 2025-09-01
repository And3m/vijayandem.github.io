import { ABOUT_ME } from "@/configs/site";
import { ProfileSection } from "./profile";

export function AboutSection() {
    return (
        <div className="flex flex-col items-center py-8">
            <div className="flex flex-col max-w-4xl w-full">
                <ProfileSection className="mb-8" />
                <div className="prose prose-lg max-w-none px-6 md:px-0">
                    <p className="whitespace-pre-line text-secondary-foreground/80 leading-relaxed">
                        {ABOUT_ME}
                    </p>
                </div>
            </div>
        </div>
    )
}
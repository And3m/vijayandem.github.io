import { FlipSentences } from "@/components/common/flip-sentences";
import { VerifiedIcon } from "@/components/common/verified-icon";
import { ProfileHeader } from "@/components/hero/profile-header";
import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { appConfig } from "@/configs/config";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <ProfileHeader />
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full px-6 md:px-0 mt-10">
                {/* profile pic */}
                <div className="w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full bg-gray-600 border-4 border-primary/10">
                    <Image
                        height={200}
                        width={200}
                        src={appConfig.profile.image}
                        className="h-full w-full object-cover"
                        alt="Profile Picture"
                    />
                </div>
                {/* profile info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <h1 className="font-bold text-3xl md:text-5xl">{appConfig.profile.name}</h1>
                        <SimpleTooltip content="Verified">
                            <VerifiedIcon className="text-blue-500 h-6 w-6" />
                        </SimpleTooltip>
                    </div>
                    <div className="mt-4">
                        <FlipSentences sentences={appConfig.profile.sentences} />
                    </div>
                    <div className="mt-6">
                        <Link href={`mailto:${appConfig.profile.email}`}>
                            <Button
                                variant={"default"}
                                className="bg-blue-500/80 hover:bg-blue-500/90 transition-colors text-primary rounded-xl cursor-pointer px-6 py-3 text-lg"
                            >
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
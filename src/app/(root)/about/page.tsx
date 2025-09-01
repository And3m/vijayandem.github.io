import { AboutSection } from "@/sections/about";
import { SocialSecion } from "@/sections/social";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="w-full flex justify-center pt-20 pb-8">
                <div className="max-w-4xl w-full px-6 md:px-0">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Learn more about my journey as a Business Analyst and Data Visualization Specialist, 
                            my expertise, and what drives my passion for transforming data into insights.
                        </p>
                    </div>
                </div>
            </div>
            
            <AboutSection />
            <SocialSecion />
        </div>
    )
}
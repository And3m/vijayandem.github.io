import { Experience } from "@/components/experience";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="w-full flex justify-center pt-20 pb-8">
                <div className="max-w-4xl w-full px-6 md:px-0">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Over 13+ years of experience in business analysis, data visualization, and AI-augmented analytics. 
                            Here&apos;s my professional journey across various industries and roles.
                        </p>
                    </div>
                </div>
            </div>
            
            <Experience />
        </div>
    )
}
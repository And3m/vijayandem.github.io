import { Projects } from "@/sections/projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <div className="w-full flex justify-center pt-20 pb-8">
                <div className="max-w-4xl w-full px-6 md:px-0">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore my portfolio of data analytics, business intelligence, and AI/ML projects. 
                            Each project showcases my ability to transform complex data into actionable insights.
                        </p>
                    </div>
                </div>
            </div>
            
            <Projects />
        </div>
    )
}
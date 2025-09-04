import { ProjectTabs } from "@/components/projects/project-tabs";
import { ALL_PROJECTS } from "@/configs/projects";
import { ProjectErrorBoundary } from "@/components/projects/project-error-boundary";
import { ProjectsSkeleton } from "@/components/projects/projects-skeleton";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Vijay K Andem - Data Analytics & AI/ML Portfolio",
    description: "Explore my comprehensive portfolio of data analytics, business intelligence, and AI/ML projects. Featuring interactive dashboards, machine learning applications, and data visualization solutions.",
    keywords: ["data analytics", "business intelligence", "AI/ML projects", "dashboard", "data visualization", "Power BI", "Tableau", "Python", "machine learning"],
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/98 to-secondary/20">
            {/* Page Header */}
            <div className="w-full flex justify-center pt-16 sm:pt-20 pb-8 sm:pb-12">
                <div className="max-w-6xl w-full px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse"></span>
                            Portfolio Showcase
                        </div>
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent leading-tight">
                            My Projects
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                            Dive deep into my comprehensive portfolio of data analytics, business intelligence, and AI/ML projects. 
                            Each project demonstrates my expertise in transforming complex data into compelling visual stories and intelligent solutions.
                        </p>
                        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground/70 px-2">
                            <div className="flex items-center gap-1.5 sm:gap-2 bg-background/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border backdrop-blur-sm">
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full"></span>
                                <span className="font-medium">{ALL_PROJECTS.filter(p => p.type === 'ai').length} AI Projects</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 bg-background/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border backdrop-blur-sm">
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full"></span>
                                <span className="font-medium">{ALL_PROJECTS.filter(p => p.type === 'app').length} Applications</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 bg-background/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border backdrop-blur-sm">
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full"></span>
                                <span className="font-medium">{ALL_PROJECTS.filter(p => p.type === 'web').length} Web Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Projects Grid */}
            <div className="w-full flex justify-center py-4 sm:py-8 pb-12 sm:pb-16">
                <div className="max-w-6xl w-full px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent leading-tight">
                            Browse by Category
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                            Filter projects by technology type to find exactly what interests you most. Each project showcases innovative solutions and cutting-edge implementations.
                        </p>
                    </div>
                    <ProjectErrorBoundary>
                        <Suspense fallback={<ProjectsSkeleton />}>
                            <ProjectTabs projects={ALL_PROJECTS} />
                        </Suspense>
                    </ProjectErrorBoundary>
                </div>
            </div>
        </div>
    )
}
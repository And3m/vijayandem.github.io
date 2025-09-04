"use client";

import { Suspense } from "react";
import { ProjectsCarousel } from "@/components/projects/projects-carousel";
import { ProjectErrorBoundary } from "@/components/projects/project-error-boundary";
import { ALL_PROJECTS } from "@/configs/projects";

export function Projects() {
    const projects = ALL_PROJECTS; // Show all projects
    return (
        <section id="projects" className="flex w-full justify-center py-16 md:py-20 bg-gradient-to-b from-background via-background/95 to-secondary/30">
            <div className="flex flex-col justify-center gap-6 md:gap-10 max-w-6xl w-full px-6 md:px-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        Featured Work
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                    <p className='max-w-3xl mx-auto text-lg text-muted-foreground/80 leading-relaxed'>
                        Explore my portfolio of data analytics, business intelligence, and AI/ML applications. 
                        Each project showcases my ability to transform complex datasets into compelling visual stories and intelligent solutions.
                    </p>
                </div>
                <ProjectErrorBoundary>
                    <Suspense fallback={<div className="h-64 bg-muted rounded animate-pulse"></div>}>
                        <ProjectsCarousel
                            projects={projects}
                            autoplay={false}
                            className="w-full"
                        />
                    </Suspense>
                </ProjectErrorBoundary>
            </div>
        </section>
    );
}
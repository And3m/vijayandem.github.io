"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ProjectCard } from "./project-card";
import { IProjects } from "@/types/projects";
import { Bot, Smartphone, PanelTop, BrainCircuit, Wrench } from "lucide-react";

interface ProjectTabsProps {
    projects: IProjects[];
    className?: string;
}

const projectTypes = [
    { key: "all", label: "All Projects", icon: null },
    { key: "ai", label: "AI Projects", icon: Bot },
    { key: "app", label: "Applications", icon: Smartphone },
    { key: "web", label: "Web Projects", icon: PanelTop },
    { key: "ml", label: "ML Projects", icon: BrainCircuit },
    { key: "tool", label: "Tools", icon: Wrench },
];

export function ProjectTabs({ projects, className }: ProjectTabsProps) {
    const [activeTab, setActiveTab] = useState("all");
    
    const filteredProjects = activeTab === "all" 
        ? projects 
        : projects.filter(project => project.type === activeTab);

    const getTypeCount = (type: string) => {
        if (type === "all") return projects.length;
        return projects.filter(p => p.type === type).length;
    };

    return (
        <div className={cn("w-full", className)}>
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
                {projectTypes.map((type) => {
                    const count = getTypeCount(type.key);
                    if (count === 0) return null;
                    
                    return (
                        <Button
                            key={type.key}
                            onClick={() => setActiveTab(type.key)}
                            variant={activeTab === type.key ? "default" : "outline"}
                            size="sm"
                            className={cn(
                                "flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full transition-all duration-300 text-xs xs:text-sm border-2",
                                activeTab === type.key
                                    ? "bg-primary text-primary-foreground shadow-lg scale-105 border-primary"
                                    : "hover:bg-primary/10 hover:text-primary hover:border-primary/40 border-border"
                            )}
                        >
                            {type.icon && <type.icon size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />}
                            <span className="font-medium text-xs xs:text-sm whitespace-nowrap">{type.label}</span>
                            <span className="text-[10px] xs:text-xs bg-background/30 px-1 xs:px-1.5 sm:px-2 py-0.5 rounded-full min-w-[1rem] xs:min-w-[1.25rem] text-center flex-shrink-0">
                                {count}
                            </span>
                        </Button>
                    );
                })}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                {filteredProjects.map((project, index) => (
                    <div key={`${project.title}-${index}`} className="h-full w-full">
                        <ProjectCard 
                            project={project} 
                            isActive={false}
                        />
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12 sm:py-16">
                    <div className="text-muted-foreground text-base sm:text-lg">
                        No projects found in this category.
                    </div>
                </div>
            )}
        </div>
    );
}
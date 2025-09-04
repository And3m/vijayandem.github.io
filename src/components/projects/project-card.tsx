import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IProjects } from "@/types/projects";
import { Bot, BrainCircuit, PanelTop, Smartphone, Wrench } from "lucide-react";
import { getDumnyImageUrl } from "@/lib/dumny-img";

interface ProjectCardProps {
    project: IProjects;
    isActive?: boolean;
}

const getTypeBadgeVariant = (type: IProjects['type']) => {
    const variants = {
        web: "default",
        app: "secondary",
        ai: "destructive",
        ml: "outline",
        tool: "secondary"
    } as const;
    return variants[type] || "default";
};

const getTypeIcon = (type: IProjects['type']) => {
    const icons = {
        web: <PanelTop />,
        app: <Smartphone />,
        ai: <Bot />,
        ml: <BrainCircuit />,
        tool: <Wrench />,
    };
    return icons[type];
};

const getTypeDisplayName = (type: IProjects['type']) => {
    const displayNames = {
        web: "Web App",
        app: "Mobile App",
        ai: "AI Project",
        ml: "ML Project",
        tool: "Tool"
    };
    return displayNames[type];
};

export function ProjectCard({ project, isActive = false }: ProjectCardProps) {
    return (
        <Card className={`w-full h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group
            bg-secondary/50 shadow-lg shadow-secondary/50 rounded-lg sm:rounded-xl
            ${isActive ? 'border-2 border-primary/60 sm:scale-[1.02] shadow-xl shadow-primary/25' : 'border border-primary/20 hover:border-primary/40'}`}>
            
            {/* Image Section - Clickable if repoUrl exists */}
            {project.repoUrl ? (
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-lg sm:rounded-t-xl bg-gradient-to-br from-muted via-muted to-muted/80 cursor-pointer">
                        <Image
                            src={project.image || getDumnyImageUrl(project.title, "1270x760")}
                            alt={project.title}
                            fill
                            className="object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            {...(isActive ? { priority: true } : { loading: "lazy" })}
                            quality={85}
                            sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 25vw"
                        />
                        {/* Overlay gradient for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* GitHub link indicator */}
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-lg sm:rounded-t-xl bg-gradient-to-br from-muted via-muted to-muted/80">
                    <Image
                        src={project.image || getDumnyImageUrl(project.title, "1270x760")}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                        {...(isActive ? { priority: true } : { loading: "lazy" })}
                        quality={85}
                        sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 25vw"
                    />
                    {/* Overlay gradient for better visual appeal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}
            
            <CardHeader className="pb-2 sm:pb-3 pt-3 sm:pt-4 px-3 sm:px-4 md:px-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                        {getTypeIcon(project.type)}
                    </div>
                    <Badge variant={getTypeBadgeVariant(project.type)} className="text-[10px] xs:text-xs font-semibold px-2 xs:px-3 py-0.5 xs:py-1 rounded-full shadow-sm shrink-0">
                        {getTypeDisplayName(project.type)}
                    </Badge>
                </div>
                {project.repoUrl ? (
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <CardTitle className="text-base xs:text-lg sm:text-xl font-bold line-clamp-2 hover:text-primary cursor-pointer transition-colors duration-300 leading-tight">
                            {project.title}
                        </CardTitle>
                    </Link>
                ) : (
                    <CardTitle className="text-base xs:text-lg sm:text-xl font-bold line-clamp-2 leading-tight">{project.title}</CardTitle>
                )}
                <CardDescription className="line-clamp-2 text-xs xs:text-sm text-muted-foreground/80 mt-1.5 sm:mt-2 leading-relaxed">
                    {project.shortDescription}
                </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0 pb-4 sm:pb-6 px-3 sm:px-4 md:px-6">
                <p className="text-xs text-muted-foreground/70 line-clamp-3 leading-relaxed mb-3 sm:mb-4">
                    {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-1 xs:gap-1.5 mt-3 sm:mt-4">
                    {project.stack.slice(0, 4).map((item, index) => (
                        <Badge key={`stack-${item}-${index}`} variant="outline" className="text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-md bg-background/50 hover:bg-primary/10 transition-colors border-primary/20 text-foreground/80">
                            {item}
                        </Badge>
                    ))}
                    {project.stack.length > 4 && (
                        <Badge variant="outline" className="text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-md bg-background/50 border-primary/20 text-muted-foreground">
                            +{project.stack.length - 4} more
                        </Badge>
                    )}
                </div>
                
                {/* GitHub link at bottom */}
                {project.repoUrl && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] xs:text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                <svg className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span className="font-medium">View on GitHub</span>
                            </div>
                        </Link>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
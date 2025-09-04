"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { IProjects } from "@/types/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

interface ProjectsCarouselProps {
    projects: IProjects[];
    autoplay?: boolean;
    autoplayDelay?: number;
    className?: string;
}

export function ProjectsCarousel({
    projects,
    autoplay = false,
    autoplayDelay = 5000,
    className
}: ProjectsCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    useEffect(() => {
        if (!autoplay || !api) return;

        const interval = setInterval(() => {
            if (current === projects.length - 1) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, autoplayDelay);

        return () => clearInterval(interval);
    }, [api, current, projects.length, autoplay, autoplayDelay]);

    // Handle swipe/scroll on mobile - with click detection
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;
        const startTime = Date.now();

        const handleTouchEnd = (endEvent: TouchEvent) => {
            const endTouch = endEvent.changedTouches[0];
            const endX = endTouch.clientX;
            const endY = endTouch.clientY;
            const endTime = Date.now();
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            const timeDiff = endTime - startTime;
            const distance = Math.sqrt(diffX * diffX + diffY * diffY);
            
            // If it's a quick tap or small movement, don't interfere (let clicks work)
            if (timeDiff < 200 && distance < 10) {
                document.removeEventListener('touchend', handleTouchEnd);
                return;
            }

            // Only handle as swipe if there's significant horizontal movement
            if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 0 && current < projects.length - 1) {
                    // Swipe left - next
                    api?.scrollNext();
                } else if (diffX < 0 && current > 0) {
                    // Swipe right - previous
                    api?.scrollPrev();
                }
            }

            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <div className={className}>
            <div className="relative">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: false,
                        containScroll: "trimSnaps",
                    }}
                    className="w-full"
                >
                    <CarouselContent onTouchStart={handleTouchStart} className="-ml-2 md:-ml-4 touch-pan-y">
                        {projects.map((project, index) => (
                            <CarouselItem
                                key={`${project.title}-${index}`}
                                className="relative basis-[95%] xs:basis-[90%] sm:basis-[80%] md:basis-[65%] lg:basis-[55%] pl-2 md:pl-4"
                            >
                                <div className="p-1">
                                    <ProjectCard
                                        project={project}
                                        isActive={current === index}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4 md:-left-6 bg-background/80 backdrop-blur-sm hover:bg-background/90 border-primary/20" />
                    <CarouselNext className="-right-4 md:-right-6 bg-background/80 backdrop-blur-sm hover:bg-background/90 border-primary/20" />
                </Carousel>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125",
                                current === index 
                                    ? "bg-primary w-8 shadow-lg shadow-primary/50" 
                                    : "bg-muted hover:bg-muted-foreground/30 w-2"
                            )}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
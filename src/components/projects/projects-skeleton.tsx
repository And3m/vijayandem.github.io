export function ProjectsSkeleton() {
    return (
        <section className="flex w-full justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-background/95 to-secondary/30">
            <div className="flex flex-col justify-center gap-4 sm:gap-6 md:gap-10 max-w-6xl w-full px-4 sm:px-6 md:px-8">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-pulse">
                        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full"></span>
                        <div className="h-3 sm:h-4 w-16 sm:w-20 bg-primary/20 rounded"></div>
                    </div>
                    <div className="h-8 sm:h-10 md:h-12 w-48 sm:w-56 md:w-64 mx-auto bg-muted rounded-lg mb-3 sm:mb-4 animate-pulse"></div>
                    <div className="space-y-2 max-w-3xl mx-auto px-2 sm:px-0">
                        <div className="h-3 sm:h-4 bg-muted rounded animate-pulse"></div>
                        <div className="h-3 sm:h-4 bg-muted rounded animate-pulse w-4/5 mx-auto"></div>
                        <div className="h-3 sm:h-4 bg-muted rounded animate-pulse w-3/4 mx-auto"></div>
                    </div>
                </div>
                
                {/* Grid Skeleton for Projects */}
                <div className="w-full">
                    {/* Tab Navigation Skeleton */}
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full bg-muted animate-pulse">
                                <div className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 bg-muted-foreground/20 rounded"></div>
                                <div className="h-3 xs:h-4 w-12 xs:w-16 sm:w-20 bg-muted-foreground/20 rounded"></div>
                                <div className="w-4 xs:w-5 h-3 xs:h-4 bg-muted-foreground/20 rounded-full"></div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Projects Grid Skeleton */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-full bg-secondary/50 shadow-lg rounded-lg sm:rounded-xl overflow-hidden animate-pulse">
                                <div className="w-full aspect-[16/10] bg-muted"></div>
                                <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-muted rounded-md sm:rounded-lg"></div>
                                        <div className="h-5 sm:h-6 w-16 sm:w-20 bg-muted rounded-full"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-5 sm:h-6 bg-muted rounded w-3/4"></div>
                                        <div className="h-3 sm:h-4 bg-muted rounded"></div>
                                        <div className="h-3 sm:h-4 bg-muted rounded w-2/3"></div>
                                        <div className="h-3 sm:h-4 bg-muted rounded w-4/5"></div>
                                    </div>
                                    <div className="flex gap-1 xs:gap-1.5 flex-wrap">
                                        <div className="h-5 sm:h-6 w-12 sm:w-16 bg-muted rounded"></div>
                                        <div className="h-5 sm:h-6 w-14 sm:w-20 bg-muted rounded"></div>
                                        <div className="h-5 sm:h-6 w-10 sm:w-14 bg-muted rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
import { Suspense } from 'react';
import { AngledLinesPattern } from "@/components/common/separator";
import { HeroSection } from "@/sections/hero";
import { ProfileSection } from "@/sections/profile";
import { SocialSecion } from "@/sections/social";
import { Experience } from "@/components/experience";
import { TechSection } from "@/components/techs/Techs";

// Lazy load components that aren't critical for initial render
import { Projects } from "@/sections/projects";

// Loading skeletons for lazy components
function ProjectsSkeleton() {
  return (
    <div id="projects" className="flex w-full justify-center pt-14">
      <div className="flex flex-col justify-center gap-4 md:gap-8 max-w-4xl w-full px-6 md:px-0">
        <div className="mb-6">
          <div className="h-10 bg-muted rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-muted rounded w-2/3"></div>
        </div>
        <div className="h-64 bg-muted rounded"></div>
      </div>
    </div>
  );
}

function MediumPostsSkeleton() {
  return (
    <div id='blogs' className="relative w-full flex items-center justify-center mt-8 py-14">
      <div className="flex flex-col max-w-4xl w-full px-6 md:px-0">
        <div className="mb-6 flex justify-between items-center">
          <div className="h-10 bg-muted rounded w-1/3"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-48 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <SocialSecion />
      <Experience />
      <AngledLinesPattern spacing={5} className="h-10 border-primary border-t border-b" />
      <TechSection />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      {/* Removed the enhanced experience section to keep the landing page clean */}
    </>
  );
}
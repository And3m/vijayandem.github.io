import dynamic from 'next/dynamic';
import { HeroSection } from "@/sections/hero";
import { ProfileSection } from "@/sections/profile";
import { SocialSecion } from "@/sections/social";

// Lazy load heavy components with optimized loading
const Experience = dynamic(() => import("@/components/experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <ExperienceSkeleton />
});

const TechSection = dynamic(() => import("@/components/techs/Techs").then(mod => ({ default: mod.TechSection })), {
  loading: () => <TechSkeleton />
});

const Projects = dynamic(() => import("@/sections/projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <ProjectsSkeleton />
});

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

function ExperienceSkeleton() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="max-w-4xl w-full px-6 md:px-0">
        <div className="h-8 bg-muted rounded w-1/3 mb-6"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechSkeleton() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="max-w-4xl w-full px-6 md:px-0">
        <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
        <div className="h-64 bg-muted rounded"></div>
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
      <TechSection />
      <Projects />
    </>
  );
}
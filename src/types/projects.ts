export type IProjects = {
    type: "web" | "app" | "ai" | "ml" | "tool";
    title: string;
    shortDescription: string;
    longDescription: string;
    stack: string[];
    image?: string;
    repoUrl?: string;
    featured?: boolean;
    status?: "completed" | "in-progress" | "archived";
};
import { IProjects } from "@/sections/projects";

{/* 1270x760px images best */ }
export const ALL_PROJECTS: IProjects[] = [
    {
        type: "ai",
        title: "MCP Data Analysis Toolkit",
        shortDescription: "Model Context Protocol implementation for data analysis with AI agent integration",
        longDescription:
            "Model Context Protocol implementation for data analysis with AI Agent Integration and data processing capabilities. Features automated analytics through intelligent tool discovery and an extensible framework for custom data analysis workflows.",
        image: "/projects/mcp-data-analysis-toolkit.png",
        stack: ["Python", "MCP", "AI Agents", "Data Analysis", "Protocol Buffers", "LLMs"],
        repoUrl: "https://github.com/And3m/mcp-data-analysis-toolkit",
    },
    {
        type: "ai",
        title: "Interactive AI Chat Agent",
        shortDescription: "Interactive Chat Interface with 2048-token responses and real-time monitoring",
        longDescription:
            "Interactive Chat Interface with 2048-token responses, real-time monitoring and system analytics. Features advanced commands (/status, /metrics, /help) and is 100% local & private - no external APIs required.",
        image: "/projects/interactive-ai-chat-agent.png",
        stack: ["Python", "Chainlit", "Ollama", "Llama 3.2 3B", "psutil", "Real-time Analytics"],
        repoUrl: "https://github.com/And3m/interactive-ai-chat-agent",
    },
    {
        type: "ai",
        title: "LangChain Playbook",
        shortDescription: "Comprehensive Tutorials from basics to advanced LangChain applications",
        longDescription:
            "Comprehensive Tutorials from basics to advanced with hands-on learning and practical examples. Features real-world projects including chatbots, RAG systems, and agents with a structured learning path for all skill levels.",
        image: "/projects/langchain-playbook.png",
        stack: ["Python", "LangChain", "OpenAI", "Anthropic", "RAG", "Vector Databases"],
        repoUrl: "https://github.com/And3m/langchain-playbook",
    },
    {
        type: "app",
        title: "Coffee Shop Sales Dashboard",
        shortDescription: "Interactive Streamlit dashboard for real-time sales analytics",
        longDescription:
            "Interactive Streamlit dashboard for real-time sales analytics with KPIs, advanced analytics, and modern Plotly visualizations. Features include real-time monitoring, trend analysis, and engaging user experience with modern visualizations.",
        image: "/projects/coffee-shop-dashboard.png",
        stack: ["Streamlit", "Pandas", "Plotly", "Python"],
        repoUrl: "https://github.com/And3m/coffee-shop-sales-dashboard",
    },
    {
        type: "app",
        title: "HR Dashboard Analytics",
        shortDescription: "Comprehensive HR analytics dashboard in Tableau",
        longDescription:
            "Comprehensive HR analytics dashboard in Tableau with workforce insights and key HR trends. Features include comprehensive HR analytics with workforce insights, data pre-processing and visualization, key HR trends analysis and performance metrics, and in-depth employee insights and retention analytics.",
        image: "/projects/hr-dashboard.png",
        stack: ["Tableau", "Data Preprocessing", "HR Analytics"],
        repoUrl: "https://github.com/And3m/hr-dashboard-analytics",
    },
    {
        type: "app",
        title: "Restaurant Ratings Analysis",
        shortDescription: "Power BI dashboard analyzing restaurant ratings and consumer behavior",
        longDescription:
            "Power BI dashboard analyzing restaurant ratings, consumer behavior, and trends in Mexico. Features include 5-page interactive dashboard with comprehensive insights, geographic analysis of restaurant distribution, consumer behavior patterns and demographic correlations, and rating trends analysis across different categories.",
        image: "/projects/restaurant-ratings.png",
        stack: ["Power BI", "DAX", "Power Query", "Excel"],
        repoUrl: "https://github.com/And3m/restaurant-ratings-analysis",
    },
    {
        type: "app",
        title: "Superstore Sales Analysis",
        shortDescription: "Comprehensive EDA of sales data with customer segmentation",
        longDescription:
            "Comprehensive EDA of sales performance data with customer segmentation and sales trend forecasting. Features include comprehensive exploratory data analysis of sales performance data, customer segmentation analysis and profiling, performance metrics visualization and insights, and sales trend identification and forecasting.",
        image: "/projects/superstore-analysis.png",
        stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        repoUrl: "https://github.com/And3m/superstore-sales-analysis",
    },
];
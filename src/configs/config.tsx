import { Button } from "@/components/ui/button";
import { IAppConfig } from "@/types";
import { Code, Github, Globe, Lightbulb, MapPin, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { SITE_INFO } from "./site";

export const appConfig: IAppConfig = {
    profile: {
        name: 'Vijay K Andem',
        image: '/hero/profile.jpg',
        email: 'vijayandem@gmail.com',
        location: 'Bengaluru, India',
        sentences: [
            'Business Analyst',
            'Data Visualization Specialist',
            'Power BI & Tableau Expert',
            'Generative AI Enthusiast',
        ],
        panel: [
            {
                icon: Code,
                text: 'Business Analyst & Data Visualization Specialist',
            },
            {
                icon: Lightbulb,
                text: (
                    <>
                        Specializing in Power BI, Tableau & Streamlit
                    </>
                ),
            },
            {
                icon: MapPin,
                text: 'Bengaluru, India',
            },
            {
                icon: Globe,
                text: <Button variant={"link"} className="p-0 text-md">
                    <Link href={SITE_INFO.url}>{SITE_INFO.url.slice(8)}</Link>
                </Button>,
            },
        ],
        socials: [
            {
                name: 'Github',
                icon: Github,
                link: 'https://github.com/And3m',
                username: 'And3m'
            },
            {
                name: 'LinkedIn',
                icon: Globe,
                link: 'https://www.linkedin.com/in/vijay-andem-b2092223/',
                username: 'vijay-andem'
            },
            {
                name: 'X',
                icon: TwitterIcon,
                link: 'https://twitter.com/vijayandem',
                username: 'vijayandem'
            },
            {
                name: 'Medium',
                icon: Globe,
                link: 'https://medium.com/@vijayandem',
                username: 'vijayandem'
            },
        ]
    },
    experience: [
        {
            id: "0",
            companyName: "Strategic Career Transition",
            companyLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'/%3E%3C/svg%3E",
            isCurrentEmployer: false,
            positions: [
                {
                    id: "0-1",
                    title: "AI-Augmented Analytics Specialist & Entrepreneur",
                    employmentPeriod: "Jan 2024 - May 2025",
                    employmentType: "Independent Exploration",
                    description: `- Conducted extensive research into AI-driven analytics trends, including LLM integration in business intelligence.
- Designed and prototyped intelligent data products using LangChain, PandasAI, Streamlit, ChatGPT plugins, and OpenAI APIs.
- Developed proof-of-concept solutions for RAG-based architectures and natural language data interfaces.
- Contributed to open-source community with AI-focused analytics tools and business applications.
- Focused strategic upskilling in advanced analytics and scalable, next-gen analytics solutions.`,
                    icon: "ai",
                    skills: ["LangChain", "RAG", "LLMs", "PandasAI", "ChatGPT Plugins", "OpenAI APIs", "Streamlit"],
                    isExpanded: true,
                },
            ],
        },
        {
            id: "1",
            companyName: "Cavinkare Pvt Ltd",
            companyLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234f46e5'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
            isCurrentEmployer: false,
            positions: [
                {
                    id: "1-1",
                    title: "Business Analyst",
                    employmentPeriod: "Mar 2022 - Dec 2023",
                    employmentType: "Full-time",
                    description: `- Conducted data-driven market research and customer behavior analysis using Neilsen/Kantar.
- Delivered predictive insights to C-suite for marketing strategy and campaign effectiveness.
- Collaborated cross-functionally to execute marketing plans based on analytics and KPIs.
- Led performance tracking, budget analysis, and reporting through automated dashboards (Power BI).`,
                    icon: "business",
                    skills: ["Power BI", "Market Research", "Predictive Analytics", "KPIs"],
                    isExpanded: true,
                },
            ],
        },
        {
            id: "2",
            companyName: "IBM India Pvt Ltd",
            companyLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23006699'%3E%3Cpath d='M0 0h8v3H0V0zm0 4h8v3H0V4zm0 4h8v3H0V8zm0 4h8v3H0v-3zm0 4h8v3H0v-3zm0 4h8v1H0v-1zM9 0h6v2H9V0zm0 3h6v2H9V3zm0 3h6v2H9V6zm0 3h6v2H9V9zm0 3h6v2H9v-2zm0 3h6v2H9v-2zm0 3h6v1H9v-1zM16 0h8v3h-8V0zm0 4h8v3h-8V4zm0 4h8v3h-8V8zm0 4h8v3h-8v-3zm0 4h8v3h-8v-3zm0 4h8v1h-8v-1z'/%3E%3C/svg%3E",
            positions: [
                {
                    id: "2-1",
                    title: "Marketing Analyst",
                    employmentPeriod: "Jul 2016 - Mar 2022",
                    employmentType: "Full-time",
                    description: `- Designed and automated global marketing dashboards for performance and revenue pipeline analysis.
- Provided strategic marketing recommendations using SQL, Python, and visualization tools.
- Researched competitive strategy and built insights dashboards for global leaders.
- Drove process optimization and operational efficiency through analytics and automation.`,
                    icon: "code",
                    skills: ["SQL", "Python", "Power BI", "Tableau", "Marketing Analytics"],
                    isExpanded: true,
                },
            ],
        },
        {
            id: "3",
            companyName: "Indegene Life Systems Pvt Ltd",
            companyLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300a86b'%3E%3Cpath d='M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-2V2.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5V4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM4 18V6h16v12H4z'/%3E%3C/svg%3E",
            positions: [
                {
                    id: "3-1",
                    title: "Reporting Analyst",
                    employmentPeriod: "Aug 2015 – May 2016",
                    employmentType: "Full-time",
                    description: `- Delivered automated marketing and sales performance reports using data mining and visualization.
- Created dashboards and answered ad-hoc business queries by analyzing large datasets.
- Supported consulting initiatives by identifying customer insights and improving data presentation.`,
                    icon: "code",
                    skills: ["Data Mining", "Visualization", "Reporting", "Excel"],
                    isExpanded: true,
                },
            ],
        },
        {
            id: "4",
            companyName: "Infosys Ltd",
            companyLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23007acc'%3E%3Cpath d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z'/%3E%3Cpath d='M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z'/%3E%3C/svg%3E",
            positions: [
                {
                    id: "4-1",
                    title: "Data Analyst",
                    employmentPeriod: "Mar 2011 – Aug 2015",
                    employmentType: "Full-time",
                    description: `- Developed and automated reports/dashboards using Excel, SQL, VBA, and MS Access for tax processing insights.
- Translated business requirements into reporting solutions for decision-making and improvements.`,
                    icon: "code",
                    skills: ["Excel", "SQL", "VBA", "MS Access", "Reporting"],
                    isExpanded: true,
                },
            ],
        },
    ],
    mediumUsername: '', // Removed as user doesn't have a Medium account
    githubUrl: 'https://github.com/And3m',
}
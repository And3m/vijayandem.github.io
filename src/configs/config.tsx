import { Button } from "@/components/ui/button";
import { IAppConfig } from "@/types";
import { Code, Github, Globe, Lightbulb, MapPin, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { SITE_INFO } from "./site";

export const appConfig: IAppConfig = {
    profile: {
        name: 'And3m',
        image: '/hero/about-me.jpg',
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
            id: "1",
            companyName: "Cavinkare Pvt Ltd",
            companyLogo: "https://media.licdn.com/dms/image/C4D0BAQH5Fj56u48a4w/company-logo_200_200/0/1630593301928/cavinkare_logo?e=1727308800&v=beta&t=ZJiJkYQ8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8",
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
            companyLogo: "https://media.licdn.com/dms/image/C4E0BAQH5Fj56u48a4w/company-logo_200_200/0/1630593301928/ibm_logo?e=1727308800&v=beta&t=ZJiJkYQ8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8",
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
            companyLogo: "https://media.licdn.com/dms/image/C4E0BAQH5Fj56u48a4w/company-logo_200_200/0/1630593301928/indegene_logo?e=1727308800&v=beta&t=ZJiJkYQ8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8",
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
            companyLogo: "https://media.licdn.com/dms/image/C4E0BAQH5Fj56u48a4w/company-logo_200_200/0/1630593301928/infosys_logo?e=1727308800&v=beta&t=ZJiJkYQ8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q8",
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
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SITE_INFO } from "@/configs/site";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "And3m | Business Analyst",
  description: "Business Analyst & Data Visualization Specialist",
  keywords: `${SITE_INFO.keywords.join(", ")}`,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen`} suppressHydrationWarning>
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

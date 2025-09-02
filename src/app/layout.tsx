import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SITE_INFO } from "@/configs/site";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Vijay K Andem | Business Analyst",
  description: "Business Analyst & Data Visualization Specialist",
  keywords: `${SITE_INFO.keywords.join(", ")}`,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/branding/logo.jpg" type="image/jpeg" />
        {/* Preload critical resources */}
        <link rel="preload" href="/hero/about-me.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={`antialiased min-h-screen`} suppressHydrationWarning>
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

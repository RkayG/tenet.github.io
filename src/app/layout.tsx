import type { Metadata } from "next";
import { Inter, Fira_Code, Kalam } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tenet - Enterprise API Framework",
  description: "Build on Solid Fundamentals. Enterprise-grade API framework with built-in security, audit trails, and compliance for Node.js + Express + Prisma",
  keywords: ["API framework", "Node.js", "TypeScript", "Enterprise", "Security", "Compliance", "Multi-tenancy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} ${kalam.variable} bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

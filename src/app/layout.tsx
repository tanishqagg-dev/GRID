import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: {
    default: "Project GRID",
    template: "%s | Project GRID",
  },
  description:
    "Project GRID is a Section 8 nonprofit giving underprivileged students access to AI and entrepreneurship resources through Aurora, N3C, Young Changemakers Bootcamp, and Project Learn.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.css"
        />
      </head>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} ${syne.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

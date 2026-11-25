import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Uplane | Next-gen Performance Marketing", description: "AI-powered performance marketing that builds, learns, and grows with your company." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

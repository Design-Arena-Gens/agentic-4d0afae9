import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation Agency Dashboard",
  description: "Dashboard for managing AI automation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

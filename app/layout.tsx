import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Approved single-sans system (design.md §3): Inter, self-hosted and
// subset via next/font. IBM Plex Sans is the documented alternative and is
// not loaded unless licensing or rendering requires it.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Brokerage Advisory",
  description:
    "The Brokerage Advisory is a Singapore-based independent financing advisory that helps businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

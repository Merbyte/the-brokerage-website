import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

/*
 * V2 typography (design.md §4, MASTER.md §3.1). Manrope carries every
 * explanatory surface: navigation, body, forms, tables, calculator and
 * diagram labels. Source Serif 4 is the editorial voice and appears only on
 * major headings sitting on obsidian. Both are self-hosted through
 * next/font, so no request reaches Google at runtime.
 */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Brokerage Advisory",
  description:
    "The Brokerage Advisory is a Singapore-based independent financing advisory that helps businesses understand their financing situation before deciding where and how to approach banks, financiers or capital providers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

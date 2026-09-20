import type { Metadata } from "next";
import MercuryNumeHome from "./mercury-nume/MercuryNumeHome";

export const metadata: Metadata = {
  title: "The Brokerage Advisory | Singapore Financing Advisory",
  description:
    "Independent financing advisory for established Singapore businesses navigating growth, cash-flow pressure and complex financing situations.",
};

export default function HomePage() {
  return <MercuryNumeHome />;
}

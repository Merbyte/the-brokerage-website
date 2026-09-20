import type { Metadata } from "next";
import MercuryNumeHome from "./MercuryNumeHome";

export const metadata: Metadata = {
  title: "The Brokerage Advisory | Business Financing, Reframed",
  description:
    "Independent financing advisory for established Singapore businesses navigating growth, cash-flow pressure and complex financing situations.",
};

export default function Page() {
  return <MercuryNumeHome />;
}

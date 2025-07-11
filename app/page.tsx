import ClientHome from "@/components/ClientHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palace | A second brain for private market investors to move faster and smarter",
  description:
    "Our platform lets private equity funds track and analyze portfolio companies. We unify your back-office to automate tasks like benchmarking and reporting.",
  keywords:
    "financial research, AI research, data extraction, financial insights, private equity, portfolio management, market intelligence, investment analysis, financial technology, AI-driven insights",
  openGraph: {
    title: "Palace | A second brain for private market investors to move faster and smarter",
    description:
      "Our platform lets private equity funds track and analyze portfolio companies. We unify your back-office to automate tasks like benchmarking and reporting.",
    type: "website",
    siteName: "Palace",
  },
};

export default function Home() {
  return <ClientHome />;
}

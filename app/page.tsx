import ClientHome from "@/components/ClientHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucid Spring | Financial Research Intelligence Platform",
  description:
    "Transform your primary research through voice agent interviews, data extraction, and deliverable generation for financial insights.",
  keywords:
    "financial research, AI research, voice interviews, data extraction, financial insights",
  openGraph: {
    title: "Lucid Spring | Financial Research Intelligence Platform",
    description:
      "Transform your primary research through voice agent interviews, data extraction, and deliverable generation.",
    type: "website",
    siteName: "Lucid Spring",
  },
};

export default function Home() {
  return <ClientHome />;
}

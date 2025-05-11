import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Lucid Spring",
  description: "Terms of Service for Lucid Spring - Learn about our terms and conditions",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

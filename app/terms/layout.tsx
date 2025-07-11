import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Palace",
  description: "Terms of Service for Palace - Learn about our terms and conditions",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import { Toaster } from "@/components/ui/toaster";
import WaitlistModal from "@/components/WaitlistModal";
import { WaitlistProvider } from "@/context/WaitlistContext";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palace - A second brain for private market investors",
  description:
    "Our platform lets private equity funds track and analyze portfolio companies. We unify your back-office to automate tasks like benchmarking and reporting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <WaitlistProvider>
          {children}
          <WaitlistModal />
          <Toaster />
          <Analytics />
        </WaitlistProvider>
      </body>
    </html>
  );
}

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
  title: "Palace - One platform for deal monitoring and reporting",
  description:
    "Our platform lets private equity funds track and analyze portfolio companies. We unify your back-office to automate tasks like benchmarking and reporting.",
  keywords:
    "financial research, AI research, data extraction, financial insights, private equity, portfolio management, market intelligence, investment analysis, financial technology, AI-driven insights",
  icons: {
    icon: "/favicon.ico",
  },
  // Share previews (OG/Twitter)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://palace.so"),
  openGraph: {
    title: "Palace — One platform for deal monitoring and reporting",
    description:
      "Investment monitoring and reporting for private markets. Real-time analysis of portfolio company data, fund reports, and connected systems.",
    url: "/",
    siteName: "Palace",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Palace preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palace — One platform for deal monitoring and reporting",
    description:
      "Investment monitoring and reporting for private markets. Real-time analysis of portfolio company data, fund reports, and connected systems.",
    images: ["/og-image.png"],
  },
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} font-light`}>
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

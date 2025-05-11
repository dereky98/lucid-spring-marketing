"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addToWaitlist } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  navbarTheme: "dark" | "light";
}

export default function Navbar({ navbarTheme }: NavbarProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Determine colors based on theme
  const isDarkTheme = navbarTheme === "dark";
  const bgColor = isDarkTheme ? "bg-[#0A0C1B]/30" : "bg-white";
  const textColor = isDarkTheme ? "text-white" : "text-black";
  const logoSrc = isDarkTheme ? "/logo-white.svg" : "/logo-black.svg";
  const borderColor = isDarkTheme ? "border-none" : "border-neutral-200"; // Softer border for light theme
  const inputBgColor = isDarkTheme ? "bg-white/10" : "bg-neutral-100";
  const inputTextColor = isDarkTheme ? "text-white" : "text-black";
  const inputPlaceholderColor = isDarkTheme ? "placeholder-white/70" : "placeholder-neutral-500";

  // Add console log to debug
  useEffect(() => {
    console.log("Navbar theme:", navbarTheme);
    console.log("Background color class:", bgColor);
  }, [navbarTheme, bgColor]);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await addToWaitlist(email);

      toast({
        title: "Success!",
        description: "You have successfully joined the Lucid Spring waitlist.",
        variant: "success",
      });

      setEmail("");
    } catch (error) {
      console.error("Error adding to waitlist:", error);

      toast({
        title: "Something went wrong",
        description: "There was a problem joining the waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-md ${borderColor} ${bgColor}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <Image
              src={logoSrc}
              alt="Lucid Spring"
              width={40}
              height={40}
              className="relative z-10"
            />
          </div>
          <span className={`ml-2 text-xl font-medium ${textColor} font-iowan`}>Lucid Spring</span>
        </Link>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <form onSubmit={handleJoinWaitlist} className="flex items-center space-x-4">
            <div className="relative group">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-sm opacity-50 group-hover:opacity-70 transition duration-300 ${
                  isDarkTheme ? "" : "opacity-0"
                }`}
              ></div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`relative ${inputBgColor} ${inputTextColor} ${inputPlaceholderColor} rounded-full w-sm px-4 py-2 text-sm border border-purple-900/10 focus:outline-none focus:ring focus:ring-purple-500/40`}
                disabled={isSubmitting}
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <Button
                type="submit"
                className="relative bg-[#4A1D96] text-white text-xs hover:bg-[#6029b8] rounded-full px-6 py-2 font-inter font-light transition-colors duration-300 z-10"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

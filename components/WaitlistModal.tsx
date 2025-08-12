"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWaitlist } from "@/context/WaitlistContext";
import { useToast } from "@/hooks/use-toast";
import { addToWaitlist } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Script from "next/script";
import * as React from "react";
import { useEffect, useState } from "react";

// Custom dialog content with simplified animation
const CustomDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay
      className="fixed inset-0 z-50 bg-black/40 animate-fadeIn"
      style={{ animationDuration: "300ms" }}
    />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-xl -translate-x-1/2 -translate-y-1/2 gap-4 border bg-white border-gray-200 p-8 shadow-xl sm:rounded-xl animate-fadeIn",
        className
      )}
      style={{ animationDuration: "300ms" }}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4 text-gray-500" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
CustomDialogContent.displayName = DialogPrimitive.Content.displayName;

export default function WaitlistModal() {
  const { isModalOpen, closeModal, prefillEmail, autoSubmit } = useWaitlist();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  // Update email when prefillEmail changes
  useEffect(() => {
    if (prefillEmail) {
      setEmail(prefillEmail);
    }
  }, [prefillEmail]);

  // Ensure success view is shown immediately when auto-submitting
  useEffect(() => {
    if (isModalOpen && autoSubmit && prefillEmail) {
      setIsSuccess(true);
    }
  }, [isModalOpen, autoSubmit, prefillEmail]);

  // Auto-submit when requested
  useEffect(() => {
    if (isModalOpen && autoSubmit && prefillEmail) {
      // Submit without requiring name
      (async () => {
        setIsSubmitting(true);
        try {
          await addToWaitlist(prefillEmail, "");
          setIsSuccess(true);
        } catch (error) {
          console.error("Error auto-joining waitlist:", error);
        } finally {
          setIsSubmitting(false);
        }
      })();
    }
  }, [isModalOpen, autoSubmit, prefillEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
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
      await addToWaitlist(email, name);

      // Show success state inside the modal
      setIsSuccess(true);
      setIsSubmitting(false);
      return;
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

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsSuccess(false);
      setName("");
      setEmail("");
      closeModal();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <CustomDialogContent>
        {/* Animation player for .lottie files */}
        <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js"
          strategy="afterInteractive"
        />
        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-6">
            <div className="mb-4 animate-fadeIn">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<dotlottie-player autoplay src="/Checkmark%20and%20burst.lottie" style="width:96px;height:96px"></dotlottie-player>`,
                }}
              />
            </div>
            <DialogTitle className="text-2xl font-semibold text-[#272727]">
              You’re on the waitlist
            </DialogTitle>
            <DialogDescription className="mt-2 text-gray-600">
              Thanks for joining. We’ll reach out with next steps shortly.
            </DialogDescription>
            <div className="mt-6 w-full">
              <Button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="w-full bg-[#272727] text-white text-lg py-3 h-auto hover:bg-[#3a3a3a] transition-colors duration-200 rounded-full"
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-semibold text-[#272727]">
                Join our waitlist
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-base">
                Get early access to Palace&apos;s private market research platform.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[#272727] placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[#272727] placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <DialogFooter className="mt-8">
                <Button
                  type="submit"
                  className="w-full bg-[#272727] text-white text-lg py-3 h-auto hover:bg-[#3a3a3a] transition-colors duration-200 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </CustomDialogContent>
    </Dialog>
  );
}

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
import * as React from "react";
import { useEffect, useState } from "react";

// Custom dialog content with simplified animation
const CustomDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay
      className="fixed inset-0 z-50 bg-black/80 animate-fadeIn"
      style={{ animationDuration: "500ms" }}
    />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 gap-4 border bg-[#0A0C1B] border-gray-800 p-8 shadow-lg sm:rounded-lg animate-fadeIn",
        className
      )}
      style={{ animationDuration: "500ms" }}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4 text-white" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
CustomDialogContent.displayName = DialogPrimitive.Content.displayName;

export default function WaitlistModal() {
  const { isModalOpen, closeModal, prefillEmail } = useWaitlist();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Update email when prefillEmail changes
  useEffect(() => {
    if (prefillEmail) {
      setEmail(prefillEmail);
    }
  }, [prefillEmail]);

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

      toast({
        title: "Success!",
        description: "You have successfully joined the Palace waitlist.",
        variant: "success",
      });

      // Reset form and close modal
      setName("");
      setEmail("");
      closeModal();
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
    <Dialog open={isModalOpen} onOpenChange={(open) => !open && closeModal()}>
      <CustomDialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl text-white">Join our waitlist</DialogTitle>
          <DialogDescription className="text-gray-400 text-base">
            Get early access to Palace&apos;s private market research platform.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500/60 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500/60 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <DialogFooter className="mt-8">
            <Button
              type="submit"
              className="w-full bg-[#4A1D96] text-white text-lg py-3 h-auto hover:bg-[#6029b8] transition-colors duration-300 rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </DialogFooter>
        </form>
      </CustomDialogContent>
    </Dialog>
  );
}

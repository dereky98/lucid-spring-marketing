"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResearchForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !description) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("research_requests").insert([
        {
          name,
          email,
          company,
          description,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast({
        title: "Request submitted",
        description: "We've received your research request and will be in touch soon.",
        variant: "success",
      });

      // Reset form
      setName("");
      setEmail("");
      setCompany("");
      setDescription("");

      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring focus:ring-purple-500/50 focus:outline-none text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring focus:ring-purple-500/50 focus:outline-none text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring focus:ring-purple-500/50 focus:outline-none text-white"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-2">
          Research Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring focus:ring-purple-500/50 focus:outline-none text-white resize-none"
          placeholder="Please describe your research needs..."
          required
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full font-light bg-[#4A1D96] hover:bg-[#6029b8] text-white py-2 rounded-lg transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </div>
    </form>
  );
}

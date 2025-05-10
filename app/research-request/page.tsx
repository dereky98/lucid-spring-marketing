import ResearchForm from "@/components/ResearchForm";

export default function ResearchRequestPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-gradient-to-b from-[#0A0C1B] to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-black/50 backdrop-blur-md border border-[#1a1a2e]/30 rounded-xl p-8">
          <h1 className="text-3xl font-playfair font-medium text-white mb-6 text-center">
            Submit a Research Request
          </h1>
          <p className="text-gray-300 mb-8 text-center font-light">
            Tell us about your research needs and our team will get back to you.
          </p>
          <ResearchForm />
        </div>
      </div>
    </div>
  );
}

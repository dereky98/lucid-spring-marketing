export default function LogosSection() {
  return (
    <section className="py-12 bg-[#0f172a] backdrop-blur-sm border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-400 font-light">
            Trusted by leading financial institutions worldwide
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="opacity-50 hover:opacity-100 transition-all">
              <img
                src={`/placeholder.svg?height=40&width=120`}
                alt={`Company ${i}`}
                className="h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

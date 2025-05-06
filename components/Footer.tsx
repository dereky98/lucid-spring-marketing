import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-white">Lucid Spring</h3>
            <p className="text-gray-400 font-light">
              Transforming financial research with AI-powered solutions.
            </p>
            <div className="mt-4 flex space-x-4">
              {["twitter", "facebook", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-500 hover:text-[#8A2BE2] transition-colors"
                >
                  <div className="w-8 h-8 border border-gray-800 flex items-center justify-center">
                    <span className="sr-only">{social}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-white">Solutions</h4>
            <ul className="space-y-2 text-gray-400 font-light">
              <li>
                <a href="#" className="hover:text-[#8A2BE2] transition-colors">
                  Voice Interviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8A2BE2] transition-colors">
                  Data Extraction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8A2BE2] transition-colors">
                  Report Generation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8A2BE2] transition-colors">
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 font-light">
              <li>
                <a href="#" className="hover:text-[#8A2BE2] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8A2BE2] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8A2BE2] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8A2BE2] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-white">Stay Connected</h4>
            <p className="text-gray-400 mb-4 font-light">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full focus:outline-none bg-gray-800 border-gray-700 border text-gray-300"
              />
              <button className="bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white px-4 py-2 transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Lucid Spring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <img src="/logo-white.svg" alt="Lucid Spring Logo" className="w-10 h-10 mr-2" />
            <span className="text-white text-sm">Lucid Spring</span>
          </div>

          <nav className="hidden sm:flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Home
            </a>
            <a href="/blog" className="text-sm hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Terms
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-500 text-sm">© Lucid Spring Inc.</span>
          <div className="flex space-x-2">
            <a
              href="https://www.linkedin.com/company/lucidspring"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

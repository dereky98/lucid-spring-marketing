"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#272727] text-white overflow-hidden pt-12 sm:pt-24 md:pt-64 lg:pt-96">
      {/* Oversized brand wordmark background (from BottomCTA) */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-0 bottom-0 z-0 hidden md:block"
      >
        <span className="font-playfair leading-none text-[#F9F9F9] text-[12vw] sm:text-[14vw] md:text-[16vw]">
          Palace
        </span>
      </div>

      {/* Desktop: pin social/copyright to bottom-right; Mobile: stacked center */}
      <div className="relative z-10 mx-auto px-6 sm:px-8 pb-2 w-full">
        {/* Desktop pinned bottom-right */}
        <div className="hidden md:flex absolute right-2 bottom-2 flex-col items-end gap-2 text-right">
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/trypalace/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/usepalace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <div className="text-xs leading-5 text-white/70">
            © 2025 Lucid Spring Inc. All rights reserved.
          </div>
        </div>

        {/* Mobile stacked centered */}
        <div className="md:hidden flex flex-col items-center gap-3 text-center">
          <div className="font-playfair text-[#F9F9F9] text-[14vw] mb-8 leading-none">Palace</div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/trypalace/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/usepalace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <div className="text-xs leading-5 text-white/70">
            © 2025 Lucid Spring Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

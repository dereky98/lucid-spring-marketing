"use client";

import { useWaitlist } from "@/context/WaitlistContext";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { openModal } = useWaitlist();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 sm:px-8 pt-6">
      <div className="mx-auto w-full max-w-lg">
        <div className="flex items-center justify-between rounded-full bg-[#D5DFE573]/60 px-4 py-2">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 text-sm text-[#272727]">
            <Image src="/palace-logo.svg" alt="Palace logo" width={19} height={25} />
            Palace
          </Link>

          {/* Try Today */}
          <button
            onClick={() => openModal()}
            className="rounded-full bg-white px-4 py-2 text-xs font-normal text-gray-900 shadow hover:bg-white/90"
          >
            Try Today
          </button>
        </div>
      </div>
    </header>
  );
}

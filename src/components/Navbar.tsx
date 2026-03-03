"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Brand */}
       <Link href="/" className="text-xl font-bold tracking-widest hover:text-amber-400 transition-colors">
  HOLLOWS
</Link>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
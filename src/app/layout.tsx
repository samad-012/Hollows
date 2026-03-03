import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HOLLOWS - Truth. Clarity. Confidence.",
    template: "%s | HOLLOWS Investigation Services",
  },
  description:
    "HOLLOWS provides professional, confidential, and reliable investigation services including relationship, corporate, cyber, and background investigations.",
  keywords: [
    "Private Investigation",
    "Background Verification",
    "Corporate Investigation",
    "Cyber Investigation",
    "Confidential Services",
  ],
  authors: [{ name: "HOLLOWS Investigation Services" }],
  metadataBase: new URL("https://yourdomain.com"), // change after deployment
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-background
          text-foreground
          transition-colors
          duration-300
        `}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
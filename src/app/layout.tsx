import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECG Analyzer",
  description: "ECG Analyzer app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white text-black">
          {/* Navigation Bar */}
          <nav className="flex justify-between items-center p-6 border-b border-black shadow-sm">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wider hover:text-gray-600 transition"
            >
              ECG Analyzer
            </Link>
            <div className="space-x-6">
              <Link href="/" className="text-lg hover:text-gray-600 transition">
                Upload
              </Link>
              <Link
                href="/documentation"
                className="text-lg hover:text-gray-600 transition"
              >
                Docs
              </Link>
            </div>
          </nav>

          {/* Page Content */}
          <main className="p-8">{children}</main>
        </div>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </body>
    </html>
  );
}

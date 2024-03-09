import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'This Default Apply for the All pages',
    template: '%s | Page Title'
  },
  description: "This for Praticing Applications",
  keywords: 'create, read, update, Delete'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full bg-blue-300 flex justify-center">
          <p className="text-black">Header Section</p>
        </header>
        <div className="h-[85vh] flex items-center justify-center">
          {children}
        </div>
        <footer className="w-full bg-blue-300 flex justify-center">
          <p className="text-black">Footer Section</p>
        </footer>
      </body>
    </html>
  );
}

import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Henry | Portfolio",
  description: "A portfolio website of my web design projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={grotesk.className}>{children}</body>
    </html>
  );
}

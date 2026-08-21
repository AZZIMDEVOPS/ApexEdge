import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Edge Advisory Limited | Strategic Advisory & Board-Ready Systems",
  description: "Apex Edge helps organisations turn governance, people, control, performance and data protection challenges into practical, Board-ready systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className={`${poppins.className} min-h-full flex flex-col bg-white text-slate-900`}
      >
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ApexEdge Advisory Limited | HR, Legal & Governance Consulting in Kenya",
  description: "Trusted company secretarial, legal services, HR advisory, corporate governance, and business solutions in Nairobi, Kenya.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col bg-white text-slate-900`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

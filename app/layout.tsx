import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";
import { ModalProvider } from "@/context/ModalContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RERA Consultants by Pooja Gowda M | Leading Experts in Bangalore",
    template: "%s | RERA Consultants by Pooja Gowda M"
  },
  description: "Premier Real Estate Consulting Services in Bangalore. Expert RERA registration, project compliance, and legal guidance for developers and agents in Karnataka.",
  keywords: [
    "RERA Bangalore",
    "RERA Registration Karnataka",
    "Real Estate Consultant Bangalore",
    "RERA Project Registration Bangalore",
    "Pooja Gowda M",
    "RERA Compliance Audit",
    "RERA Agent Registration Bangalore",
    "RERA Legal Services"
  ],
  authors: [{ name: "Pooja Gowda M" }],
  creator: "Pooja Gowda M & Associates",
  publisher: "RERA Consultants",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/rera-logo.png",
    apple: "/rera-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rerabypooja.com",
    siteName: "RERA Consultants by Pooja Gowda M",
    title: "RERA Consultants by Pooja Gowda M | Bangalore's Leading RERA Experts",
    description: "Expert RERA registration and compliance services for developers and agents in Bangalore and Karnataka.",
    images: [
      {
        url: "/rera-logo.png",
        width: 1200,
        height: 630,
        alt: "RERA Consultants by Pooja Gowda M",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RERA Consultants by Pooja Gowda M",
    description: "Leading RERA experts in Bangalore and Karnataka.",
    images: ["/rera-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-white text-emerald-950 font-sans`}
      >
        <ModalProvider>
          <Header />
          {children}
          <FloatingContact />
        </ModalProvider>
      </body>
    </html>
  );
}

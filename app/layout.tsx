import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RevealController } from "@/components/reveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://aestheticway.co.uk"),
  title: {
    default: "The Aesthetic Way | Bespoke Aesthetics",
    template: "%s | The Aesthetic Way",
  },
  description:
    "Natural enhancements, bespoke treatment plans and a personal approach with CPD-qualified aesthetics practitioner Chelsey Olawuyi.",
  openGraph: {
    title: "The Aesthetic Way",
    description: "Luxury results. Personal approach.",
    images: [{ url: "/images/hero-clinic.png", width: 1080, height: 608 }],
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <RevealController />
      </body>
    </html>
  );
}

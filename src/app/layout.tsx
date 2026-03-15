import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { MotionProvider } from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('https://gurdwarasahib.com'),
  title: "Gurdwara Sahib Switzerland",
  description: "The spiritual home for the Sikh Sangat in Langenthal, Canton of Bern. Open to all, promoting peace, equality, and community service.",
  keywords: ["Gurdwara", "Switzerland", "Sikh", "Langenthal", "Sikhism", "Sewa", "Community", "Spiritual"],
  openGraph: {
    title: "Gurdwara Sahib Switzerland",
    description: "The spiritual home for the Sikh Sangat in Langenthal, Canton of Bern.",
    url: "https://gurdwarasahib.com",
    siteName: "Gurdwara Sahib Switzerland",
    images: [
      {
        url: "/assets/hero-front.webp",
        width: 1200,
        height: 630,
        alt: "Gurdwara Sahib Switzerland",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurdwara Sahib Switzerland",
    description: "The spiritual home for the Sikh Sangat in Langenthal, Canton of Bern.",
    images: ["/assets/hero-front.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground transition-colors duration-300 relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <MotionProvider>
              <Navbar />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

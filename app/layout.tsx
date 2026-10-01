import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/motion/page-transition";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME, SITE_URL } from "@/lib/site-config";

import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const defaultTitle = `${SITE_SHORT_NAME} | ${SITE_NAME}`;
const orgName = `${SITE_NAME} (${SITE_SHORT_NAME})`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: `%s | ${SITE_SHORT_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: orgName,
  authors: [{ name: orgName }],
  creator: orgName,
  publisher: orgName,
  keywords: [
    "QEIC",
    SITE_NAME,
    "Queen's University entrepreneurship",
    "Queen's University innovation club",
    "student entrepreneurship Kingston",
    "founder speaker events Queen's",
    "Smith School of Business clubs",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_SHORT_NAME,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/home/qeic-hero-background.jpg",
        width: 1120,
        height: 745,
        alt: "Smith School of Business at Queen's University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: ["/images/home/qeic-hero-background.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

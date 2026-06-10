import type { Metadata } from "next";
import { Space_Grotesk, Inter, Cairo } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandme.agency"),
  title: "BrandMe — We Build Market Leaders | Premium Branding Agency",
  description:
    "BrandMe is a premium branding, strategy, and digital growth agency. We don't build brands — we build market leaders. It's not luck. It's strategy.",
  keywords: [
    "branding agency",
    "brand strategy",
    "visual identity",
    "social media marketing",
    "SEO",
    "web design",
    "digital marketing",
    "BrandMe",
  ],
  openGraph: {
    title: "BrandMe — We Build Market Leaders",
    description: "It's not luck. It's strategy.",
    type: "website",
    url: "https://brandme.agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrandMe Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandMe — We Build Market Leaders",
    description: "It's not luck. It's strategy.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${cairo.variable} noise-overlay antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

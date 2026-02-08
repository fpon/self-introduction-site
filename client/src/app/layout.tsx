import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { BrainsFooter } from "@/components/brains/brains-footer";
import { BrainsHeader } from "@/components/brains/brains-header";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Creative Developer Portfolio - Building digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <body className={`${ibmPlexMono.variable} font-mono antialiased`}>
        <LoadingScreen />
        <CustomCursor />
        <BackgroundEffects />
        <BrainsHeader />
        {children}
        <BrainsFooter />
      </body>
    </html>
  );
}

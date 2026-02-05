import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className={`${ibmPlexMono.variable} font-mono antialiased`}>
        <LoadingScreen />
        <CustomCursor />
        <BackgroundEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

import { metadata as siteMetadata } from "@/config/metadata";

import { auth } from '@/lib/auth';
import { FeedbackWidget } from '@/components/ui/feedback-widget';

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0F172A] text-[#F8FAFC]`}
      >
        <Providers>
          {children}
          <FeedbackWidget userEmail={session?.user?.email ?? undefined} />
        </Providers>
      </body>
    </html>
  );
}

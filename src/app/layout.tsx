import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Analytics } from "@vercel/analytics/react";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
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
        className={`${jakarta.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>
          {children}
          <FeedbackWidget userEmail={session?.user?.email ?? undefined} />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

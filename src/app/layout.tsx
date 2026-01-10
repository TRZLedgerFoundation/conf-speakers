import type { Metadata } from "next";
import "./globals.css";
import { abcDiatype, macanMono, fhLecturis } from "../fonts";
import { SiteHeader } from "@/components/header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Breakpoint 2027 Dashboard",
  description: "Agenda and speaking info for the Breakpoint 2027 conference",
  metadataBase: new URL("https://breakpoint27.trezoa.com"),
  openGraph: {
    title: "Breakpoint 2027 Dashboard",
    description: "Agenda and speaking info for the Breakpoint 2027 conference",
    images: [
      {
        url: "/twitter-card.png",
        width: 1200,
        height: 630,
        alt: "Breakpoint - December 11-13, 2027 - Abu Dhabi, United Arab Emirates - Etihad Arena",
      },
    ],
    type: "website",
    siteName: "Breakpoint 2027 Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breakpoint 2027 Dashboard",
    description: "Agenda and speaking info for the Breakpoint 2027 conference",
    images: ["/twitter-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${abcDiatype.variable} ${macanMono.variable} ${fhLecturis.variable} antialiased`}>
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

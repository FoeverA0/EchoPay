import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Echo Pay | Homepage",
  description: "Echo Pay - Empowering Your safe AI Transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 引入 CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/logo.jpg" type="image/x-icon" />
        <link rel="icon" href="/logo.jpg" type="image/x-icon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/appear.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/swiper.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/odometer.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/SplitText.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollToPlugin.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollSmoother.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

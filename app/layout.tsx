import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./providers";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fa" },
  ],
};

export const metadata: Metadata = {
  title: "David Herrera Almeraya | Senior Full-Stack Engineer",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  description:
    "Senior Full-Stack Engineer. Scalable systems, full-stack product engineering, data acquisition, and fintech. Mexico City.",
  keywords: [
    "full-stack engineer",
    "fintech",
    "scalable systems",
    "data engineering",
    "Mexico City",
    ".NET Core",
    "React",
    "Angular",
  ],
  authors: [{ name: "David Herrera Almeraya", url: "https://davidalmeraya.com" }],
  openGraph: {
    title: "David Herrera Almeraya | Senior Full-Stack Engineer",
    description:
      "Scalable systems, full-stack product engineering, data & automation, e-commerce & fintech.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Herrera Almeraya | Senior Full-Stack Engineer",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

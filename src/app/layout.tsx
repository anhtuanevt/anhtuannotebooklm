import type { Metadata } from "next";
import { Patrick_Hand, Kalam } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: ["400"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "My Journals",
  description: "Những cuốn sổ tay trên hành trình học tập",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${patrickHand.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-patrick-hand)]">{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For The Plot",
  description: "A simple Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

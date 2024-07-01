import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Inspiration By Trazler",
  description: "Inspiration for Travel By Real People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="root">{children}</body>
    </html>
  );
}

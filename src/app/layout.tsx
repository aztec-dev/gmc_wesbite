import type { Metadata } from "next";
import { lusitana } from '@/ui/fonts';
import Nav from '@/ui/navigation/nav';
import "./globals.css";


export const metadata: Metadata = {
  title: "Home",
  description: "Glorious Medical Center landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.className} antialiased`}
      >
        <div><Nav /></div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MiniSplash",
  description: "Explore the Free Photos from Unsplash",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} text-white bg-[#0C1222]`}>
        <main>{children}</main>
        {modal}
      </body>
    </html>
  );
}

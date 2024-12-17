import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoidContextProvider from "@/providers/recoilContextProvider";
import Web3ContextProvider from "@/providers/web3ReactProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aid Trackers",
  description: "AidTracker leverages Mantle blockchain technology to create a decentralized supply chain management system that ensures transparent tracking, accountability, and efficiency from donors to recipients."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoidContextProvider>
          <Web3ContextProvider>
            {children}
          </Web3ContextProvider>
        </RecoidContextProvider>
      </body>
    </html>
  );
}

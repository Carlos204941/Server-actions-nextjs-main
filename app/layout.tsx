import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="container mx-auto px-4">
            <Toaster
              position="bottom-center"
              reverseOrder={false}
              toastOptions={{
                className: "w-full",
              }}
            />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

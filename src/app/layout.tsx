import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { TanstackProvider } from "@/components/providers/tanstack-provider";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Olshop",
  description: "Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <Navbar />
            <main>
              <Toaster />
              {children}
            </main>
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}

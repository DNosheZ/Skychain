"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionAppProvider from "./providers/sessionProvider";
import Navbar from "./species/navbar";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./providers/queryClientProvider";
import '@coinbase/onchainkit/styles.css';
import Footer from "./species/footer";
import ThemeToggleButton from "./atoms/ThemeToggleButton";  // ✅ Importa el nuevo componente

// Configuración de las fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <html lang="en" className={isDark ? "dark" : ""}>
      <head>
        <link rel="icon" href="/SkyChain.jpg" />
      </head>

      {/* Usamos grid para estructurar el layout */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[auto,1fr,auto] min-h-screen`}>
        <QueryClientProvider client={queryClient}>
          <SessionAppProvider>
            <Navbar />
            <main className="w-full">{children}</main>

            {/* ✅ Componente de cambio de tema */}
            <ThemeToggleButton />

          </SessionAppProvider>
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}

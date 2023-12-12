"use client";
import { AuthContextProvider } from "@/lib/Auth";
import "./globals.css";
import { mainFont } from "@/lib/font";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={mainFont.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}

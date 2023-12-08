import "./globals.css";
import { mainFont } from "@/lib/font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}

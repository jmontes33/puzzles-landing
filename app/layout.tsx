import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import MainSection from "./components/MainSection";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <MainSection />
        {children}
      </body>
    </html>
  );
}

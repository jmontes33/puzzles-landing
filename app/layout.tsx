import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import MainSection from "./components/MainSection";
import History from "./components/History";
import Products from "./components/Products";

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
        <History />
        <Products />
      </body>
    </html>
  );
}

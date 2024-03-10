import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - Expenso",
  description: "A sngle place that manages all your expenses worries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

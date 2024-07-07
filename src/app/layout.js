import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import PrismLoader from "@/Components/PrismLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code Stock.com",
  description: "This page is for SAP Frameworks and it is populated through NEXT JS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}

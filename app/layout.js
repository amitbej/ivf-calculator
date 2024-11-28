import { NavBar } from "@/components/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IVF Calculator",
  description: "Made By Amit Bej",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body >
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

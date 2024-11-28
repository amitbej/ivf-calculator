import { NavBar } from "@/components/Navbar";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>IVF Success Calculator</title>
      </head>
      <body>
        <header>
          <nav >
            <NavBar/>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
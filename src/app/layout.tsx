import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carvuz",
  description: "Smarter Parking made Simple",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="es-en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Fortunato - Terraza, Cocina + Bar | Trujillo, Perú',
  description: 'Un lugar para disfrutar de la buena comida y buenos momentosRestaurante Fortunato en Trujillo, Perú. Terraza, cocina y bar con ambiente único. Reserva tu mesa y disfruta de nuestra propuesta gastronómica.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

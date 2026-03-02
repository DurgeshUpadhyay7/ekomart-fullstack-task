import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from './context/CartContext'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ekomart - Premium Home Decor & Furniture',
  description:
    'Discover curated collections of premium furniture and home decor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">

        {/* ✅ GLOBAL CART STATE */}
        <CartProvider>
          {children}
        </CartProvider>

        <Analytics />
      </body>
    </html>
  );
}
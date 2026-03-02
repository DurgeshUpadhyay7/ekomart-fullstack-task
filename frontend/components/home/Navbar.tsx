'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../../app/context/CartContext';
import { useRouter } from 'next/navigation';

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  // ✅ CART STATE
  const { cart } = useCart();

  // ✅ NAVIGATION
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-foreground"
          >
            Ekomart
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="hover:text-muted-foreground">
              Shop
            </Link>
            <Link href="#" className="hover:text-muted-foreground">
              Collection
            </Link>
            <Link href="#" className="hover:text-muted-foreground">
              About
            </Link>
            <Link href="#" className="hover:text-muted-foreground">
              Contact
            </Link>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center space-x-4">

            {/* Search */}
            <button className="p-2 hover:bg-secondary rounded-lg">
              <Search size={20} />
            </button>

            {/* User */}
            <button className="p-2 hover:bg-secondary rounded-lg">
              <User size={20} />
            </button>

            {/* ✅ CART ICON */}
            <div
              onClick={() => router.push('/checkout')}
              className="relative p-2 hover:bg-secondary rounded-lg cursor-pointer"
            >
              <ShoppingCart size={20} />

              {/* CART COUNT */}
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* ✅ MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">

            <Link
              href="#"
              className="block px-4 py-2 hover:bg-secondary rounded-lg"
            >
              Shop
            </Link>

            <Link
              href="#"
              className="block px-4 py-2 hover:bg-secondary rounded-lg"
            >
              Collection
            </Link>

            <Link
              href="#"
              className="block px-4 py-2 hover:bg-secondary rounded-lg"
            >
              About
            </Link>

            <Link
              href="#"
              className="block px-4 py-2 hover:bg-secondary rounded-lg"
            >
              Contact
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
}
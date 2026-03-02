'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-primary-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">
              Join Our Community
            </h3>
            <p className="text-primary-foreground/80">
              Subscribe to get exclusive offers and design inspiration
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-primary-foreground focus:outline-none"
            />
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all flex items-center gap-2">
              <Mail size={18} />
              <span className="hidden sm:inline">Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Ekomart</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Premium home decor and furniture for the modern lifestyle
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Sale Items
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2024 Ekomart. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Secure Payments:</span>
              <div className="flex gap-2">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

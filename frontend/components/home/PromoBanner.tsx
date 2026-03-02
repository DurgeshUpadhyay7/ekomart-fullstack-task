'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function PromoBanner() {
  return (
    <section className="w-full py-12 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Promo 1 */}
          <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-8 md:p-12 border border-accent/20 hover:border-accent/50 transition-all duration-300 group cursor-pointer">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-2">
              Summer Collection
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover fresh designs perfect for the season
            </p>
            <button className="inline-flex items-center text-accent font-semibold hover:gap-3 transition-all gap-2">
              Shop Now
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Promo 2 */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-2">
              Limited Offer
            </h3>
            <p className="text-muted-foreground mb-6">
              Get up to 40% off on selected items
            </p>
            <button className="inline-flex items-center text-primary font-semibold hover:gap-3 transition-all gap-2">
              Explore Deals
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

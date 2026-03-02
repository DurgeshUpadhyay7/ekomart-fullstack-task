'use client';

import React from 'react';
import { Sofa, Trees, Lightbulb } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Furniture',
    icon: Sofa,
    description: 'Premium furniture pieces',
  },
  {
    id: 2,
    name: 'Decor',
    icon: Trees,
    description: 'Home decor essentials',
  },
  {
    id: 3,
    name: 'Lighting',
    icon: Lightbulb,
    description: 'Modern lighting solutions',
  },
];

export function CategoriesSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
          Shop by Category
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our curated collections designed to elevate every corner of your home
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="group bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:border-accent text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

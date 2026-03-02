'use client';

import React from 'react';
import { Truck, Shield, Undo2, Headphones } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50. Fast and reliable delivery',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Secure Payment',
    description: 'Safe and encrypted checkout process',
  },
  {
    id: 3,
    icon: Undo2,
    title: 'Easy Returns',
    description: '30-day return policy with no questions asked',
  },
  {
    id: 4,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated customer service team always ready',
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Why Shop With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="text-center p-6 rounded-xl hover:bg-secondary transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

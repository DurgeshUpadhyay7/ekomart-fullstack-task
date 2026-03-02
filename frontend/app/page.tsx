import { Navbar } from '@/components/home/Navbar';
import { HeroSection } from '@/components/home/HeroSection';

import { ProductGrid } from '@/components/home/ProductGrid';
import { PromoBanner } from '@/components/home/PromoBanner';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { Footer } from '@/components/home/Footer';

import CategorySection from '@/components/home/CategorySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategorySection />
      
      <ProductGrid />
      <PromoBanner />
      <FeaturesSection />
      <Footer />
    </main>
  );
}

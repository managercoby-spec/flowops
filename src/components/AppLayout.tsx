import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import StatsSection from './StatsSection';
import FeatureCard from './FeatureCard';
import DemoSection from './DemoSection';
import Testimonials from './Testimonials';
import ROICalculator from './ROICalculator';
import FAQ from './FAQ';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const features = [
    {
      icon: 'https://d64gsuwffb70l.cloudfront.net/68f6d910e7ea85c236674864_1761007941276_75b6bf49.webp',
      headline: 'Guaranteed 50% Cost Reduction',
      description: 'Cutting message length by half directly translates to lower charges. Our AI is designed for maximum efficiency without losing context.'
    },
    {
      icon: 'https://d64gsuwffb70l.cloudfront.net/68f6d910e7ea85c236674864_1761007942092_00133400.webp',
      headline: 'Maintain Brand Voice, Always',
      description: 'We ensure the formality, urgency, or casual tone of your original message remains intact, guaranteeing a professional customer experience.'
    },
    {
      icon: 'https://d64gsuwffb70l.cloudfront.net/68f6d910e7ea85c236674864_1761007942914_04bf7750.webp',
      headline: 'Arabic ↔ English Fluency',
      description: 'Optimized for high-quality compression in both Arabic and English, automatically detecting and processing the input language with high accuracy.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      <Navigation />
      <Hero />
      <StatsSection />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            AI Compression at Scale
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Three core capabilities that transform your WhatsApp costs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      <DemoSection />
      <Testimonials />
      <ROICalculator />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AppLayout;

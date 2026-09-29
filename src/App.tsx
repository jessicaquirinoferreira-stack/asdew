import React from 'react';
import {
  Header,
  Hero,
  CyberSplashIntro,
  TrustBadges,
  UrgencyBar,
  Services,
  BudgetCalculator,
  WhyCovertech,
  ProjectsGallery,
  FinalCTA,
  Footer,
  CoverBot,
  FloatingWhatsApp,
  FloatingInstagram,
  ExitIntentModal,
} from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#E2E8F0] selection:bg-[#C9A227]/30 selection:text-[#FFF1B8]">
      {/* High-Tech Futuristic Cyber Entrance with Giant Freestanding Official Logo */}
      <CyberSplashIntro />

      {/* Fixed Sticky Header with Progress Bar */}
      <Header />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section (Includes large freestanding official logo, AI + Human status and primary CTA) */}
        <Hero />

        {/* 2. Official Google 5.0 Rating Certificate & Site Seguro Trust Badges */}
        <TrustBadges />

        {/* 3. Urgency Bar (24h, 18x parcelamento, Curitiba e RMC, Troféu Imprensa 2025) */}
        <UrgencyBar />

        {/* 4. Services Section (Interactive cards with 3D glow & 18x banner) */}
        <Services />

        {/* 5. Interactive Budget & Diagnostic Calculator */}
        <BudgetCalculator />

        {/* 6. Why Covertech (10+ years, Troféu Imprensa 2025, Presidência Dhionatas Máximo) */}
        <WhyCovertech />

        {/* 7. Projects & "Em Evidência" Gallery */}
        <ProjectsGallery />

        {/* 8. Final High-Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Conversion Enhancers (Unobtrusive & Accessible) */}
      <FloatingWhatsApp />
      <FloatingInstagram />
      <CoverBot />
      <ExitIntentModal />
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Agitation from './Agitation';
import Bridge from './Bridge';
import ScaleDiagnostic from './ScaleDiagnostic';
import SocialProof from './SocialProof';
import Qualification from './Qualification';
import Pricing from './Pricing';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';

import StickyBottomBar from './StickyBottomBar';
import Footer from './Footer';
import UpgradePopup from './UpgradePopup';

const LandingPage: React.FC = () => {
  const [isUpgradePopupOpen, setIsUpgradePopupOpen] = React.useState(false);

  // Placeholder Checkout URLs - REPLACE THESE WITH YOUR HOTMART LINKS
  const CHECKOUT_BASIC_990 = 'https://pay.hotmart.com/PLACEHOLDER_BASIC_990';
  const CHECKOUT_COMPLETE_37 = 'https://pay.hotmart.com/PLACEHOLDER_COMPLETE_37';
  const CHECKOUT_COMPLETE_DISCOUNT_27 = 'https://pay.hotmart.com/PLACEHOLDER_COMPLETE_27';

  const handleBuy = (plan: 'basic' | 'complete') => {
    if (plan === 'basic') {
      setIsUpgradePopupOpen(true);
    } else {
      window.location.href = CHECKOUT_COMPLETE_37;
    }
  };

  const handleUpgradeConfirm = () => {
    window.location.href = CHECKOUT_COMPLETE_DISCOUNT_27;
  };

  const handleUpgradeDecline = () => {
    window.location.href = CHECKOUT_BASIC_990;
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#2D2D2D] font-display antialiased overflow-x-hidden">
      {/* Navbar Removed for Direct Traffic - VSL Focus */}
      <Hero onCtaClick={scrollToPricing} />
      <Agitation />
      <Bridge />
      <ScaleDiagnostic />
      <SocialProof />
      <Pricing onBuy={handleBuy} /> {/* Moved Up */}
      <Qualification />
      <FAQ />
      <FinalCTA onBuy={handleBuy} />

      <Footer />
      <UpgradePopup
        isOpen={isUpgradePopupOpen}
        onClose={() => setIsUpgradePopupOpen(false)}
        onConfirmUpgrade={handleUpgradeConfirm}
        onDeclineUpgrade={handleUpgradeDecline}
      />
    </div>
  );
};

export default LandingPage;
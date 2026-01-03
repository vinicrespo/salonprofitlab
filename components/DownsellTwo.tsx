import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants';

const DownsellTwo: React.FC = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/thank-you');
  };

  const handleNo = () => {
    navigate('/thank-you');
  };

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#221810] min-h-screen text-[#2D2D2D] dark:text-gray-100 flex flex-col items-center font-display">
      <div className="w-full max-w-[480px] bg-white dark:bg-[#1a120b] min-h-screen shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Urgency Banner */}
        <div className="bg-[#ec6d13] px-4 py-3 sticky top-0 z-50 shadow-md">
          <div className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-white text-[20px]">warning</span>
            <p className="text-white text-sm font-bold tracking-wide uppercase text-center leading-tight">FINAL CHANCE — Exclusive Discount!</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-32">
          {/* Hero Image */}
          <div className="relative w-full h-[200px] overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <img alt="Elegant modern salon interior" className="w-full h-full object-cover" src={IMAGES.downsell2.interior} />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A227]/90 text-white text-xs font-bold mb-2 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[16px]">lock_open</span>
                System Vault Unlocked
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="px-6 pt-6 pb-2 text-center">
            <h1 className="text-[#2D2D2D] dark:text-white text-[28px] font-bold leading-[1.2] tracking-tight mb-3">
              Wait! Get The Complete <span className="text-[#ec6d13] underline decoration-[#F5E6E0] underline-offset-4">Systems Vault</span> For Just <span className="text-[#ec6d13]">$37</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              This is your <b className="text-[#2D2D2D] dark:text-white">last opportunity</b> to grab these plug-and-play templates before the price goes back up to $197.
            </p>
          </div>

          {/* Timer */}
          <div className="px-6 py-4 flex justify-center">
            <div className="flex gap-3 items-center bg-[#F5E6E0]/30 dark:bg-white/5 px-4 py-2 rounded-lg border border-[#F5E6E0] dark:border-white/10">
              <span className="material-symbols-outlined text-[#B8860B] dark:text-[#ec6d13]">timer</span>
              <div className="flex gap-1 text-[#B8860B] dark:text-[#ec6d13] font-mono font-bold text-lg">
                <span>00</span>:<span>14</span>:<span>59</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-gray-500 font-medium ml-1">Remaining</span>
            </div>
          </div>

          {/* Value Card */}
          <div className="px-5 py-2">
            <div className="bg-[#FAF8F5] dark:bg-[#2c241b] rounded-xl p-5 border border-[#C9A227]/20 shadow-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                <span className="material-symbols-outlined text-[#C9A227]">inventory_2</span>
                <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-white">What's Inside The Vault?</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { name: "Client Intake Forms", desc: "Streamline your new client onboarding process." },
                  { name: "Stylist Hiring Contracts", desc: "Protect your business with iron-clad agreements." },
                  { name: "Inventory Tracking Sheets", desc: "Stop losing money on wasted product." },
                  { name: "Revenue Projection Calculator", desc: "Know exactly where your profit is coming from." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400 shrink-0 text-[20px] mt-0.5">check_circle</span>
                    <div>
                      <p className="text-sm font-semibold text-[#2D2D2D] dark:text-gray-200">{item.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="px-6 py-6 text-center">
            <div className="inline-block relative">
              <p className="text-gray-400 dark:text-gray-500 text-lg font-medium line-through decoration-red-500 decoration-2">Total Value: $197</p>
            </div>
            <div className="mt-1 flex items-center justify-center gap-2">
              <p className="text-4xl font-extrabold text-[#2D2D2D] dark:text-white">Only <span className="text-[#ec6d13]">$37</span></p>
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">One-time payment. Instant access.</p>
          </div>

          {/* Trust */}
          <div className="px-6 pb-6 flex justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { icon: "verified_user", text: "Secure" },
              { icon: "bolt", text: "Instant" },
              { icon: "star", text: "Top Rated" }
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">{t.icon}</span>
                <span className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">{t.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-[#1a120b] border-t border-gray-100 dark:border-gray-800 p-4 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
          <button onClick={handleYes} className="w-full bg-[#ec6d13] hover:bg-orange-600 text-white font-bold text-lg py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 mb-4 group">
            Yes! Give Me Everything — $37
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button onClick={handleNo} className="block w-full text-center text-sm font-medium text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
            No thanks, I'll figure it out on my own.
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownsellTwo;
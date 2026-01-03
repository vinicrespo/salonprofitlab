import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants';

const DownsellOne: React.FC = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/upsell-2');
  };

  const handleNo = () => {
    navigate('/upsell-2');
  };

  return (
    <div className="bg-[#f8f7f6] dark:bg-[#221810] font-display text-[#2D2D2D] dark:text-[#fcfaf8] antialiased overflow-x-hidden min-h-screen">
      <div className="relative flex h-full w-full max-w-md mx-auto flex-col min-h-screen shadow-2xl bg-[#f8f7f6] dark:bg-[#221810]">
        {/* Alert Header */}
        <div className="sticky top-0 z-50 bg-white dark:bg-[#2a1e16] border-b border-[#ec6d13]/20 shadow-sm p-4">
          <div className="flex items-center justify-center gap-2 text-[#ec6d13] font-bold animate-pulse">
            <span className="material-symbols-outlined filled text-[24px]">error</span>
            <span className="uppercase tracking-wide text-sm">WAIT — Don't Leave Empty Handed!</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col px-4 pb-32 pt-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold leading-tight text-[#2D2D2D] dark:text-white mb-3">
              Get The Video Masterclass For Just <span className="text-[#ec6d13]">$27</span>
            </h1>
            <p className="text-base font-normal leading-relaxed text-[#2D2D2D]/80 dark:text-gray-300">
              <span className="font-bold text-[#ec6d13]">One-time offer:</span> Grab the complete S.C.A.L.E. video training library at 70% off before you go.
            </p>
          </div>

          <div className="bg-white dark:bg-[#2a1e16] rounded-xl shadow-soft p-4 border border-[#e7d9cf]/50 dark:border-gray-700 mb-6">
            <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-inner group">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${IMAGES.downsell1.laptop}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-3 pl-4 shadow-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[#ec6d13] text-4xl">play_arrow</span>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#ec6d13] text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                70% OFF
              </div>
            </div>

            <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-white mb-3 px-1">What's Inside The Masterclass:</h3>
            <div className="space-y-3">
              {['3-Hour S.C.A.L.E. Strategy Videos', 'Audio Downloads for on-the-go listening', 'Exclusive Digital Workbook PDF', 'Lifetime Access Included'].map((item, i) => (
                <label key={i} className="flex gap-x-3 items-start cursor-pointer group">
                  <div className="relative flex items-center">
                    <input defaultChecked disabled type="checkbox" className="peer h-5 w-5 rounded-full border-2 border-[#ec6d13]/30 bg-transparent text-[#ec6d13] checked:bg-[#ec6d13] checked:border-[#ec6d13] focus:ring-0 focus:ring-offset-0" />
                  </div>
                  <p className="text-[#2D2D2D]/90 dark:text-gray-200 text-sm font-medium leading-tight pt-0.5">{item}</p>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-[#F5E6E0] dark:bg-[#3a2e26] rounded-xl p-6 text-center mb-6 border border-[#ec6d13]/10">
            <p className="text-[#2D2D2D]/60 dark:text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">Total Value</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-gray-500 dark:text-gray-500 text-xl font-bold line-through decoration-red-500/50 decoration-2">$97.00</span>
              <span className="material-symbols-outlined text-[#ec6d13] text-xl">arrow_forward</span>
              <span className="text-[#ec6d13] text-4xl font-extrabold tracking-tight">$27.00</span>
            </div>
            <p className="text-xs text-[#2D2D2D]/50 dark:text-gray-400 mt-2">Save $70.00 instantly</p>
          </div>

          <div className="flex items-start gap-3 bg-white dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-white/10 mb-8">
            <div className="shrink-0 rounded-full h-10 w-10 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('${IMAGES.downsell1.portrait}')` }}></div>
            <div>
              <div className="flex text-[#C9A227] text-xs mb-1">
                {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined text-[14px] filled">star</span>)}
              </div>
              <p className="text-xs italic text-[#2D2D2D]/80 dark:text-gray-300">"The video format made it so much easier for me to train my team. Worth every penny!"</p>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 w-full max-w-md bg-white dark:bg-[#221810] border-t border-gray-100 dark:border-gray-800 p-4 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md bg-white/90 dark:bg-[#221810]/95">
          <button onClick={handleYes} className="w-full bg-[#ec6d13] hover:bg-[#ec6d13]/90 text-white font-bold text-lg py-4 px-6 rounded-full shadow-glow transition-all active:scale-[0.98] flex items-center justify-center gap-2 mb-4">
            <span>YES! Add to Order — $27</span>
            <span className="material-symbols-outlined">check_circle</span>
          </button>
          <button onClick={handleNo} className="block w-full text-center text-sm font-medium text-gray-400 hover:text-[#2D2D2D] dark:hover:text-white underline decoration-gray-300 underline-offset-4 transition-colors">
            No thanks, I really don't want the videos.
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-4 opacity-60">
            <span className="material-symbols-outlined text-[12px] text-[#2D2D2D] dark:text-gray-400">lock</span>
            <span className="text-[10px] text-[#2D2D2D] dark:text-gray-400 font-medium uppercase tracking-wider">Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownsellOne;
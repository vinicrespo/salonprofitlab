import React from 'react';

interface FinalCTAProps {
    onBuy: (plan: 'basic' | 'complete') => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onBuy }) => {
    return (
        <section className="py-16 px-4 bg-[#2D2D2D]">
            <div className="max-w-2xl mx-auto text-center">
                <div className="space-y-5 text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                    <p>You can keep doing what you're doing.</p>
                    <p>Working longer. Hoping things get better. Telling yourself <em>"next month will be different."</em></p>
                    <p className="text-white font-medium">
                        Or you can spend the next 30 days actually understanding where your profit is going — and getting it back.
                    </p>
                    <p className="text-[#C9A227] font-semibold text-lg">
                        For less than two tubes of color.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => onBuy('complete')}
                        className="w-full sm:w-auto bg-[#C9A227] text-white text-base font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#B8860B] transition-all transform hover:-translate-y-0.5"
                    >
                        Get The Complete Bundle — $37
                    </button>

                    <span className="text-white/30 text-sm font-medium">OR</span>

                    <button
                        onClick={() => onBuy('basic')}
                        className="w-full sm:w-auto bg-transparent border border-[#C9A227]/50 text-[#C9A227] text-base font-bold py-4 px-10 rounded-full hover:bg-[#C9A227]/10 transition-all"
                    >
                        Start with the Blueprint — $9.90
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;

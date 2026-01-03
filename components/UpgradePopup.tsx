import React from 'react';

interface UpgradePopupProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirmUpgrade: () => void;
    onDeclineUpgrade: () => void;
}

const UpgradePopup: React.FC<UpgradePopupProps> = ({ isOpen, onClose, onConfirmUpgrade, onDeclineUpgrade }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all animate-slide-up relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="bg-[#C9A227] p-6 text-center">
                    <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                        Limited Time Offer
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">
                        Wait! Don't Miss This...
                    </h3>
                    <p className="text-white/90 text-sm">
                        Upgrade to the Complete Bundle for a massive discount!
                    </p>
                </div>

                <div className="p-8">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="text-center opacity-50 scale-90">
                            <div className="text-sm text-gray-500 font-medium mb-1">Regular Price</div>
                            <div className="text-2xl font-bold text-gray-400 line-through decoration-red-500">$37</div>
                        </div>
                        <div className="text-center transform scale-110">
                            <div className="text-sm text-[#C9A227] font-bold mb-1">Your Price</div>
                            <div className="text-4xl font-extrabold text-[#2D2D2D]">$27</div>
                        </div>
                    </div>

                    <div className="space-y-3 mb-8">
                        <p className="text-center text-gray-600 text-sm leading-relaxed">
                            Get everything in the <strong>Complete Bundle</strong> (Roadmaps, Templates, Pricing Guides) for just <strong>$17 more</strong> than the Basic plan.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={onConfirmUpgrade}
                            className="w-full bg-[#C9A227] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#B8860B] hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Yes! Upgrade My Order to $27</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>

                        <button
                            onClick={onDeclineUpgrade}
                            className="w-full bg-transparent text-gray-400 font-medium py-2 text-sm hover:text-gray-600 transition-colors"
                        >
                            No thanks, I'll stick with the Basic Plan for $9.90
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradePopup;

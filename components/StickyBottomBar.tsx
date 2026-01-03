import React from 'react';

interface StickyBottomBarProps {
    onBuy: (plan: 'basic' | 'complete') => void;
}

const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onBuy }) => {
    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.1)] md:hidden z-50">
                <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-medium">Complete Bundle</span>
                        <span className="text-lg font-bold text-[#2D2D2D]">$37</span>
                    </div>
                    <button
                        onClick={() => onBuy('complete')}
                        className="flex-1 bg-[#C9A227] text-white font-bold py-3 px-4 rounded-lg shadow-md active:scale-95 transition-transform"
                    >
                        Find My Profit Leaks
                    </button>
                </div>
            </div>
            <div className="h-[80px] md:hidden"></div>
        </>
    );
};

export default StickyBottomBar;

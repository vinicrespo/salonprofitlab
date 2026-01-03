import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-gray-100 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C9A227] text-3xl">spa</span>
                <h1 className="text-[#2D2D2D] text-lg font-bold tracking-tight">Salon Profit Lab</h1>
            </div>
            <button className="text-[#B8860B] text-sm font-semibold tracking-wide hover:opacity-80 transition">LOGIN</button>
        </nav>
    );
};

export default Navbar;

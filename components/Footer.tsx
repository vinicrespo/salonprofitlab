import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8 px-6 border-t border-gray-100">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-gray-400">
                <span>© 2026 Salon Profit Lab</span>
                <div className="flex gap-4">
                    <a className="hover:text-gray-600 transition" href="#">Terms</a>
                    <a className="hover:text-gray-600 transition" href="#">Privacy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

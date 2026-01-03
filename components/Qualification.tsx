import React from 'react';

const Qualification: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-[#FAF8F5]">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-l-green-600 shadow-soft">
                    <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600">check_circle</span>
                        This is for you if:
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "You're generating at least $10k/year (we need something to optimize)",
                            "You're willing to try new systems, even if they feel uncomfortable at first",
                            "You're done being the \"hero\" who saves every fire",
                            "You want a business that works FOR you, not because of you"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="material-symbols-outlined text-green-600 text-lg shrink-0 mt-0.5">check</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-l-red-500 shadow-soft">
                    <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                        <span className="material-symbols-outlined text-red-500">cancel</span>
                        This is NOT for you if:
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "You're looking for a \"get rich quick\" scheme",
                            "You're not willing to make any changes to how you operate",
                            "You rent a booth or work solo (this is for salon OWNERS with staff)",
                            "You think raising prices is \"greedy\""
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="material-symbols-outlined text-red-500 text-lg shrink-0 mt-0.5">close</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Qualification;

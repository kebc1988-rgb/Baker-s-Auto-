import React from 'react';
import { ScanSearch, ShieldCheck, FileBarChart } from 'lucide-react';

const KeyValues: React.FC = () => {
  const features = [
    {
      icon: <ScanSearch size={28} className="text-blue-400" />,
      title: "Advanced Diagnostics",
      description: "OEM-level scanning tools that read beyond standard error codes."
    },
    {
      icon: <ShieldCheck size={28} className="text-cyan-400" />,
      title: "Certified Specialists",
      description: "ASE Master Technicians trained on modern hybrid and electric systems."
    },
    {
      icon: <FileBarChart size={28} className="text-purple-400" />,
      title: "Digital Transparency",
      description: "Receive detailed digital reports with photos and data before approval."
    }
  ];

  return (
    <section className="bg-navy-900 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10"
            >
              <div className="mb-6 p-4 bg-navy-900 w-fit rounded-xl border border-white/5 group-hover:border-blue-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyValues;
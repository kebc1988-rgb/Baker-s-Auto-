import React from 'react';
import { Search, PenTool, CheckCircle2 } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Analyze',
      icon: <Search size={24} />,
      desc: 'We perform a digital multi-point inspection and run diagnostic tests.'
    },
    {
      num: '02',
      title: 'Execute',
      icon: <PenTool size={24} />,
      desc: 'Expert repair implementation using OEM parts and calibrated tools.'
    },
    {
      num: '03',
      title: 'Verify',
      icon: <CheckCircle2 size={24} />,
      desc: 'Post-repair road tests and quality control validation checks.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">The Workflow</h2>
          <p className="text-slate-400">Systematic repair protocol ensuring reliability.</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-900 via-blue-500/50 to-blue-900 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-navy-800 border-4 border-navy-900 flex items-center justify-center mb-6 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-[#151e32] flex items-center justify-center text-blue-400">
                  {step.icon}
                </div>
              </div>
              
              <div className="text-xs font-mono text-blue-500 mb-2">STEP {step.num}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
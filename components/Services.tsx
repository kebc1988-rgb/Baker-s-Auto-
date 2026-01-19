import React from 'react';
import { Wrench, Zap, Gauge, Disc, Droplets, Thermometer, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { 
      id: "DIAG",
      name: "Computer Diagnostics", 
      icon: <Zap size={20} />, 
      status: "Online", 
      trend: "+98%" 
    },
    { 
      id: "SUSP",
      name: "Suspension & Steering", 
      icon: <Gauge size={20} />, 
      status: "Active", 
      trend: "Precise" 
    },
    { 
      id: "BRAK",
      name: "Brake Systems", 
      icon: <Disc size={20} />, 
      status: "Safety", 
      trend: "Critical" 
    },
    { 
      id: "FLUD",
      name: "Fluid Exchange", 
      icon: <Droplets size={20} />, 
      status: "Routine", 
      trend: "Optimal" 
    },
    { 
      id: "HVAC",
      name: "A/C & Heating", 
      icon: <Thermometer size={20} />, 
      status: "Climate", 
      trend: "Stable" 
    },
    { 
      id: "MECH",
      name: "Engine Repair", 
      icon: <Wrench size={20} />, 
      status: "Core", 
      trend: "Expert" 
    },
  ];

  return (
    <section id="services" className="py-24 bg-navy-800 relative overflow-hidden">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Service Capabilities</h2>
            <p className="text-slate-400 max-w-lg">Comprehensive automotive solutions executed with technical excellence.</p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-semibold transition-colors">
            View Full Service Map <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group glass-panel rounded-xl p-5 hover:bg-navy-700/50 transition-all duration-300 cursor-pointer border border-white/5 hover:border-blue-500/40"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-navy-900 text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">{service.id}</div>
                    <div className="text-lg font-bold text-white group-hover:text-blue-100">{service.name}</div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${service.trend.includes('%') ? 'bg-green-500/20 text-green-400' : 'bg-slate-700/50 text-slate-300'}`}>
                  {service.trend}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                <span className="text-xs text-slate-500">Status</span>
                <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {service.status}
                </span>
              </div>
              
              {/* Decorative mini-chart line */}
              <div className="mt-[-1px] w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
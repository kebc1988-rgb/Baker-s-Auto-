import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Cpu } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: '10:00', uv: 4000, pv: 2400 },
  { name: '10:05', uv: 3000, pv: 1398 },
  { name: '10:10', uv: 2000, pv: 9800 },
  { name: '10:15', uv: 2780, pv: 3908 },
  { name: '10:20', uv: 1890, pv: 4800 },
  { name: '10:25', uv: 2390, pv: 3800 },
  { name: '10:30', uv: 3490, pv: 4300 },
  { name: '10:35', uv: 4000, pv: 2400 },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            System Online
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Precision Driven. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Data Verified.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Stop guessing. We utilize advanced telemetry and OEM-grade diagnostics to identify issues with algorithmic precision. Your vehicle, repaired with engineering accuracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                Book a Diagnostic <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-colors">
              View Capabilities
            </button>
          </div>
        </motion.div>

        {/* Right: Futuristic Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
        >
          {/* Rotating Rings */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-slate-700/50 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]" />

          {/* Central Card - Looks like a trading/diagnostic card */}
          <div className="relative glass-panel rounded-2xl p-5 w-[320px] shadow-2xl border-t border-blue-500/20">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-sm text-slate-400">Engine Efficiency</h3>
                <p className="text-2xl font-bold text-white flex items-center gap-2">
                  98.4% <span className="text-xs text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+2.4%</span>
                </p>
              </div>
              <Activity className="text-blue-500" />
            </div>
            
            <div className="h-[120px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#60a5fa' }}
                    cursor={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <Area type="monotone" dataKey="uv" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">ECU Response</span>
                <span className="text-cyan-400">12ms</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full w-[92%] shadow-[0_0_10px_#06b6d4]"></div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Intake Pressure</span>
                <span className="text-blue-400">14.7 PSI</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[78%] shadow-[0_0_10px_#3b82f6]"></div>
              </div>
            </div>
          </div>

          {/* Floating Widget 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-20 glass-panel p-3 rounded-xl flex items-center gap-3 border-l-2 border-green-400"
          >
            <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
              <Cpu size={18} />
            </div>
            <div>
              <div className="text-xs text-slate-400">Systems</div>
              <div className="text-sm font-bold">Optimal</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
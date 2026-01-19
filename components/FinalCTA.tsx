import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-navy-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-blue-500/20 shadow-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Schedule your diagnostic today and experience the future of automotive care. Precision, transparency, and performance guaranteed.
          </p>

          <form className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1 ml-1">CONTACT EMAIL</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full bg-navy-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-xs font-medium text-slate-500 mb-1 ml-1">VEHICLE MAKE</label>
                <input 
                  type="text" 
                  placeholder="e.g. BMW" 
                  className="w-full bg-navy-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                />
               </div>
               <div>
                <label className="block text-xs font-medium text-slate-500 mb-1 ml-1">YEAR</label>
                <input 
                  type="text" 
                  placeholder="2020" 
                  className="w-full bg-navy-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                />
               </div>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg mt-4 shadow-lg shadow-blue-600/25 transition-all active:scale-[0.98]">
              Schedule Your Diagnostic
            </button>
          </form>
          
          <p className="mt-6 text-slate-500 text-xs">
            No commitment required. We'll confirm your slot within 2 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050810] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} className="text-blue-500" />
              <span className="text-lg font-bold text-white">BAKER'S AUTO</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Redefining automotive care through technology and transparency.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">SERVICES</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Diagnostics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Performance Tuning</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Electrical Systems</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hybrid Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">COMPANY</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">CONNECT</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
            <div className="text-sm text-slate-500">
              <p>1200 Tech Drive, Suite 100</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-2 text-blue-400">(415) 555-0123</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Baker's Automotive Specialist. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Designed for Precision.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
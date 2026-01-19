import React from 'react';
import { Star } from 'lucide-react';

const TrustProof: React.FC = () => {
  const reviews = [
    {
      name: "Marcus Chen",
      role: "Tesla Owner",
      text: "Baker's approach is unlike any shop I've been to. They showed me the live data stream from my car's ECU before recommending the fix. Total transparency.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Fleet Manager",
      text: "We trust our entire delivery fleet to Baker's. Their turnaround time is precise, and the digital reports make my job incredibly easy.",
      rating: 5
    },
    {
      name: "David O'Connor",
      role: "Audi Enthusiast",
      text: "Finding a shop that understands complex German engineering is hard. These guys are surgeons. The car runs better than new.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-navy-800 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
             <h2 className="text-3xl font-bold text-white">Client Experience</h2>
             <div className="flex gap-1 mt-2">
               {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} className="fill-yellow-500 text-yellow-500" />)}
               <span className="text-slate-400 text-sm ml-2">4.9/5 Average Rating</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl relative hover:bg-white/5 transition-colors">
              <div className="absolute top-8 right-8 text-blue-500/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              <p className="text-slate-300 mb-6 relative z-10 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-blue-400 text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProof;
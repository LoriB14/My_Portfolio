
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 2000);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-5xl font-display font-black tracking-tighter uppercase text-white">Contact Me</h2>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-red-600/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-display font-black text-white mb-6 uppercase tracking-tight">Let's Discuss Your Next Project</h3>
            <p className="text-blue-100 leading-relaxed max-w-lg text-lg">
              I'm always looking for interesting engineering challenges. Whether you're a startup or a global firm, let's build something exceptional together.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="group flex items-center gap-6 cursor-pointer p-4 hover:bg-white/5 transition-colors border border-white/10">
              <div className="w-14 h-14 bg-slate-900 flex items-center justify-center group-hover:border-red-600 transition-all border border-white/20 text-2xl text-white">✉️</div>
              <div>
                <p className="text-[9px] font-bold text-white/60 uppercase tracking-[0.3em] mb-1">Direct Email</p>
                <p className="font-display font-bold text-white group-hover:text-red-500 transition-colors">lori@battouk.com</p>
              </div>
            </div>
            <div className="group flex items-center gap-6 cursor-pointer p-4 hover:bg-white/5 transition-colors border border-white/10">
              <div className="w-14 h-14 bg-slate-900 flex items-center justify-center group-hover:border-sky-500 transition-all border border-white/20 text-2xl text-white">🔗</div>
              <div>
                <p className="text-[9px] font-bold text-white/60 uppercase tracking-[0.3em] mb-1">Social Hub</p>
                <p className="font-display font-bold text-white group-hover:text-sky-400 transition-colors">linkedin.com/in/loribattouk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-10 border border-white/10 relative backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-sky-400"></div>
          
          {status === 'sent' ? (
            <div className="py-24 text-center">
              <div className="text-6xl mb-6">✅</div>
              <h4 className="text-2xl font-display font-black text-white mb-4 uppercase">Message Received</h4>
              <p className="text-white/80 text-sm">I'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-12 text-[10px] font-black text-red-500 hover:text-white tracking-[0.4em] uppercase underline underline-offset-8 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-white/60 uppercase tracking-[0.4em]">Full Name</label>
                <input required type="text" placeholder="EX: CLAUDE SHANNON" className="w-full bg-slate-950 border border-white/10 focus:border-red-600 outline-none p-4 font-display text-xs tracking-widest text-white transition-all placeholder-white/30" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-white/60 uppercase tracking-[0.4em]">Email</label>
                <input required type="email" placeholder="LORI@EXAMPLE.COM" className="w-full bg-slate-950 border border-white/10 focus:border-sky-500 outline-none p-4 font-display text-xs tracking-widest text-white transition-all placeholder-white/30" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-white/60 uppercase tracking-[0.4em]">Message</label>
                <textarea required rows={4} placeholder="WHAT CAN WE BUILD TOGETHER?" className="w-full bg-slate-950 border border-white/10 focus:border-red-600 outline-none p-4 font-display text-xs tracking-widest text-white transition-all resize-none placeholder-white/30"></textarea>
              </div>
              
              <button type="submit" disabled={status === 'sending'} className="w-full bg-white text-slate-950 font-display font-black py-5 uppercase tracking-[0.4em] hover:bg-red-600 hover:text-white transition-all text-sm">
                {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

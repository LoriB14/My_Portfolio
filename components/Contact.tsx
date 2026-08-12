
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/lbattouk@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        alert('Failed to send message. Please try again or email me directly.');
        setStatus('idle');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or email me directly.');
      setStatus('idle');
    }
  };

  return (
    <div className="w-full">
      <SectionHeading index="08" title="Contact" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal direction="left" className="space-y-8">
          <p className="text-white/55 leading-relaxed max-w-md text-sm sm:text-base">
            Have a question, an opportunity, or just want to say hello? My inbox is always open.
          </p>

          <div className="space-y-1">
            <a href="mailto:lbattouk@gmail.com" className="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-fuchsia-400/30 transition-colors">
              <span className="text-fuchsia-300/50 group-hover:text-fuchsia-300 transition-colors"><MailIcon /></span>
              <span className="text-white/70 group-hover:text-white transition-colors text-sm">lbattouk@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/loribattouk/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 py-3 border-b border-white/10 hover:border-purple-400/30 transition-colors">
              <span className="text-purple-300/50 group-hover:text-purple-300 transition-colors"><LinkedInIcon /></span>
              <span className="text-white/70 group-hover:text-white transition-colors text-sm">linkedin.com/in/loribattouk</span>
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          {status === 'sent' ? (
            <div className="py-16 text-center border-b border-white/10">
              <h4 className="text-lg font-display font-medium text-white mb-4">Message received</h4>
              <button
                onClick={() => setStatus('idle')}
                className="text-sm text-white/50 hover:text-white underline underline-offset-4 transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/15 focus:border-fuchsia-400/50 outline-none py-3 text-sm text-white transition-colors placeholder-white/25"
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/15 focus:border-fuchsia-400/50 outline-none py-3 text-sm text-white transition-colors placeholder-white/25"
                />
              </div>
              <div>
                <textarea
                  required
                  rows={3}
                  name="message"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-white/15 focus:border-fuchsia-400/50 outline-none py-3 text-sm text-white transition-colors resize-none placeholder-white/25"
                />
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                type="submit"
                disabled={status === 'sending'}
                className="flex items-center gap-2 text-sm font-medium text-white pt-2"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <span aria-hidden>→</span>
              </motion.button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;

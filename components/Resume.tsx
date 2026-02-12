

import React from 'react';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const Resume: React.FC<ResumeProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300 print:bg-white print:overflow-visible print:fixed print:inset-0 print:z-[200]">
      {/* Print-specific styles for one-page fit */}
      <style>{`
        @media print {
          @page { margin: 0.4cm; size: letter; }
          body { -webkit-print-color-adjust: exact; }
          .no-print { display: none !important; }
          .print-container {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          h1 { font-size: 24pt !important; margin-bottom: 2pt !important; line-height: 1 !important; }
          .subtitle { font-size: 12pt !important; margin-bottom: 2pt !important; }
          .contact-info { font-size: 9pt !important; margin-bottom: 8pt !important; }
          h2 { font-size: 12pt !important; margin-bottom: 4pt !important; margin-top: 8pt !important; border-bottom-width: 1px !important; }
          h3 { font-size: 10pt !important; font-weight: bold !important; }
          .job-meta { font-size: 9pt !important; }
          .text-sm { font-size: 9pt !important; }
          .text-xs { font-size: 8pt !important; }
          ul li { font-size: 9pt !important; line-height: 1.2 !important; margin-bottom: 1pt !important; }
          section { margin-bottom: 4pt !important; }
          .mb-3, .mb-4, .mb-6 { margin-bottom: 4pt !important; }
          ::-webkit-scrollbar { display: none; }
        }
      `}</style>

      <div className="min-h-screen w-full max-w-4xl mx-auto p-4 md:p-12 relative flex items-center justify-center print:p-0 print:block print:h-auto">
        {/* Actions - Hidden in Print */}
        <div className="fixed top-6 right-6 z-[110] flex gap-4 no-print">
          <button
            onClick={onClose}
            className="flex items-center gap-2 bg-fuchsia-600 text-white px-6 py-3 font-display font-bold text-xs tracking-widest uppercase hover:bg-fuchsia-700 transition-colors shadow-[0_0_20px_rgba(192,38,211,0.5)] border border-fuchsia-600"
          >
            Close ✕
          </button>
        </div>

        {/* Resume Sheet */}
        <div className="print-container bg-white text-slate-900 p-6 md:p-10 shadow-2xl max-w-[850px] w-full relative mt-10 md:mt-0 mb-10 print:mt-0 print:mb-0">
          {/* Header */}
          <header className="text-center border-b-2 border-slate-900 pb-2 mb-2 print:pb-1 print:mb-1">
            <h1 className="text-4xl font-serif font-bold text-slate-900 uppercase tracking-widest mb-1">Lori Battouk</h1>
            <div className="subtitle text-lg font-semibold text-slate-700 mb-1">Software Engineer | Full-Stack Developer</div>
            <div className="contact-info flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm font-bold text-slate-700">
              <span className="flex items-center gap-1">Toronto, Ontario</span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span className="flex items-center gap-1">647-395-0688</span>
              <span className="hidden md:inline text-slate-300">|</span>
              <a href="mailto:lbattouk@gmail.com" className="hover:text-fuchsia-600 transition-colors flex items-center gap-1">lbattouk@gmail.com</a>
              <span className="hidden md:inline text-slate-300">|</span>
              <a href="https://linkedin.com/in/LoriBattouk" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors flex items-center gap-1">linkedin.com/in/LoriBattouk</a>
              <span className="hidden md:inline text-slate-300">|</span>
              <a href="https://github.com/LoriB14" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">github.com/LoriB14</a>
            </div>
          </header>

          {/* Education */}
          <section className="mb-3">
            <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1 tracking-wider text-slate-800">Education</h2>
            <div className="mb-1">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline font-bold text-slate-900">
                <h3 className="text-base">York University, Lassonde School of Engineering</h3>
                <span className="text-sm text-slate-600 job-meta">Toronto, ON</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline text-slate-700 italic">
                <p className="text-sm md:text-base">B.A. Specialized Honours in Computer Science</p>
                <span className="text-sm job-meta">Sep 2024 – Present</span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-3">
            <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1 tracking-wider text-slate-800">Experience</h2>
            {/* Pegasus */}
            <div className="mb-2">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline font-bold text-slate-900">
                <h3 className="text-base">Lead Web Developer</h3>
                <span className="text-sm text-slate-600 job-meta">Dec 2025 – Present</span>
              </div>
              <div className="text-slate-700 italic mb-1 text-sm">Pegasus Liquidation | Aurora, Ontario</div>
              <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-0.5">
                <li>Designed and developed a full-stack e-commerce platform using <b>Next.js</b>, establishing the company’s first digital storefront.</li>
                <li>Integrated <b>Stripe API</b> to implement secure payment processing and transaction workflows.</li>
                <li>Built backend services with <b>Supabase</b>, including database schema design, user authentication, and secure data handling.</li>
                <li>Managed domain configuration, deployment, and ongoing feature updates as the sole technical lead for digital operations.</li>
              </ul>
            </div>
            {/* Qupay */}
            <div className="mb-2">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline font-bold text-slate-900">
                <h3 className="text-base">Research Consultant (Fintech)</h3>
                <span className="text-sm text-slate-600 job-meta">Jan 2026 – Present</span>
              </div>
              <div className="text-slate-700 italic mb-1 text-sm">Qupay Consulting Project | Remote</div>
              <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-0.5">
                <li>Conducted structured interviews with small business owners to analyze payment workflows and identify friction points in existing financial tools.</li>
                <li>Organized interview insights and shared key findings with founders to guide product improvements.</li>
              </ul>
            </div>
            {/* Wellness Group */}
            <div className="mb-2">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline font-bold text-slate-900">
                <h3 className="text-base">Administrative Assistant (IT Support)</h3>
                <span className="text-sm text-slate-600 job-meta">June 2022 – Present</span>
              </div>
              <div className="text-slate-700 italic mb-1 text-sm">The Wellness Group Aurora | Aurora, Ontario</div>
              <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-0.5">
                <li>Provided administrative and technical support in a healthcare clinic, troubleshooting software, printer, and network issues.</li>
                <li>Assisted in transitioning from paper-based records to digital systems, improving organization and workflow efficiency.</li>
              </ul>
            </div>
            {/* Home Depot */}
            <div className="mb-2">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline font-bold text-slate-900">
                <h3 className="text-base">Special Services Desk Associate</h3>
                <span className="text-sm text-slate-600 job-meta">June 2023 – Sept 2025</span>
              </div>
              <div className="text-slate-700 italic mb-1 text-sm">Home Depot Aurora | Aurora, Ontario</div>
              <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-0.5">
                <li>Resolved order management and pricing discrepancies using internal POS and inventory systems.</li>
                <li>Supported high-volume transactions and coordinated across departments to ensure accurate order fulfillment.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-3">
            <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1 tracking-wider text-slate-800">Projects</h2>
            <div className="mb-1">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline font-bold text-slate-900">
                <h3 className="text-base">6ixAssist — AI-Powered Resource Finder <span className="text-sm font-normal text-slate-500 mx-2">| React, TypeScript, Gemini API, OpenStreetMap</span></h3>
                <span className="text-xs text-slate-500 italic">Nov 2025</span>
              </div>
              <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-0.5">
                <li>Won <b>1st Place</b> at ElleHacks for designing and building an AI-powered community resource finder.</li>
                <li>Built a web app that helps users locate nearby food banks, shelters, and community services using natural-language input.</li>
                <li>Integrated Gemini API for NLP and OpenStreetMap for geolocation and routing within a responsive React interface.</li>
              </ul>
            </div>
            <div className="mb-1">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline font-bold text-slate-900">
                <h3 className="text-base">PackPal — AI Travel Packing Assistant <span className="text-sm font-normal text-slate-500 mx-2">| Next.js, TypeScript, PostgreSQL</span></h3>
                <span className="text-xs text-slate-500 italic">Oct 2025 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-0.5">
                <li>Built a web app that generates packing lists based on destination, weather, and trip length.</li>
                <li>Worked with APIs and a database to store user trips and preferences.</li>
                <li>Handled frontend logic, backend data flow, and deployment for a complete working product.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-3">
            <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1 tracking-wider text-slate-800">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-700">
              <div><b>Languages:</b> Python, Java, C, JavaScript, TypeScript, SQL</div>
              <div><b>Frontend:</b> Next.js, React, Tailwind CSS, HTML/CSS</div>
              <div><b>Backend:</b> Node.js, FastAPI, Supabase, REST APIs</div>
              <div><b>Databases:</b> PostgreSQL, Supabase, SQLite</div>
              <div><b>Cloud:</b> AWS (ECS, S3), Docker, Terraform</div>
              <div><b>Auth & Payments:</b> JWT/OAuth, Stripe API</div>
              <div><b>Testing:</b> Pytest, Locust, GitHub Actions</div>
              <div><b>Tools:</b> Git, Linux, VS Code, Vercel</div>
            </div>
          </section>

          {/* Leadership / Extracurricular */}
          <section>
            <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-2 pb-1 tracking-wider text-slate-800">Leadership / Extracurricular</h2>
            <div className="mb-1">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline font-bold text-slate-900">
                <h3 className="text-base">Homenetmen Toronto</h3>
                <span className="text-sm text-slate-600 job-meta">2020 – Present</span>
              </div>
              <div className="text-slate-700 italic mb-1 text-sm">Scout Leader / General Member</div>
              <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-0.5">
                <li>Organized and led group activities and workshops, developing leadership, communication, and teamwork skills.</li>
                <li>Mentored younger members and coordinated events, strengthening organization and group management skills.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;

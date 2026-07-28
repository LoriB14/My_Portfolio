
import React from 'react';

interface BrowserFrameProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

/**
 * A minimal browser-chrome shell for presenting project screenshots as
 * "live app" visuals instead of bare cropped images. Purely decorative —
 * three muted dots and an optional url-style label.
 */
const BrowserFrame: React.FC<BrowserFrameProps> = ({ children, label, className = '' }) => {
  return (
    <div className={`rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] ${className}`}>
      <div className="flex items-center gap-4 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
        </div>
        {label && (
          <span className="text-[11px] text-white/25 font-mono truncate">{label}</span>
        )}
      </div>
      {children}
    </div>
  );
};

export default BrowserFrame;

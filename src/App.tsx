import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-lab-dark flex flex-col items-center justify-center p-6 text-gray-200">
      <div className="max-w-4xl w-full glass rounded-xl overflow-hidden shadow-2xl border-white/10">
        {/* Header */}
        <header className="bg-lab-navy border-b border-lab-cyan/30 p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lab-cyan to-lab-gold"></div>
          <h1 className="text-5xl font-mono text-white mb-3 tracking-widest uppercase">LCK LAB</h1>
          <p className="text-lab-cyan font-mono tracking-widest text-sm">Advanced Automation & Analytics</p>
        </header>

        {/* Content */}
        <div className="p-10 space-y-8 bg-lab-navy/50">
          <section>
            <h2 className="text-2xl font-sans text-lab-gold mb-6 border-b border-white/10 pb-3 flex items-center justify-between">
              <span>DESIGN SYSTEM COMPONENTS</span>
              <span className="text-xs text-lab-gray font-mono">v1.0.0</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <button className="px-6 py-4 bg-lab-cyan/10 border border-lab-cyan text-lab-cyan rounded-md font-mono hover:bg-lab-cyan hover:text-lab-navy transition-all glow-cyan uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-current inline-block animate-pulse"></span>
                Execute Task
              </button>
              <button className="px-6 py-4 bg-lab-gold/10 border border-lab-gold text-lab-gold rounded-md font-sans hover:bg-lab-gold hover:text-lab-navy transition-all uppercase tracking-wider text-sm">
                Premium Feature
              </button>
            </div>
            
            <div className="p-6 glass rounded-lg border-l-4 border-l-lab-cyan space-y-3">
              <h3 className="text-white font-sans text-lg">System Status: <span className="text-lab-cyan animate-pulse">Online</span></h3>
              <p className="text-lab-gray font-sans text-sm leading-relaxed">
                This is a preview of the NDB LCK Lab design system. It uses <code className="font-mono text-lab-cyan bg-black/30 px-1 rounded">Deep Navy</code> for backgrounds, and <code className="font-mono text-lab-gold bg-black/30 px-1 rounded">Electric Cyan & Gold</code> for accents. 
                The layout follows a glassmorphic aesthetic appropriate for a high-tech AI research laboratory.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

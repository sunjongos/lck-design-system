
import { Button } from './components/ui/Button';
import { GlassCard } from './components/ui/GlassCard';
import { Badge } from './components/ui/Badge';
import { Activity, Cpu, Fingerprint, Database, ChevronRight, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative font-sans selection:bg-lab-cyan selection:text-lab-navy">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lab-cyan opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lab-gold opacity-[0.03] blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
        
        {/* Header Section */}
        <header className="flex flex-col items-center justify-center text-center space-y-6">
          <Badge variant="cyan" className="animate-pulse">SYSTEM ONLINE v1.0.0</Badge>
          <img src="/lck-logo.png" alt="LCK Lab Logo" className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.3)] object-cover bg-black/50 border border-white/10" />
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter text-white">
              LCK <span className="gradient-text from-lab-cyan to-blue-500">LAB</span>
            </h1>
            <p className="text-xl text-lab-gray font-mono tracking-[0.2em] uppercase">
              Design System Showcase
            </p>
          </div>
          <p className="max-w-2xl text-lab-gray/80 text-lg leading-relaxed">
            A high-end, futuristic design system tailored for elite AI research automation and enterprise medical intelligence platforms. Complete with dark mode base and dynamic accent lighting.
          </p>
        </header>

        {/* Content Section: 2 Columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Palette & Typography */}
          <div className="lg:col-span-5 space-y-8">
            <GlassCard glowColor="none" className="p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Sparkles className="w-5 h-5 text-lab-gold" />
                <h2 className="text-xl tracking-widest font-mono text-white uppercase">Color Palette</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-lab-navy border border-white/10 shadow-inner"></div>
                  <p className="font-mono text-xs text-lab-gray">Deep Navy (Base)</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-lab-dark border border-white/10 shadow-inner"></div>
                  <p className="font-mono text-xs text-lab-gray">Dark (Background)</p>
                </div>
                <div className="space-y-2 group">
                  <div className="h-16 rounded-md bg-lab-cyan glow-cyan-hover transition-all duration-300"></div>
                  <p className="font-mono text-xs text-lab-cyan">Electric Cyan</p>
                </div>
                <div className="space-y-2 group">
                  <div className="h-16 rounded-md bg-lab-gold glow-gold-hover transition-all duration-300"></div>
                  <p className="font-mono text-xs text-lab-gold">Premium Gold</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="none" className="p-8 space-y-6">
               <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Fingerprint className="w-5 h-5 text-lab-cyan" />
                <h2 className="text-xl tracking-widest font-mono text-white uppercase">Typography</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-xs text-lab-gray mb-1">Heading / Display (Roboto Mono/Inter)</p>
                  <h1 className="text-4xl font-bold text-white">Futuristic.</h1>
                </div>
                <div>
                  <p className="font-mono text-xs text-lab-gray mb-1">Body (Pretendard)</p>
                  <p className="text-base text-lab-gray/90 leading-relaxed">
                    초정밀 데이터 분석 및 AI 모델링 플랫폼에 최적화된 높은 가독성과 전문성을 제공합니다.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Components Area */}
          <div className="lg:col-span-7 space-y-8">
            <GlassCard glowColor="cyan" className="p-8 space-y-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Cpu className="w-5 h-5 text-lab-cyan" />
                <h2 className="text-xl tracking-widest font-mono text-white uppercase">Core Components</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono text-lab-gray mb-4">Interactive Buttons</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="cyan">
                      Execute Node
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="gold">
                      Deploy Master
                    </Button>
                    <Button variant="default">
                      Cancel
                    </Button>
                    <Button variant="ghost">Read Logs</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-mono text-lab-gray mb-4">Status Badges</h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="cyan">AI.READY</Badge>
                    <Badge variant="gold">PREMIUM.TIER</Badge>
                    <Badge variant="outline">OFFLINE</Badge>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="gold" className="p-8 space-y-6 relative overflow-hidden">
               <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                 <Database className="w-64 h-64 text-lab-gold translate-x-1/3 -translate-y-1/3" />
               </div>
               <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-lab-gold" />
                  <h2 className="text-xl tracking-widest font-mono text-white uppercase">Data Widget Example</h2>
                </div>
                <Badge variant="gold">LIVE</Badge>
              </div>
              
              <div className="relative z-10 grid grid-cols-3 gap-4">
                 <div className="p-4 bg-black/40 rounded-lg border border-white/5 space-y-1">
                   <p className="text-xs text-lab-gray font-mono">QPS</p>
                   <p className="text-2xl text-lab-cyan font-mono tracking-wider">1,402</p>
                 </div>
                 <div className="p-4 bg-black/40 rounded-lg border border-white/5 space-y-1">
                   <p className="text-xs text-lab-gray font-mono">LATENCY</p>
                   <p className="text-2xl text-white font-mono tracking-wider">12ms</p>
                 </div>
                 <div className="p-4 bg-black/40 rounded-lg border border-white/5 space-y-1">
                   <p className="text-xs text-lab-gray font-mono">ACCURACY</p>
                   <p className="text-2xl text-lab-gold font-mono tracking-wider text-glow-cyan">99.8%</p>
                 </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

// Overview / Agents / Analytics screens + App root
const SAMPLE_SPARK = [12, 18, 15, 22, 28, 24, 32, 38, 34, 42, 48, 44, 52, 50, 58, 62, 60, 68, 72, 70];
const SAMPLE_SPARK2 = [80, 78, 82, 76, 74, 78, 72, 70, 68, 72, 66, 64, 62, 60, 58, 56, 54, 52, 50, 48];

function Overview() {
  const [logs, setLogs] = React.useState([
    { time: '12:04:33', level: 'ok', msg: 'agent.run id=0x8AF1 started · nodes=12' },
    { time: '12:04:34', level: 'info', msg: 'dataset load: cohort.medi_k / 12,401 rows' },
    { time: '12:04:36', level: 'cyan', msg: 'inference.latency=12ms · accuracy=99.80%' },
    { time: '12:04:41', level: 'ok', msg: 'checkpoint stored s3://lck/runs/0x8AF1/c01' },
    { time: '12:04:49', level: 'warn', msg: 'node-07 queue depth=142 (threshold=100)' },
    { time: '12:04:52', level: 'ok', msg: 'auto-scale +2 workers → node-07' },
    { time: '12:05:01', level: 'info', msg: 'gradient.update step=4,120 loss=0.0142' },
  ]);
  return (
    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Hero HUD */}
      <GlassCard glow="cyan" className="lb-grid-bg" style={{ padding: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.28em', color: 'var(--lab-cyan)' }}>SYSTEM / LIVE</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 42, fontWeight: 700, letterSpacing: '-.02em', color: 'var(--fg-0)', marginTop: 4, lineHeight: 1 }}>
              Research ops, <span className="glow-text-cyan" style={{ color: 'var(--lab-cyan)' }}>in flight.</span>
            </div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', marginTop: 10, maxWidth: 560, lineHeight: 1.5 }}>
              12 agents online, processing 1.4K inferences/sec across 3 active cohorts. Master pipeline stable.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="cyan">Execute Node <Icon name="chevron-right" size={14} /></Button>
            <Button variant="gold">Deploy Master</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 24 }}>
          <MetricTile label="QPS" value="1,402" accent="cyan" delta="▲ 3.2%" deltaColor="green" />
          <MetricTile label="Latency" value="12" unit="ms" accent="white" delta="▼ 1.1%" deltaColor="green" />
          <MetricTile label="Accuracy" value="99.8" unit="%" accent="gold" sub="N=12,401" />
          <MetricTile label="Uptime" value="99.99" unit="%" accent="white" sub="30-day" />
        </div>
      </GlassCard>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
        <GlassCard glow="none" style={{ padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-hairline)', paddingBottom: 12, marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon name="activity" size={16} color="var(--lab-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.22em', color: 'var(--fg-0)', textTransform: 'uppercase' }}>Inference Throughput · 24h</span>
            </div>
            <Badge variant="cyan" dot>LIVE</Badge>
          </div>
          <div style={{ position: 'relative', height: 180 }}>
            <MiniChart data={SAMPLE_SPARK} width={680} height={180} color="#00E5FF" />
            <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
              <span className="lb-readout" style={{ fontSize: 28, color: 'var(--lab-cyan)', fontWeight: 700 }}>+18.4%</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-2)' }}>vs yesterday</span>
            </div>
          </div>
        </GlassCard>
        <GlassCard glow="gold" style={{ padding: 22, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -40, top: -40, opacity: 0.08, pointerEvents: 'none' }}>
            <Icon name="database" size={220} color="var(--lab-gold)" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-hairline)', paddingBottom: 12, marginBottom: 14, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon name="sparkles" size={16} color="var(--lab-gold)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.22em', color: 'var(--fg-0)', textTransform: 'uppercase' }}>Premium Cohort</span>
            </div>
            <Badge variant="gold">MASTER</Badge>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-2)', textTransform: 'uppercase' }}>Active Study</div>
              <div style={{ fontSize: 18, color: 'var(--fg-0)', fontWeight: 600, marginTop: 4 }}>cohort.medi_k · retinal</div>
            </div>
            <div style={{ display: 'flex', gap: 18 }}>
              <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-2)' }}>PATIENTS</div><div className="lb-readout" style={{ fontSize: 22, color: 'var(--lab-gold)', fontWeight: 700 }}>12,401</div></div>
              <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-2)' }}>SITES</div><div className="lb-readout" style={{ fontSize: 22, color: 'var(--fg-0)', fontWeight: 700 }}>34</div></div>
            </div>
            <Button variant="gold" size="sm" style={{ alignSelf: 'flex-start' }}>Export Report</Button>
          </div>
        </GlassCard>
      </div>

      {/* Log stream */}
      <GlassCard style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-hairline)', paddingBottom: 12, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="terminal" size={16} color="var(--fg-2)" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.22em', color: 'var(--fg-0)', textTransform: 'uppercase' }}>Run Log · tail</span>
          </div>
          <Badge variant="outline">7 events</Badge>
        </div>
        <LogStream lines={logs} />
      </GlassCard>
    </div>
  );
}

function AgentsScreen() {
  const agents = [
    { id: '0x8AF1-0042', name: 'medi-inference-primary',   status: 'live',    lastRun: '12s ago',    qps: '412' },
    { id: '0x8AF1-0043', name: 'medi-inference-secondary', status: 'live',    lastRun: '14s ago',    qps: '388' },
    { id: '0x3B21-0018', name: 'cohort-extract-k',         status: 'deploy',  lastRun: '2m ago',     qps: '124' },
    { id: '0x3B21-0019', name: 'cohort-extract-j',         status: 'idle',    lastRun: '14m ago',    qps: '0' },
    { id: '0x9C02-0001', name: 'retina-segment-v2',        status: 'live',    lastRun: '3s ago',     qps: '298' },
    { id: '0x9C02-0002', name: 'retina-segment-v3-beta',   status: 'error',   lastRun: '8m ago',     qps: '0' },
    { id: '0x1F00-0007', name: 'auto-report-writer',       status: 'offline', lastRun: '2d ago',     qps: '—' },
  ];
  const [sel, setSel] = React.useState(agents[0].id);
  return (
    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.28em', color: 'var(--lab-cyan)' }}>AGENTS / 7 NODES</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: 'var(--fg-0)', letterSpacing: '-.02em', marginTop: 4 }}>Agent fleet.</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="ghost" size="sm"><Icon name="filter" size={13} /> Filter</Button>
          <Button variant="cyan" size="sm">+ New Agent</Button>
        </div>
      </div>
      <GlassCard style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr 120px 110px 80px 40px', gap: 14, padding: '12px 16px', borderBottom: '1px solid var(--border-default)', background: 'rgba(0,0,0,0.25)' }}>
          <span></span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>NODE</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>STATUS</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>LAST RUN</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-3)', textTransform: 'uppercase', textAlign: 'right' }}>QPS</span>
          <span></span>
        </div>
        {agents.map(a => <AgentRow key={a.id} {...a} selected={sel === a.id} onSelect={() => setSel(a.id)} />)}
      </GlassCard>
    </div>
  );
}

function AnalyticsScreen() {
  return (
    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.28em', color: 'var(--lab-gold)' }}>ANALYTICS / MASTER</div>
        <div style={{ fontSize: 30, fontWeight: 700, color: 'var(--fg-0)', letterSpacing: '-.02em', marginTop: 4 }}>Comparative cohort analysis.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          { label: 'cohort.medi_k', color: '#00E5FF', data: SAMPLE_SPARK, val: '99.8%', sub: 'accuracy' },
          { label: 'cohort.medi_j', color: '#D4AF37', data: SAMPLE_SPARK2, val: '97.4%', sub: 'accuracy' },
          { label: 'cohort.retina', color: '#92C118', data: SAMPLE_SPARK, val: '98.2%', sub: 'accuracy' },
        ].map((c,i) => (
          <GlassCard key={i} style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.2em', color: c.color, textTransform: 'uppercase' }}>{c.label}</span>
              <StatusDot color={c.color === '#D4AF37' ? 'gold' : c.color === '#92C118' ? 'green' : 'cyan'} />
            </div>
            <div className="lb-readout" style={{ fontSize: 34, fontWeight: 700, color: c.color, lineHeight: 1 }}>{c.val}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-2)', textTransform: 'uppercase', marginTop: 2 }}>{c.sub}</div>
            <div style={{ marginTop: 14 }}><MiniChart data={c.data} width={260} height={60} color={c.color} /></div>
          </GlassCard>
        ))}
      </div>
      <GlassCard glow="gold" style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-hairline)', paddingBottom: 12, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="bar-chart-3" size={16} color="var(--lab-gold)" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.22em', color: 'var(--fg-0)', textTransform: 'uppercase' }}>Combined Throughput</span>
          </div>
          <Badge variant="gold">PREMIUM.TIER</Badge>
        </div>
        <MiniChart data={SAMPLE_SPARK} width={900} height={180} color="#D4AF37" />
      </GlassCard>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [screen, setScreen] = React.useState('overview');
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [loggedIn, screen]);
  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar active={screen} onNavigate={setScreen} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <TopBar screen={screen} />
        {screen === 'overview' && <Overview />}
        {screen === 'agents' && <AgentsScreen />}
        {screen === 'analytics' && <AnalyticsScreen />}
        {(screen === 'datasets' || screen === 'logs' || screen === 'admin' || screen === 'settings') && (
          <div style={{ padding: 28 }}>
            <GlassCard style={{ padding: 48, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.28em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>{screen}</div>
              <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--fg-2)', marginTop: 8 }}>Screen stub — wire up from components/</div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

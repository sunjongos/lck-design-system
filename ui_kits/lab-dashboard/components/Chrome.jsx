// Sidebar + TopBar + Shell chrome
function Sidebar({ active, onNavigate }) {
  const items = [
    { id: 'overview', label: 'Overview', icon: 'activity' },
    { id: 'agents', label: 'Agents', icon: 'cpu' },
    { id: 'analytics', label: 'Analytics', icon: 'bar-chart-3' },
    { id: 'datasets', label: 'Datasets', icon: 'database' },
    { id: 'logs', label: 'Logs', icon: 'terminal' },
  ];
  const footer = [
    { id: 'admin', label: 'Admin', icon: 'shield-check', gold: true },
    { id: 'settings', label: 'Settings', icon: 'sliders-horizontal' },
  ];
  return (
    <aside style={{ width: 220, background: 'var(--bg-1)', borderRight: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', padding: '20px 12px', flexShrink: 0, height: '100vh', position: 'sticky', top: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '2px 8px 18px' }}>
        <img src="../../assets/lck-logo.svg" width={32} height={32} style={{ borderRadius: 7 }} />
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, letterSpacing: '.18em' }}>LCK LAB</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.28em', color: 'var(--fg-2)' }}>v1.0.0</div>
        </div>
      </div>
      <Hairline />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 14, flex: 1 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.28em', color: 'var(--fg-3)', padding: '4px 10px 8px', textTransform: 'uppercase' }}>Workbench</div>
        {items.map(it => (
          <button key={it.id} onClick={() => onNavigate(it.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', border: 'none', cursor: 'pointer',
              background: active === it.id ? 'rgba(0,229,255,0.08)' : 'transparent',
              color: active === it.id ? 'var(--lab-cyan)' : 'var(--fg-1)',
              borderRadius: 6, textAlign: 'left',
              borderLeft: active === it.id ? '2px solid var(--lab-cyan)' : '2px solid transparent',
              fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '.18em', textTransform: 'uppercase',
            }}>
            <Icon name={it.icon} size={15} color={active === it.id ? 'var(--lab-cyan)' : 'var(--fg-2)'} />
            {it.label}
          </button>
        ))}
      </nav>
      <Hairline />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 10 }}>
        {footer.map(it => (
          <button key={it.id} onClick={() => onNavigate(it.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', border: 'none', cursor: 'pointer', background: 'transparent',
              color: it.gold ? 'var(--lab-gold)' : 'var(--fg-2)',
              borderRadius: 6, textAlign: 'left',
              fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '.18em', textTransform: 'uppercase',
            }}>
            <Icon name={it.icon} size={15} color={it.gold ? 'var(--lab-gold)' : 'var(--fg-2)'} />
            {it.label}
          </button>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 10px 4px', marginTop: 4 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, var(--lab-cyan), var(--lab-blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--lab-navy)' }}>SJ</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, color: 'var(--fg-0)', fontWeight: 500 }}>S. JongOs</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.2em', color: 'var(--lab-gold)' }}>MASTER</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ screen }) {
  const titles = { overview: 'Overview', agents: 'Agents', analytics: 'Analytics', datasets: 'Datasets', logs: 'Logs', admin: 'Admin', settings: 'Settings' };
  return (
    <header style={{ height: 60, display: 'flex', alignItems: 'center', gap: 16, padding: '0 28px', borderBottom: '1px solid var(--border-default)', background: 'rgba(2,12,27,0.6)', backdropFilter: 'blur(14px)', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.28em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>WORKBENCH / </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.18em', color: 'var(--fg-0)', textTransform: 'uppercase', fontWeight: 600 }}>{titles[screen] || screen}</span>
      </div>
      <div style={{ flex: 1, maxWidth: 460, marginLeft: 32 }}>
        <div className="lb-input-wrap" style={{ height: 36 }}>
          <Icon name="search" size={14} color="var(--fg-2)" />
          <input className="lb-input" placeholder="query · run · dataset · id…" style={{ fontSize: 12 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--fg-3)' }}>⌘K</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Badge variant="green" dot>ONLINE</Badge>
        <Badge variant="gold">PREMIUM.TIER</Badge>
        <div className="lb-vr" style={{ height: 24 }} />
        <Icon name="bell" size={16} color="var(--fg-2)" />
        <Icon name="life-buoy" size={16} color="var(--fg-2)" />
      </div>
    </header>
  );
}

Object.assign(window, { Sidebar, TopBar });

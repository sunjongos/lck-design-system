// AgentRow, LogStream, LoginScreen
function AgentRow({ id, name, status, lastRun, qps, onSelect, selected }) {
  const statusMap = {
    live:    { color: 'green', label: 'LIVE', pulse: true },
    idle:    { color: 'cyan',  label: 'IDLE', pulse: false },
    deploy:  { color: 'gold',  label: 'DEPLOY', pulse: true },
    offline: { color: 'gray',  label: 'OFFLINE', pulse: false },
    error:   { color: 'red',   label: 'ERROR', pulse: true },
  };
  const s = statusMap[status] || statusMap.idle;
  return (
    <div onClick={onSelect} style={{
      display: 'grid', gridTemplateColumns: '20px 1fr 120px 110px 80px 40px', gap: 14, alignItems: 'center',
      padding: '12px 16px', borderBottom: '1px solid var(--border-hairline)', cursor: 'pointer',
      background: selected ? 'rgba(0,229,255,0.06)' : 'transparent',
      transition: 'background 180ms var(--ease-out)',
    }}
    onMouseEnter={e => { if (!selected) e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
    onMouseLeave={e => { if (!selected) e.currentTarget.style.background = 'transparent'; }}>
      <StatusDot color={s.color} pulse={s.pulse} />
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 500, color: 'var(--fg-0)', letterSpacing: '.05em' }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)', letterSpacing: '.15em' }}>{id}</div>
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.22em', color: `var(--lab-${s.color === 'gray' ? 'gray' : s.color})` }}>
        {s.label}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)' }}>{lastRun}</span>
      <span className="lb-readout" style={{ fontSize: 13, color: 'var(--lab-cyan)', textAlign: 'right' }}>{qps}</span>
      <Icon name="chevron-right" size={14} color="var(--fg-3)" />
    </div>
  );
}

function LogStream({ lines }) {
  return (
    <div style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid var(--border-default)', borderRadius: 8, padding: '14px 16px', fontFamily: 'var(--font-mono)', fontSize: 11.5, lineHeight: 1.6, color: 'var(--fg-2)', maxHeight: 260, overflowY: 'auto' }}>
      {lines.map((l, i) => {
        const colorMap = { info: 'var(--fg-2)', ok: 'var(--lab-green)', warn: 'var(--lab-orange)', err: 'var(--lab-red)', cyan: 'var(--lab-cyan)' };
        return (
          <div key={i} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <span style={{ color: 'var(--fg-3)' }}>[{l.time}]</span>{' '}
            <span style={{ color: colorMap[l.level] || 'var(--fg-2)' }}>{l.level.toUpperCase().padEnd(4)}</span>{' '}
            <span style={{ color: 'var(--fg-1)' }}>{l.msg}</span>
          </div>
        );
      })}
    </div>
  );
}

function LoginScreen({ onLogin }) {
  const [step, setStep] = React.useState(0);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="lb-grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }}></div>
      <GlassCard glow="cyan" style={{ width: 420, padding: 36, zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, textAlign: 'center' }}>
          <img src="../../assets/lck-logo.svg" width={72} height={72} style={{ borderRadius: 16, boxShadow: '0 0 30px rgba(0,229,255,0.30)' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.32em', color: 'var(--lab-cyan)' }}>SYSTEM ONLINE / v1.0.0</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 30, fontWeight: 700, letterSpacing: '-.02em', color: 'var(--fg-0)', marginTop: 6 }}>
              LCK <span style={{ background: 'linear-gradient(90deg, var(--lab-cyan), var(--lab-blue))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>LAB</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 8, lineHeight: 1.5 }}>
              Authenticate to enter the workbench.
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="lb-input-wrap"><Icon name="user" size={14} color="var(--fg-2)" /><input className="lb-input" placeholder="operator.id" defaultValue="sunjongos" /></div>
            <div className="lb-input-wrap"><Icon name="key-round" size={14} color="var(--fg-2)" /><input className="lb-input" type="password" placeholder="secret" defaultValue="••••••••••" /></div>
          </div>
          {step === 1 && (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '14px 0', background: 'rgba(0,229,255,0.04)', border: '1px solid var(--border-cyan)', borderRadius: 8 }}>
              <Icon name="fingerprint" size={36} color="var(--lab-cyan)" style={{ filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.55))' }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.25em', color: 'var(--lab-cyan)' }}>SCANNING BIOMETRIC…</div>
            </div>
          )}
          <Button variant="cyan" size="lg" style={{ width: '100%' }} onClick={() => {
            if (step === 0) { setStep(1); setTimeout(onLogin, 1200); }
          }}>
            {step === 0 ? <>Authenticate <Icon name="chevron-right" size={14} /></> : 'Verifying…'}
          </Button>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.25em', color: 'var(--fg-3)' }}>PREMIUM.TIER · ENCRYPTED SESSION</div>
        </div>
      </GlassCard>
    </div>
  );
}

Object.assign(window, { AgentRow, LogStream, LoginScreen });

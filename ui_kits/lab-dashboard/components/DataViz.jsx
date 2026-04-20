// MetricTile — HUD numeric readout
function MetricTile({ label, value, unit, delta, deltaColor = 'green', accent = 'cyan', sub }) {
  const accentMap = { cyan: '#00E5FF', gold: '#D4AF37', white: '#FFFFFF' };
  const deltaMap = { green: '#92C118', red: '#FF3B6B', gray: '#8892B0' };
  return (
    <div style={{ background: 'rgba(0,0,0,0.40)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, padding: '14px 16px' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--fg-2)' }}>{label}</div>
      <div className="lb-readout" style={{ fontSize: 30, fontWeight: 700, marginTop: 4, color: accentMap[accent], textShadow: accent === 'gold' ? '0 0 10px rgba(212,175,55,0.55)' : (accent === 'cyan' ? '0 0 10px rgba(0,229,255,0.35)' : 'none'), lineHeight: 1 }}>
        {value}
        {unit && <span style={{ fontSize: 16, color: 'var(--fg-2)', marginLeft: 4 }}>{unit}</span>}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, marginTop: 4, letterSpacing: '.1em', color: delta ? deltaMap[deltaColor] : 'var(--fg-2)' }}>
        {delta || sub || '—'}
      </div>
    </div>
  );
}

// MiniChart — inline SVG sparkline
function MiniChart({ data, color = '#00E5FF', height = 40, width = 180, fill = true }) {
  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return [x, y];
  });
  const path = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const fillPath = fill ? `${path} L${width},${height} L0,${height} Z` : '';
  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`mc-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={fillPath} fill={`url(#mc-${color.replace('#','')})`} />}
      <path d={path} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

Object.assign(window, { MetricTile, MiniChart });

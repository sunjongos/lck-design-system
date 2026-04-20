// Primitives: Button, Badge, GlassCard, StatusDot
function Button({ variant = 'cyan', size = 'md', children, className = '', ...rest }) {
  const cls = `lb-btn lb-btn-${variant} ${size !== 'md' ? 'lb-btn-' + size : ''} ${className}`;
  return <button className={cls} {...rest}>{children}</button>;
}
function Badge({ variant = 'cyan', children, dot = false, className = '' }) {
  return (
    <span className={`lb-badge lb-badge-${variant} ${className}`}>
      {dot && <span className={`lb-dot lb-dot-pulse`} style={{background: 'currentColor', boxShadow: '0 0 6px currentColor'}} />}
      {children}
    </span>
  );
}
function GlassCard({ glow = 'none', children, className = '', style }) {
  const cls = `lb-card ${glow === 'cyan' ? 'lb-card-cyan' : glow === 'gold' ? 'lb-card-gold' : ''} ${className}`;
  return <div className={cls} style={style}>{children}</div>;
}
function StatusDot({ color = 'cyan', pulse = true }) {
  const colorMap = { cyan: '#00E5FF', green: '#92C118', gold: '#D4AF37', red: '#FF3B6B', orange: '#F29D00', gray: '#8892B0' };
  return <span className={`lb-dot ${pulse ? 'lb-dot-pulse' : ''}`} style={{ background: colorMap[color], boxShadow: pulse ? `0 0 8px ${colorMap[color]}` : 'none' }} />;
}
function Icon({ name, size = 18, color, style, strokeWidth = 1.8 }) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    try {
      const pascal = name.replace(/(^|-)([a-z])/g, (_, _d, c) => c.toUpperCase());
      const icons = (window.lucide && window.lucide.icons) || {};
      const node = icons[pascal] || icons[name];
      if (!node) return;
      if (typeof node.toSvg === 'function') { setSvg(node.toSvg({ 'stroke-width': strokeWidth })); return; }
      // node is the icon-node array shape [tag, attrs, children] in newer UMDs
      if (window.lucide && typeof window.lucide.createElement === 'function') {
        const el = window.lucide.createElement(node);
        if (el && el.outerHTML) { setSvg(el.outerHTML); return; }
      }
      // Manual build from array shape
      if (Array.isArray(node)) {
        const [, attrs, children] = node;
        const attrStr = Object.entries(attrs || {}).map(([k,v]) => `${k}="${v}"`).join(' ');
        const childStr = (children || []).map(([t, a]) => {
          const as = Object.entries(a||{}).map(([k,v])=>`${k}="${v}"`).join(' ');
          return `<${t} ${as}/>`;
        }).join('');
        setSvg(`<svg xmlns="http://www.w3.org/2000/svg" ${attrStr} stroke-width="${strokeWidth}">${childStr}</svg>`);
      }
    } catch(e) { /* noop */ }
  }, [name, strokeWidth]);
  return <span
    style={{ display: 'inline-flex', width: size, height: size, color: color || 'currentColor', flexShrink: 0, ...style }}
    dangerouslySetInnerHTML={{ __html: svg.replace(/width="24"/, `width="${size}"`).replace(/height="24"/, `height="${size}"`) }}
  />;
}
function Hairline({ style }) { return <hr className="lb-hr" style={style} />; }

Object.assign(window, { Button, Badge, GlassCard, StatusDot, Icon, Hairline });

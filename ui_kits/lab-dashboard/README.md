# Lab Dashboard — UI Kit

Interactive recreation of the LCK LAB research-automation dashboard. Based on the reference `src/App.tsx` from `sunjongos/lck-design-system`, extended into a click-thru product surface.

## Screens
- **Login** — entry + biometric confirmation
- **Overview** — live agent status, HUD metrics, system health
- **Agents** — node list with live runs and logs
- **Analytics** — charts and premium report export

## Components
- `Shell.jsx` — page chrome with sidebar + top bar
- `Sidebar.jsx` — nav with status indicator
- `TopBar.jsx` — command bar, search, session badge
- `MetricTile.jsx` — HUD numeric readout
- `GlassCard.jsx` — panel primitive with optional cyan/gold glow
- `Button.jsx` / `Badge.jsx` — interactive primitives
- `AgentRow.jsx` — list item for agent nodes
- `LogStream.jsx` — scrolling mono log panel
- `MiniChart.jsx` — inline SVG sparkline
- `StatusDot.jsx` — pulsing colored status dot
- `LoginScreen.jsx` — login entry

Run `index.html` to see the click-thru prototype.

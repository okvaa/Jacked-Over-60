/* ── FONTS ── */
const injectFonts = () => {
  if (document.getElementById("jo60-fonts")) return;
  const l = document.createElement("link");
  l.id = "jo60-fonts";
  l.rel = "stylesheet";
  l.href = "https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700;900&family=Barlow:wght@300;400;500&display=swap";
  document.head.appendChild(l);
};
injectFonts();

/* ── STYLES ── */
const injectStyles = () => {
  if (document.getElementById("jo60-menu-styles")) return;
  const s = document.createElement("style");
  s.id = "jo60-menu-styles";
  s.textContent = `
    /* ── THEME TOKENS ── */
    .jo60-dark  {
      --bg:#080c10; --bg2:#0d1117; --bg3:#111827;
      --border:#1e2d3d; --border-hi:#1e3a5f; --border-glow:#0ea5e9;
      --text:#e2e8f0; --muted:#4a6075; --dim:#8aa0b4;
      --accent:#0ea5e9; --accent-dim:rgba(14,165,233,0.1); --accent-glow:rgba(14,165,233,0.3);
      --green:#22c55e; --amber:#f59e0b;
      --header-grad: linear-gradient(160deg, #0d1829 0%, #080c10 60%);
      --scan-line: rgba(14,165,233,0.03);
    }
    .jo60-light {
      --bg:#f0f4f8; --bg2:#ffffff; --bg3:#e2eaf2;
      --border:#cbd5e1; --border-hi:#7dd3fc; --border-glow:#0284c7;
      --text:#0f172a; --muted:#64748b; --dim:#334155;
      --accent:#0284c7; --accent-dim:rgba(2,132,199,0.08); --accent-glow:rgba(2,132,199,0.2);
      --green:#16a34a; --amber:#d97706;
      --header-grad: linear-gradient(160deg, #dbeafe 0%, #f0f4f8 60%);
      --scan-line: rgba(2,132,199,0.03);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { -webkit-font-smoothing: antialiased; }

    .jo60-menu-root {
      max-width: 480px; margin: 0 auto; min-height: 100vh;
      background: var(--bg); color: var(--text);
      font-family: 'Barlow', sans-serif; padding-bottom: 70px;
    }

    /* ── SCAN LINE TEXTURE ── */
    .jo60-menu-root::before {
      content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
      background: repeating-linear-gradient(0deg, var(--scan-line) 0px, transparent 1px, transparent 3px);
    }

    /* ── HEADER ── */
    .jo60-header {
      position: relative; z-index: 1;
      padding: 0; border-bottom: 1px solid var(--border);
      background: var(--header-grad); overflow: hidden;
    }
    .jo60-header::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0;
      height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent);
    }

    /* WORDMARK HERO */
    .jo60-wordmark {
      padding: 32px 24px 20px; position: relative;
    }
    .jo60-eyebrow {
      font-family: 'Exo 2', sans-serif; font-size: 10px; font-weight: 700;
      letter-spacing: 0.35em; text-transform: uppercase; color: var(--accent);
      margin-bottom: 8px; display: flex; align-items: center; gap: 8px;
    }
    .jo60-eyebrow::before {
      content: ''; display: inline-block; width: 20px; height: 1px; background: var(--accent);
    }
    .jo60-logo-text {
      font-family: 'Exo 2', sans-serif; font-size: 44px; font-weight: 900;
      letter-spacing: -0.03em; line-height: 0.9; color: var(--text);
      text-transform: uppercase;
    }
    .jo60-logo-text .over { font-size: 22px; font-weight: 300; letter-spacing: 0.05em; color: var(--dim); display: block; margin-top: 2px; text-transform: uppercase; }
    .jo60-logo-text .sixty { color: var(--accent); }
    .jo60-tagline {
      font-family: 'Barlow', sans-serif; font-size: 12px; font-weight: 300;
      color: var(--muted); margin-top: 10px; letter-spacing: 0.05em;
      font-style: italic;
    }

    /* BIG WATERMARK NUMBER */
    .jo60-watermark {
      position: absolute; right: -8px; top: -8px;
      font-family: 'Exo 2', sans-serif; font-size: 130px; font-weight: 900;
      color: rgba(14,165,233,0.04); line-height: 1; pointer-events: none; user-select: none;
    }
    .jo60-light .jo60-watermark { color: rgba(2,132,199,0.06); }

    /* READINESS BANNER */
    .readiness-banner {
      margin: 0 16px 0; padding: 12px 16px;
      border-radius: 10px; border: 1px solid;
      display: flex; align-items: center; justify-content: space-between;
      position: relative; z-index: 1;
    }
    .readiness-banner.assessed {
      background: var(--accent-dim); border-color: var(--border-hi);
    }
    .readiness-banner.unassessed {
      background: rgba(239,68,68,0.06); border-color: rgba(239,68,68,0.2);
    }
    .rb-left { display: flex; flex-direction: column; gap: 2px; }
    .rb-tag { font-family: 'Exo 2', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; }
    .rb-tag.assessed { color: var(--accent); }
    .rb-tag.unassessed { color: #ef4444; }
    .rb-score { font-family: 'Exo 2', sans-serif; font-size: 22px; font-weight: 900; line-height: 1; }
    .rb-mode { font-family: 'Exo 2', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
    .rb-btn { font-family: 'Exo 2', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 8px 14px; border-radius: 6px; border: 1px solid; cursor: pointer; background: transparent; transition: all 0.15s; }
    .rb-btn.assessed { color: var(--accent); border-color: var(--border-hi); }
    .rb-btn.assessed:hover { background: var(--accent-dim); }
    .rb-btn.unassessed { color: #ef4444; border-color: rgba(239,68,68,0.3); background: rgba(239,68,68,0.06); }
    .rb-btn.unassessed:hover { background: rgba(239,68,68,0.12); }

    /* ── THEME TOGGLE ── */
    .jo60-toggle {
      position: absolute; top: 28px; right: 24px; z-index: 10;
      display: flex; align-items: center; gap: 8px;
    }
    .jo60-toggle-label {
      font-family: 'Exo 2', sans-serif; font-size: 9px; font-weight: 700;
      letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted);
    }
    .toggle-sw { position: relative; width: 40px; height: 22px; cursor: pointer; }
    .toggle-sw input { opacity: 0; width: 0; height: 0; position: absolute; }
    .toggle-tr { position: absolute; inset: 0; background: var(--border); border: 1px solid var(--border-hi); border-radius: 11px; transition: all 0.25s; }
    .toggle-sw input:checked + .toggle-tr { background: var(--accent-dim); border-color: var(--accent); }
    .toggle-kn { position: absolute; top: 3px; left: 3px; width: 14px; height: 14px; border-radius: 50%; background: var(--muted); transition: all 0.25s; font-size: 8px; display: flex; align-items: center; justify-content: center; }
    .toggle-sw input:checked + .toggle-tr + .toggle-kn { transform: translateX(18px); background: var(--accent); }

    /* ── SECTIONS ── */
    .jo60-section { padding: 20px 16px 0; position: relative; z-index: 1; }
    .jo60-sec-label {
      font-family: 'Exo 2', sans-serif; font-size: 9px; font-weight: 700;
      letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted);
      margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid var(--border);
      display: flex; align-items: center; gap: 10px;
    }
    .jo60-sec-label span { color: var(--accent); }

    /* ── NAV BUTTONS ── */
    .jo60-nav-btn {
      width: 100%; display: flex; align-items: center; gap: 14px;
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 10px; padding: 14px 16px; margin-bottom: 8px;
      cursor: pointer; transition: all 0.15s ease; text-align: left;
      color: var(--text); font-family: 'Barlow', sans-serif;
      position: relative; overflow: hidden;
    }
    .jo60-nav-btn::before {
      content: ''; position: absolute; left: 0; top: 0; bottom: 0;
      width: 3px; background: var(--accent); opacity: 0;
      transition: opacity 0.15s;
    }
    .jo60-nav-btn:hover { border-color: var(--border-hi); background: var(--bg3); transform: translateX(3px); }
    .jo60-nav-btn:hover::before { opacity: 1; }
    .jo60-nav-btn.locked { opacity: 0.5; cursor: not-allowed; }
    .jo60-nav-btn.locked:hover { transform: none; border-color: var(--border); background: var(--bg2); }
    .jo60-nav-btn.locked:hover::before { opacity: 0; }
    .nav-icon { font-size: 20px; flex-shrink: 0; width: 30px; text-align: center; }
    .nav-body { flex: 1; min-width: 0; }
    .nav-label { font-family: 'Exo 2', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text); line-height: 1; }
    .nav-desc { font-size: 11px; color: var(--muted); margin-top: 3px; font-weight: 300; }
    .nav-arrow { font-size: 16px; color: var(--muted); flex-shrink: 0; transition: transform 0.15s, color 0.15s; }
    .jo60-nav-btn:not(.locked):hover .nav-arrow { transform: translateX(3px); color: var(--accent); }
    .lock-icon { font-size: 12px; color: var(--muted); flex-shrink: 0; }

    /* ── WEEK GRID ── */
    .jo60-week-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;
    }
    .jo60-week-cell {
      aspect-ratio: 1; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 8px; cursor: pointer;
      transition: all 0.15s; position: relative;
    }
    .jo60-week-cell:hover:not(.locked-week) { border-color: var(--border-hi); background: var(--bg3); }
    .jo60-week-cell.current { border: 2px solid var(--accent); }
    .jo60-week-cell.locked-week { opacity: 0.5; cursor: not-allowed; }
    .jo60-week-cell.locked-week:hover { border-color: var(--border); background: var(--bg2); }
    .wc-num { font-family: 'Exo 2', sans-serif; font-size: 20px; font-weight: 900; }
    .wc-sub { font-family: 'Exo 2', sans-serif; font-size: 8px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }

    /* ── LOCK NOTICE ── */
    .lock-notice {
      padding: 12px 16px; margin-bottom: 12px; border-radius: 8px;
      background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.2);
      font-size: 12px; color: #ef4444; text-align: center;
    }
  `;
  document.head.appendChild(s);
};
injectStyles();

const CURRENT_WEEK = 35;

const coreItems = [
  { view: "progress", icon: "📈", label: "Progress Dashboard", desc: "Metrics overview & trends", variant: "", locked: false },
  { view: "photos", icon: "📸", label: "Body Composition", desc: "Progress photos & measurements", variant: "", locked: false },
  { view: "supplements", icon: "💊", label: "Supplement Stack", desc: "Daily protocol & timing", variant: "", locked: false },
  { view: "injections", icon: "💉", label: "Injection Log", desc: "TRT & peptide schedule", variant: "", locked: false },
];

const conditioningItems = [
  { view: "norwegian", icon: "🫀", label: "Norwegian 4×4", desc: "Max cardiac output — VO2 stimulus protocol" },
  { view: "trx", icon: "🤸", label: "TRX Training", desc: "Suspension-based corrective & strength work" },
  { view: "abs", icon: "💥", label: "Core & Anti-Rotation", desc: "Spinal stability & force transfer training" },
  { view: "neck", icon: "💪", label: "Neck & Jaw", desc: "Cervical hypertrophy & postural alignment" },
  { view: "neck31", icon: "🧠", label: "Neck Finisher", desc: "Week 31 accessory finishing protocol" },
];

const weeks = [
  { id: "week25", num: 25 }, { id: "week26", num: 26 }, { id: "week27", num: 27 }, { id: "week28", num: 28 },
  { id: "week29", num: 29 }, { id: "week30", num: 30 }, { id: "week31", num: 31 }, { id: "week32", num: 32 },
  { id: "week33", num: 33 }, { id: "week34", num: 34 }, { id: "week35", num: 35 }, { id: "week36", num: 36 },
  { id: "week37", num: 37, future: true },
];

/* ── MODE COLORS ── */
const modeColor = (mode: string) =>
  mode === "full" ? "#22c55e" : mode === "reduced" ? "#f59e0b" : "#0ea5e9";

const modeEmoji = (mode: string) =>
  mode === "full" ? "🔥" : mode === "reduced" ? "⚡" : "🧘";

const modeText = (mode: string) =>
  mode === "full" ? "Full Session" : mode === "reduced" ? "Reduced Volume" : "Mobility Only";

/* ── COMPONENT ── */
type Props = {
  setView: (view: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  readiness: null | { score: number; mode: string; modeLabel: string };
};

export default function JO60Menu({ setView, isDark, toggleTheme, readiness }: Props) {
  const themeClass = isDark ? "jo60-dark" : "jo60-light";
  const workoutLocked = !readiness;

  return (
    <div className={`jo60-menu-root ${themeClass}`}>

      {/* ── HEADER ── */}
      <div className="jo60-header">
        <div className="jo60-wordmark">
          <div className="jo60-watermark">60</div>

          {/* THEME TOGGLE */}
          <div className="jo60-toggle">
            <span className="jo60-toggle-label">{isDark ? "Dark" : "Light"}</span>
            <label className="toggle-sw">
              <input type="checkbox" checked={!isDark} onChange={toggleTheme} />
              <div className="toggle-tr" />
              <div className="toggle-kn">{isDark ? "🌙" : "☀️"}</div>
            </label>
          </div>

          <div className="jo60-eyebrow">Strength Has No Expiration Date</div>
          <div className="jo60-logo-text">
            Jacked
            <span className="over">Over <span className="sixty">60</span></span>
          </div>
          <div className="jo60-tagline">Science-based training for masters athletes</div>
        </div>

        {/* READINESS BANNER */}
        <div style={{ padding: "0 16px 20px" }}>
          <div className={`readiness-banner ${readiness ? "assessed" : "unassessed"}`}>
            <div className="rb-left">
              <div className={`rb-tag ${readiness ? "assessed" : "unassessed"}`}>
                {readiness ? "Today's Readiness" : "⚠ Not Yet Assessed"}
              </div>
              {readiness ? (
                <>
                  <div className="rb-score" style={{ color: modeColor(readiness.mode) }}>
                    {readiness.score}<span style={{ fontSize: 14, fontWeight: 400, color: "var(--muted)" }}>/100</span>
                  </div>
                  <div className="rb-mode">
                    {modeEmoji(readiness.mode)} {modeText(readiness.mode)}
                  </div>
                </>
              ) : (
                <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Barlow', sans-serif", marginTop: 2 }}>
                  Complete check-in to unlock workouts
                </div>
              )}
            </div>
            <button
              className={`rb-btn ${readiness ? "assessed" : "unassessed"}`}
              onClick={() => setView("readiness")}
            >
              {readiness ? "Re-assess" : "Start Check-In →"}
            </button>
          </div>
        </div>
      </div>

      {/* ── CORE TRACKING ── */}
      <div className="jo60-section">
        <div className="jo60-sec-label"><span>◈</span> Core Tracking</div>
        {coreItems.map((item) => (
          <button
            key={item.view}
            className={`jo60-nav-btn ${item.variant}`}
            onClick={() => setView(item.view)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-body">
              <span className="nav-label">{item.label}</span>
              <div className="nav-desc">{item.desc}</div>
            </span>
            <span className="nav-arrow">›</span>
          </button>
        ))}
      </div>

      {/* ── TRAINING WEEKS ── */}
      <div className="jo60-section">
        <div className="jo60-sec-label"><span>◈</span> Training Weeks</div>
        {workoutLocked && (
          <div className="lock-notice">
            🔒 Complete your readiness check-in to unlock training
          </div>
        )}
        <div className="jo60-week-grid">
          {weeks.map((w) => (
            <div
              key={w.id}
              className={`jo60-week-cell ${w.num === CURRENT_WEEK ? "current" : ""} ${w.future || workoutLocked ? "locked-week" : ""}`}
              onClick={() => !w.future && !workoutLocked && setView(w.id)}
            >
              <div className="wc-num">{w.num}</div>
              <div className="wc-sub">
                {w.future ? "Soon" : w.num === CURRENT_WEEK ? "Active" : `Wk ${w.num}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONDITIONING ── */}
      <div className="jo60-section">
        <div className="jo60-sec-label"><span>◈</span> Conditioning & Accessories</div>
        {workoutLocked && (
          <div className="lock-notice">
            🔒 Complete your readiness check-in to unlock training
          </div>
        )}
        {conditioningItems.map((item) => (
          <button
            key={item.view}
            className={`jo60-nav-btn ${workoutLocked ? "locked" : ""}`}
            onClick={() => !workoutLocked && setView(item.view)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-body">
              <span className="nav-label">{item.label}</span>
              <div className="nav-desc">{item.desc}</div>
            </span>
            {workoutLocked
              ? <span className="lock-icon">🔒</span>
              : <span className="nav-arrow">›</span>
            }
          </button>
        ))}
      </div>

    </div>
  );
}

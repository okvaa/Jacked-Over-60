import { useState } from "react";

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
  if (document.getElementById("jo60-readiness-styles")) return;
  const s = document.createElement("style");
  s.id = "jo60-readiness-styles";
  s.textContent = `
    .jo60-dark { --bg:#080c10; --bg2:#0d1117; --bg3:#111827; --border:#1e2d3d; --border-hi:#1e3a5f; --text:#e2e8f0; --muted:#4a6075; --dim:#8aa0b4; --accent:#0ea5e9; --accent-dim:rgba(14,165,233,0.12); --accent-glow:rgba(14,165,233,0.25); --green:#22c55e; --red:#ef4444; --amber:#f59e0b; }
    .jo60-light { --bg:#f0f4f8; --bg2:#ffffff; --bg3:#e8eef4; --border:#cbd5e1; --border-hi:#93c5fd; --text:#0f172a; --muted:#64748b; --dim:#475569; --accent:#0284c7; --accent-dim:rgba(2,132,199,0.08); --accent-glow:rgba(2,132,199,0.2); --green:#16a34a; --red:#dc2626; --amber:#d97706; }
    .r-root { max-width: 480px; margin: 0 auto; min-height: 100vh; background: var(--bg); color: var(--text); font-family: 'Barlow', sans-serif; padding: 0 0 60px; -webkit-font-smoothing: antialiased; }
    .r-header { padding: 32px 24px 24px; border-bottom: 1px solid var(--border); background: linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%); }
    .r-brand { font-family: 'Exo 2', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
    .r-title { font-family: 'Exo 2', sans-serif; font-size: 28px; font-weight: 900; letter-spacing: -0.01em; color: var(--text); line-height: 1.1; }
    .r-subtitle { font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5; }
    .r-body { padding: 24px 20px; }

    /* QUESTION BLOCK */
    .q-block { background: var(--bg2); border: 1px solid var(--border); border-radius: 14px; padding: 20px; margin-bottom: 16px; transition: border-color 0.2s; }
    .q-block.answered { border-color: var(--border-hi); }
    .q-num { font-family: 'Exo 2', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
    .q-text { font-family: 'Exo 2', sans-serif; font-size: 17px; font-weight: 700; color: var(--text); margin-bottom: 4px; line-height: 1.2; }
    .q-why { font-size: 12px; color: var(--muted); line-height: 1.5; margin-bottom: 14px; }
    .q-scale { display: flex; gap: 6px; }
    .q-btn { flex: 1; padding: 10px 4px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg3); cursor: pointer; font-family: 'Exo 2', sans-serif; font-size: 15px; font-weight: 700; color: var(--muted); transition: all 0.12s ease; display: flex; flex-direction: column; align-items: center; gap: 2px; }
    .q-btn:hover { border-color: var(--border-hi); color: var(--text); }
    .q-btn.selected { background: var(--accent-dim); border-color: var(--accent); color: var(--accent); }
    .q-btn-label { font-size: 9px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }

    /* SCORE CARD */
    .score-card { background: var(--bg2); border: 1px solid var(--border-hi); border-radius: 14px; padding: 24px; margin-bottom: 20px; position: relative; overflow: hidden; }
    .score-card::before { content: ''; position: absolute; inset: 0; background: var(--accent-dim); opacity: 0.4; pointer-events: none; }
    .score-label { font-family: 'Exo 2', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; position: relative; }
    .score-row { display: flex; align-items: flex-end; gap: 12px; margin-bottom: 16px; position: relative; }
    .score-num { font-family: 'Exo 2', sans-serif; font-size: 64px; font-weight: 900; line-height: 1; }
    .score-out { font-family: 'Exo 2', sans-serif; font-size: 20px; font-weight: 400; color: var(--muted); margin-bottom: 8px; }
    .score-bar-track { height: 6px; background: var(--border); border-radius: 3px; overflow: hidden; margin-bottom: 14px; position: relative; }
    .score-bar-fill { height: 100%; border-radius: 3px; transition: width 0.8s ease; }
    .mode-pill { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 20px; font-family: 'Exo 2', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid; margin-bottom: 14px; position: relative; }
    .mode-pill.full { background: rgba(34,197,94,0.1); border-color: rgba(34,197,94,0.4); color: #22c55e; }
    .mode-pill.reduced { background: rgba(245,158,11,0.1); border-color: rgba(245,158,11,0.4); color: #f59e0b; }
    .mode-pill.recovery { background: rgba(14,165,233,0.1); border-color: rgba(14,165,233,0.4); color: #0ea5e9; }
    .science-box { background: var(--bg3); border-left: 3px solid var(--accent); border-radius: 0 8px 8px 0; padding: 12px 14px; position: relative; }
    .science-tag { font-family: 'Exo 2', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 4px; }
    .science-text { font-size: 12px; color: var(--dim); line-height: 1.6; }

    /* BREAKDOWN */
    .breakdown { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 20px; }
    .breakdown-cell { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: 12px 8px; text-align: center; }
    .bc-label { font-family: 'Exo 2', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
    .bc-score { font-family: 'Exo 2', sans-serif; font-size: 22px; font-weight: 900; color: var(--text); line-height: 1; }
    .bc-bar { height: 3px; border-radius: 2px; margin-top: 6px; transition: width 0.6s; }

    /* ACTIONS */
    .r-actions { display: flex; flex-direction: column; gap: 10px; }
    .r-cta { width: 100%; padding: 16px; border-radius: 10px; border: none; font-family: 'Exo 2', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: all 0.15s ease; }
    .r-cta.primary { background: var(--accent); color: #fff; box-shadow: 0 0 20px var(--accent-glow); }
    .r-cta.primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
    .r-cta.secondary { background: var(--bg2); border: 1px solid var(--border); color: var(--muted); }
    .r-cta.secondary:hover { border-color: var(--border-hi); color: var(--text); }
    .r-reassess { width: 100%; padding: 10px; background: transparent; border: none; font-family: 'Exo 2', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); cursor: pointer; margin-top: 4px; }
    .r-reassess:hover { color: var(--accent); }
  `;
  document.head.appendChild(s);
};
injectStyles();

/* ── QUESTIONS ── */
const QUESTIONS = [
  {
    id: "sleep",
    text: "How did you sleep last night?",
    why: "Sleep is when muscle protein synthesis peaks. Poor sleep elevates cortisol by up to 37%, directly impairing recovery and strength output — especially critical over 60 when GH secretion is already reduced.",
    labels: ["Poor", "Fair", "OK", "Good", "Great"],
  },
  {
    id: "soreness",
    text: "How is your muscle soreness today?",
    why: "DOMS (delayed onset muscle soreness) indicates incomplete recovery. Training through high soreness increases injury risk and reduces force production by up to 20%. We adjust volume accordingly.",
    labels: ["Severe", "High", "Moderate", "Low", "None"],
    invert: true, // 1=best, 5=worst for soreness, so we invert: score = 6 - value
  },
  {
    id: "motivation",
    text: "What's your mental drive to train today?",
    why: "Motivation correlates with CNS readiness. Low drive often signals systemic fatigue before it becomes physical. RP research shows this metric is the strongest single predictor of session quality.",
    labels: ["Zero", "Low", "Neutral", "High", "Locked In"],
  },
];

/* ── COMPUTE READINESS ── */
const computeReadiness = (answers: Record<string, number>) => {
  const sleep = answers.sleep ?? 0;
  const soreness = answers.soreness ?? 0;
  const motivation = answers.motivation ?? 0;
  // soreness is inverted: 5 = no soreness (best), 1 = severe (worst)
  const rawScore = ((sleep + soreness + motivation) / 15) * 100;
  const score = Math.round(rawScore);

  let mode: string;
  let modeLabel: string;
  let scienceReason: string;
  let color: string;

  if (score >= 75) {
    mode = "full";
    modeLabel = "Full Session";
    color = "#22c55e";
    scienceReason = "Your composite readiness score indicates full neuromuscular recovery. Testosterone-to-cortisol ratio is likely favorable. Train at prescribed loads with full volume — this is your window for maximum stimulus.";
  } else if (score >= 50) {
    mode = "reduced";
    modeLabel = "Reduced Volume";
    color = "#f59e0b";
    scienceReason = "Moderate readiness suggests partial recovery. We reduce sets by ~25% to stay within your recovery capacity. Load remains the same — we protect stimulus quality while managing systemic fatigue.";
  } else {
    mode = "recovery";
    modeLabel = "Mobility & Recovery";
    color = "#0ea5e9";
    scienceReason = "Low readiness indicates your CNS and muscular systems need regeneration. Parasympathetic work (mobility, light walking, breathing) accelerates recovery by reducing cortisol and improving blood flow without adding stress.";
  }

  return { sleep, soreness, motivation, score, mode, modeLabel, scienceReason, color };
};

/* ── SCALE BUTTON LABELS ── */
const SCALE_EMOJIS = ["😴", "😐", "🙂", "💪", "🔥"];

/* ── COMPONENT ── */
export default function JO60Readiness({
  isDark,
  onComplete,
  onBack,
}: {
  isDark: boolean;
  onComplete: (result: any) => void;
  onBack: () => void;
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<any>(null);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);

  const handleSubmit = () => {
    if (!allAnswered) return;
    const r = computeReadiness(answers);
    setResult(r);
    setSubmitted(true);
  };

  const handleContinue = () => {
    onComplete(result);
  };

  const themeClass = isDark ? "jo60-dark" : "jo60-light";

  const barColor = (val: number) =>
    val >= 4 ? "#22c55e" : val >= 3 ? "#84cc16" : val >= 2 ? "#f59e0b" : "#ef4444";

  return (
    <div className={`r-root ${themeClass}`}>
      <div className="r-header">
        <div className="r-brand">Jacked Over 60 · Pre-Session</div>
        <div className="r-title">Readiness<br />Check-In</div>
        <div className="r-subtitle">
          {submitted
            ? "Your training prescription is ready."
            : "Answer 3 questions. We'll prescribe exactly how hard to train today based on your biology."}
        </div>
      </div>

      <div className="r-body">
        {!submitted ? (
          <>
            {QUESTIONS.map((q, qi) => {
              const val = answers[q.id];
              const answered = val !== undefined;
              return (
                <div key={q.id} className={`q-block ${answered ? "answered" : ""}`}>
                  <div className="q-num">Question {qi + 1} of {QUESTIONS.length}</div>
                  <div className="q-text">{q.text}</div>
                  <div className="q-why">{q.why}</div>
                  <div className="q-scale">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        className={`q-btn ${val === n ? "selected" : ""}`}
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: n }))}
                      >
                        {SCALE_EMOJIS[n - 1]}
                        <span className="q-btn-label">{q.labels[n - 1]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="r-actions">
              <button
                className="r-cta primary"
                disabled={!allAnswered}
                onClick={handleSubmit}
                style={{ opacity: allAnswered ? 1 : 0.4, cursor: allAnswered ? "pointer" : "not-allowed" }}
              >
                Calculate My Training Mode →
              </button>
              <button className="r-cta secondary" onClick={onBack}>
                Back to Menu
              </button>
            </div>
          </>
        ) : (
          <>
            {/* SCORE CARD */}
            <div className="score-card">
              <div className="score-label">Composite Readiness Score</div>
              <div className="score-row">
                <div className="score-num" style={{ color: result.color }}>{result.score}</div>
                <div className="score-out">/ 100</div>
              </div>
              <div className="score-bar-track">
                <div
                  className="score-bar-fill"
                  style={{ width: `${result.score}%`, background: result.color }}
                />
              </div>
              <div className={`mode-pill ${result.mode}`}>
                {result.mode === "full" && "🔥"} 
                {result.mode === "reduced" && "⚡"}
                {result.mode === "recovery" && "🧘"}
                {" "}{result.modeLabel}
              </div>
              <div className="science-box">
                <div className="science-tag">🔬 Why This Prescription</div>
                <div className="science-text">{result.scienceReason}</div>
              </div>
            </div>

            {/* BREAKDOWN */}
            <div className="breakdown">
              {[
                { label: "Sleep", val: result.sleep },
                { label: "Recovery", val: result.soreness },
                { label: "Drive", val: result.motivation },
              ].map((b) => (
                <div key={b.label} className="breakdown-cell">
                  <div className="bc-label">{b.label}</div>
                  <div className="bc-score" style={{ color: barColor(b.val) }}>{b.val}/5</div>
                  <div
                    className="bc-bar"
                    style={{ width: "100%", background: barColor(b.val), opacity: 0.3 + (b.val / 5) * 0.7 }}
                  />
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="r-actions">
              <button className="r-cta primary" onClick={handleContinue}>
                Enter Today's Training →
              </button>
              <button
                className="r-reassess"
                onClick={() => { setSubmitted(false); setAnswers({}); setResult(null); }}
              >
                ↺ Re-assess
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

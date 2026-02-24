import { useState } from "react";
import JO60Menu from "./JO60Menu";
import JO60Readiness from "./JO60Readiness";
import Week35Tracker from "./Week35Tracker";
import Week36Tracker from "./Week36Tracker";
// ... import other week trackers as needed

const weekTrackers: Record<string, any> = {
  week35: Week35Tracker,
  week36: Week36Tracker,
};

const otherViews: Record<string, any> = {
  // day: DayCounter,
  // dashboard: Dashboard,
  // etc — plug in your existing components
};

export default function App() {
  const [view, setView] = useState("menu");
  const [isDark, setIsDark] = useState<boolean>(() => {
    try { return localStorage.getItem("jo60-theme") !== "light"; }
    catch { return true; }
  });
  // Readiness gate: null = not yet assessed, object = scores
  const [readiness, setReadiness] = useState<null | {
    sleep: number; soreness: number; motivation: number;
    score: number; mode: string;
  }>(null);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      try { localStorage.setItem("jo60-theme", next ? "dark" : "light"); } catch {}
      return next;
    });
  };

  const Component = weekTrackers[view] || otherViews[view] || null;

  const backBtnStyle: React.CSSProperties = {
    position: "fixed", bottom: 16, left: 16,
    padding: "9px 18px", borderRadius: 8,
    border: `1px solid ${isDark ? "#1e3a5f" : "#bdd4e8"}`,
    background: isDark ? "#080c10" : "#ffffff",
    color: isDark ? "#0ea5e9" : "#0369a1",
    fontFamily: "'Exo 2', sans-serif",
    fontSize: 12, fontWeight: 700,
    letterSpacing: "0.12em", textTransform: "uppercase" as const,
    cursor: "pointer", zIndex: 50,
    transition: "all 0.2s ease",
    boxShadow: isDark ? "0 0 12px rgba(14,165,233,0.15)" : "0 2px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div
      className={isDark ? "jo60-dark" : "jo60-light"}
      style={{
        minHeight: "100vh",
        background: isDark ? "#080c10" : "#f0f4f8",
        transition: "background 0.3s ease",
      }}
    >
      {view === "menu" && (
        <JO60Menu
          setView={(v) => {
            // Workout views require readiness check
            const isWorkout = Object.keys(weekTrackers).includes(v);
            if (isWorkout && !readiness) {
              setView("readiness");
            } else {
              setView(v);
            }
          }}
          isDark={isDark}
          toggleTheme={toggleTheme}
          readiness={readiness}
        />
      )}

      {view === "readiness" && (
        <JO60Readiness
          isDark={isDark}
          onComplete={(result) => {
            setReadiness(result);
            setView("menu");
          }}
          onBack={() => setView("menu")}
        />
      )}

      {Component && view !== "menu" && view !== "readiness" && <Component />}

      {!Component && view !== "menu" && view !== "readiness" && (
        <div style={{ textAlign: "center", color: "#ef4444", marginTop: 60, fontFamily: "monospace" }}>
          ⚠ View not found: {view}
        </div>
      )}

      {view !== "menu" && view !== "readiness" && (
        <button style={backBtnStyle} onClick={() => setView("menu")}>
          ← Menu
        </button>
      )}
    </div>
  );
}

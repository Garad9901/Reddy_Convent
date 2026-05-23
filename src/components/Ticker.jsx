import React from "react";

const NOTICES = [
  "🎓 Admission Open 2026-27 — Nursery, KG-1, KG-2 to 12th Std. | Call: 8208069609",
  "📚 त्रिवर्षीय शिक्षा समृद्धि योजना — 3 साल की फीस पर किताबें और यूनिफार्म मुफ्त! केवल 111 सीटें",
  "🤖 AI | IoT | Robotics | Digital Learning — International Standard Education",
  "🏛️ Mission IAS — UPSC / MPSC Coaching from Early Classes",
  "⚔️ NDA Defence Academy Preparation — Army, Navy, Air Force, Merchant Navy",
  "✅ Govt. Recognized (UDISE: 27090711806) | CBSE Curriculum | Self Finance",
  "📞 Helpline: 8855925216 | 7721040550 | 9022147313",
  "🌟 Start Right..... Future Bright ! | Temple of Education — Kodamendhi",
];

const Ticker = () => {
  const doubled = [...NOTICES, ...NOTICES];
  return (
    <div style={{ background: "linear-gradient(90deg, #7b1fa2, #6a1b9a, #4a148c)", padding: "8px 0", marginTop: 90, overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ display: "flex", gap: 80, animation: "ticker 45s linear infinite", whiteSpace: "nowrap", width: "max-content" }}
        onMouseOver={e => e.currentTarget.style.animationPlayState = "paused"}
        onMouseOut={e => e.currentTarget.style.animationPlayState = "running"}>
        {doubled.map((n, i) => (
          <span key={i} style={{ color: "#fff", fontWeight: 600, fontSize: 12.5, display: "inline-flex", alignItems: "center", gap: 6 }}>
            {n}
            <span style={{ opacity: 0.3, marginLeft: 30 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

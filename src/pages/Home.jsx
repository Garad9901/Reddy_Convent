import { useState, useEffect, useRef } from "react";
import { SCHOOL } from "../App";

const useCounter = (target, active) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let s = 0; const step = target / 60;
    const t = setInterval(() => {
      s += step;
      if (s >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 20);
    return () => clearInterval(t);
  }, [target, active]);
  return count;
};

const NOTICES = [
  { date: "20 May 2026", text: "Admission forms available at school office & online. Call 8208069609 for enquiry.", type: "Admissions", urgent: true },
  { date: "15 May 2026", text: "त्रिवर्षीय शिक्षा समृद्धि योजना — केवल 111 सीटें शेष। अंतिम तिथि: 11/05/2026", type: "योजना", urgent: true },
  { date: "10 May 2026", text: "AI, IoT, and Robotics lab sessions begin for Class 6th onwards from June 2026.", type: "Academic" },
  { date: "05 May 2026", text: "Parent-Teacher Meeting for Classes 5th–8th on June 5, 2026 at 10:00 AM.", type: "General" },
  { date: "01 May 2026", text: "Mission IAS Aptitude Workshop — Registration open for Classes 9th–12th.", type: "Academic" },
  { date: "28 Apr 2026", text: "NDA Defence Academy orientation session scheduled for interested Class 11-12 students.", type: "Defence" },
];

const GALLERY_PHOTOS = [
  { src: "/building.png", label: "School Building", desc: "Our 2-storey campus at Kodamendhi" },
  { src: "/entrance.png", label: "School Entrance", desc: "Welcoming entrance with steps and greenery" },
  { src: "/assembly.png", label: "Morning Assembly", desc: "Students in purple uniforms at assembly" },
  { src: "/yoga.png", label: "Yoga & Wellness", desc: "Daily yoga practice for holistic development" },
  { src: "/cultural.png", label: "Cultural Program", desc: "Annual cultural function with tricolor decorations" },
  { src: "/bus.png", label: "School Transport", desc: "School bus service for students" },
];

const noticeColor = (t) => ({ Admissions: "#1255CC", योजना: "#7b1fa2", Academic: "#1a7f4e", General: "#D4A017", Defence: "#b91c1c" }[t] || "#64748B");

const Home = ({ setPage }) => {
  const [activeNotice, setActiveNotice] = useState("All");
  const [statsOn, setStatsOn] = useState(false);
  const statsRef = useRef();
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [brochurePage, setBrochurePage] = useState(0);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsOn(true); }, { threshold: 0.2 });
    if (statsRef.current) ob.observe(statsRef.current);
    return () => ob.disconnect();
  }, []);

  const stats = [
    { n: 1200, s: "+", label: "Students Enrolled" },
    { n: 45, s: "+", label: "Dedicated Teachers" },
    { n: 25, s: "+", label: "Years of Excellence" },
    { n: 100, s: "%", label: "Govt. Recognized" },
  ];

  const filteredNotices = activeNotice === "All" ? NOTICES : NOTICES.filter(n => n.type === activeNotice);

  return (
    <div>

      {/* ══════ HERO ══════ */}
      <div style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img src="/building.png" alt="School Campus" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(6,15,40,0.95) 0%, rgba(6,15,40,0.85) 50%, rgba(6,15,40,0.5) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(transparent, #f4f6fb)" }} />

        <div style={{ position: "relative", zIndex: 5, maxWidth: 1300, margin: "0 auto", padding: "0 28px", width: "100%" }}>
          <div style={{ maxWidth: 720 }}>

            {/* Badges row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              <span style={{ background: "#7b1fa2", color: "#fff", padding: "4px 12px", borderRadius: 4, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5 }}>CBSE CURRICULUM</span>
              <span style={{ background: "#1a5276", color: "#fff", padding: "4px 12px", borderRadius: 4, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5 }}>GOVT. RECOGNIZED</span>
              <span style={{ background: "#1a7f4e", color: "#fff", padding: "4px 12px", borderRadius: 4, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5 }}>EST. 2000</span>
              <span style={{ background: "#c0392b", color: "#fff", padding: "4px 12px", borderRadius: 4, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5 }}>KODAMENDHI</span>
            </div>

            {/* Hindi tagline */}
            <div style={{ color: "#FFB800", fontFamily: "var(--font-h)", fontSize: "clamp(15px,2vw,19px)", fontStyle: "italic", marginBottom: 10, letterSpacing: 0.5 }}>
              {SCHOOL.taglineHindi}
            </div>

            <h1 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(28px,4.5vw,58px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 8 }}>
              Smt. Rajeshwari Reddy<br />
              <span style={{ color: "#FFB800" }}>Scholar Convent</span>
            </h1>
            <h2 style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(14px,2vw,20px)", fontWeight: 600, marginBottom: 6 }}>
              & Junior College, Kodamendhi
            </h2>
            <div style={{ color: "#FFB800", fontStyle: "italic", fontSize: 15, fontFamily: "var(--font-h)", marginBottom: 24 }}>
              "{SCHOOL.tagline}"
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15.5, lineHeight: 1.75, marginBottom: 28, maxWidth: 560 }}>
              <strong style={{ color: "#fff" }}>Nursery • KG-1 • KG-2 • 1st to 12th Std.</strong><br />
              Providing International Standard Education with AI, IoT, Robotics, and Mission IAS coaching in the heart of rural Maharashtra.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => setPage("Admissions")} style={{ background: "linear-gradient(135deg,#7b1fa2,#9c27b0)" }}>
                📋 Admission Enquiry 2026-27
              </button>
              <button style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", padding: "13px 24px", borderRadius: 50, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                onClick={() => setPage("About")}>
                Know Our School
              </button>
            </div>

            {/* Contact strip */}
            <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 20 }}>
              <a href={`tel:${SCHOOL.phone1}`} style={{ color: "rgba(255,255,255,0.65)", fontSize: 13.5, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                📞 {SCHOOL.phone1}
              </a>
              <a href={`tel:${SCHOOL.phone2}`} style={{ color: "rgba(255,255,255,0.65)", fontSize: 13.5, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                📞 {SCHOOL.phone2}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══════ STATS BAND ══════ */}
      <div ref={statsRef} style={{ background: "linear-gradient(90deg,#4a148c,#7b1fa2,#6a1b9a)", padding: "28px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 20 }}>
          {stats.map((s, i) => {
            const c = useCounter(s.n, statsOn);
            return (
              <div key={i} style={{ textAlign: "center", padding: "0 16px" }}>
                <div style={{ fontFamily: "var(--font-h)", fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, color: "#FFB800" }}>{c}{s.s}</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12.5, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══════ NOTICES + SIDEBAR ══════ */}
      <div style={{ background: "#f4f6fb", padding: "56px 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 28, alignItems: "start" }}>

          {/* Notices Board */}
          <div style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #e2e8f0" }}>
            <div style={{ background: "#4a148c", padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 18, fontWeight: 700 }}>📋 Notices & Circulars</h2>
              <span style={{ background: "#FFB800", color: "#040D1E", padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 800 }}>{NOTICES.length} Active</span>
            </div>
            <div style={{ padding: "10px 18px", display: "flex", gap: 8, flexWrap: "wrap", borderBottom: "1px solid #e2e8f0", background: "#f9fafb" }}>
              {["All", "Admissions", "योजना", "Academic", "Defence", "General"].map(t => (
                <button key={t} onClick={() => setActiveNotice(t)} style={{ padding: "4px 12px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 11.5, fontWeight: 700, background: activeNotice === t ? "#4a148c" : "#e2e8f0", color: activeNotice === t ? "#fff" : "#475569", transition: "all 0.2s" }}>{t}</button>
              ))}
            </div>
            {filteredNotices.map((n, i) => (
              <div key={i} style={{ padding: "14px 22px", borderBottom: "1px solid #f1f5f9", display: "flex", gap: 12, alignItems: "flex-start", background: n.urgent ? "#fdf4ff" : i % 2 === 0 ? "#fff" : "#fafbfd", cursor: "pointer" }}
                onMouseOver={e => e.currentTarget.style.background = "#f3e5f5"}
                onMouseOut={e => e.currentTarget.style.background = n.urgent ? "#fdf4ff" : i % 2 === 0 ? "#fff" : "#fafbfd"}>
                {n.urgent && <span style={{ color: "#c0392b", fontSize: 14, marginTop: 1, flexShrink: 0 }}>🔴</span>}
                <span style={{ background: noticeColor(n.type) + "15", color: noticeColor(n.type), border: `1px solid ${noticeColor(n.type)}40`, borderRadius: 5, padding: "2px 8px", fontSize: 10, fontWeight: 800, whiteSpace: "nowrap", flexShrink: 0, marginTop: 2 }}>{n.type}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "#1e293b", fontSize: 13.5, lineHeight: 1.55, margin: 0 }}>{n.text}</p>
                  <div style={{ color: "#94a3b8", fontSize: 11.5, marginTop: 5, fontWeight: 600 }}>📅 {n.date}</div>
                </div>
                <span style={{ color: "#7b1fa2", fontSize: 16, flexShrink: 0 }}>›</span>
              </div>
            ))}
            <div style={{ padding: "12px 22px", textAlign: "center", background: "#f8fafc" }}>
              <button onClick={() => setPage("Events")} style={{ color: "#7b1fa2", fontWeight: 700, fontSize: 13, background: "none", border: "none", cursor: "pointer" }}>View All Notices & Events →</button>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Admission CTA */}
            <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", borderRadius: 10, padding: "24px 20px", textAlign: "center", boxShadow: "0 4px 20px rgba(123,31,162,0.3)" }}>
              <div style={{ fontSize: 34, marginBottom: 8 }}>🎓</div>
              <h3 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 17, fontWeight: 800, marginBottom: 6 }}>Admissions Open 2026-27</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12.5, lineHeight: 1.6, marginBottom: 16 }}>
                Nursery • KG-1 • KG-2<br />1st Std. to 12th Std.<br />CBSE Curriculum
              </p>
              <button style={{ width: "100%", background: "#FFB800", color: "#040D1E", border: "none", padding: "11px", borderRadius: 6, fontWeight: 800, fontSize: 13, cursor: "pointer" }} onClick={() => setPage("Admissions")}>
                Apply Online Now
              </button>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 8 }}>📞 Call: {SCHOOL.admissionPhone}</div>
            </div>

            {/* त्रिवर्षीय योजना */}
            <div style={{ background: "#fff", borderRadius: 10, border: "2px solid #7b1fa2", overflow: "hidden", boxShadow: "0 2px 12px rgba(123,31,162,0.1)" }}>
              <div style={{ background: "#4a148c", padding: "12px 16px" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 11.5, textTransform: "uppercase", letterSpacing: 1 }}>Special Scheme</div>
                <h3 style={{ color: "#fff", fontSize: 14, fontWeight: 800, marginTop: 2 }}>त्रिवर्षीय शिक्षा समृद्धि योजना</h3>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <div style={{ color: "#1e293b", fontSize: 13, lineHeight: 1.65 }}>
                  {["📚 किताबें बिल्कुल मुफ्त", "👕 यूनिफार्म बिल्कुल मुफ्त", "💰 3 साल की फीस एक साथ", "🔢 केवल 111 सीटें उपलब्ध", "🤖 AI + IoT + Robotics included"].map((f, i) => (
                    <div key={i} style={{ padding: "5px 0", borderBottom: i < 4 ? "1px solid #f1f5f9" : "none", fontWeight: 600, color: i === 3 ? "#c0392b" : "#1e293b" }}>{f}</div>
                  ))}
                </div>
                <button onClick={() => setPage("Admissions")} style={{ width: "100%", background: "#7b1fa2", color: "#fff", border: "none", padding: "9px", borderRadius: 6, fontWeight: 700, fontSize: 12.5, cursor: "pointer", marginTop: 12 }}>
                  Know More →
                </button>
              </div>
            </div>

            {/* School Brochure Preview */}
            <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <div style={{ background: "#7b1fa2", padding: "12px 16px" }}>
                <h3 style={{ color: "#fff", fontSize: 13, fontWeight: 800 }}>📖 School Brochure 2026-27</h3>
              </div>
              <div style={{ padding: "16px", textAlign: "center" }}>
                <div style={{ position: "relative", borderRadius: 6, overflow: "hidden", border: "1px solid #e2e8f0", marginBottom: 12, cursor: "pointer" }} onClick={() => { setBrochurePage(0); setBrochureOpen(true); }}>
                  <img src="/brochure_page_1.jpg" alt="Brochure Cover" style={{ width: "100%", height: 160, objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 50%, rgba(0,0,0,0.8))", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 10 }}>
                    <span style={{ color: "#FFB800", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5 }}>Official Brochure</span>
                  </div>
                </div>
                <p style={{ color: "#475569", fontSize: 12, lineHeight: 1.5, marginBottom: 14 }}>
                  Browse the original brochure sheets detailing standard rules and guidelines.
                </p>
                <button 
                  onClick={() => { setBrochurePage(0); setBrochureOpen(true); }} 
                  style={{ width: "100%", background: "linear-gradient(135deg, #7b1fa2, #9c27b0)", color: "#fff", border: "none", padding: "10px", borderRadius: 6, fontWeight: 700, fontSize: 12.5, cursor: "pointer" }}
                >
                  View Brochure Pages →
                </button>
              </div>
            </div>

            {/* Helpline */}
            <div style={{ background: "#fff8e6", borderRadius: 10, border: "1px solid #fde68a", padding: "16px 18px" }}>
              <h4 style={{ color: "#92400e", fontWeight: 800, fontSize: 13.5, marginBottom: 10 }}>📞 Contact Helplines</h4>
              {[["Admissions", SCHOOL.admissionPhone], ["Office", SCHOOL.phone1], ["Transport", SCHOOL.phone2]].map(([l, n]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #fde68a", fontSize: 12.5, color: "#78350f" }}>
                  <span>{l}</span><strong>{n}</strong>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e2e8f0", overflow: "hidden" }}>
              <div style={{ background: "#1e293b", padding: "12px 16px" }}>
                <h3 style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>Quick Access</h3>
              </div>
              {[["📄 Admission Form", "Admissions"], ["📅 Academic Calendar", "Events"], ["🏫 Facilities", "Facilities"], ["👩‍🏫 Faculty", "Faculty"], ["🏆 Achievements", "Achievements"]].map(([l, p]) => (
                <div key={p} onClick={() => setPage(p)} style={{ padding: "10px 16px", borderBottom: "1px solid #f1f5f9", cursor: "pointer", fontSize: 13, color: "#334155", fontWeight: 500, display: "flex", justifyContent: "space-between" }}
                  onMouseOver={e => e.currentTarget.style.background = "#f3e5f5"}
                  onMouseOut={e => e.currentTarget.style.background = "#fff"}>
                  <span>{l}</span><span style={{ color: "#7b1fa2" }}>›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════ SPECIAL SCHEME HIGHLIGHT ══════ */}
      <div style={{ background: "linear-gradient(135deg,#4a148c 0%,#7b1fa2 50%,#9c27b0 100%)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Flagship Program</div>
              <h2 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: "clamp(22px,3vw,38px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}>
                त्रिवर्षीय शिक्षा<br />समृद्धि योजना
              </h2>
              <div style={{ color: "#FFB800", fontStyle: "italic", fontSize: 15, marginBottom: 18 }}>
                "Where Education Meets Innovation &amp; Excellence"
              </div>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
                Pay school fees for 3 years at once and receive <strong style={{ color: "#FFB800" }}>FREE Books + FREE Uniform</strong> every year. This special scheme includes International-standard AI, IoT, and Robotics education — limited to only <strong style={{ color: "#FFB800" }}>111 students</strong>.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => setPage("Admissions")} style={{ background: "#FFB800", color: "#040D1E", border: "none", padding: "13px 28px", borderRadius: 6, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                  Book Your Seat Now
                </button>
                <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "13px 20px", borderRadius: 6, fontWeight: 700, fontSize: 14 }}>
                  🔢 Only 111 Seats
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { icon: "🤖", title: "Robotics", desc: "Build real robots from scratch" },
                { icon: "🧠", title: "AI Learning", desc: "Artificial Intelligence basics" },
                { icon: "📡", title: "IoT", desc: "Internet of Things projects" },
                { icon: "💻", title: "Digital Learning", desc: "Smart class experience" },
                { icon: "⚽", title: "Sports", desc: "Physical development & team spirit" },
                { icon: "📚", title: "Free Books", desc: "All textbooks provided free" },
              ].map((f, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "16px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: 26, marginBottom: 6 }}>{f.icon}</div>
                  <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 13 }}>{f.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11.5, marginTop: 3 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════ MISSION IAS + NDA ══════ */}
      <div style={{ background: "#fff", padding: "64px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ color: "#7b1fa2", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>Career Development Programs</div>
            <h2 style={{ fontFamily: "var(--font-h)", color: "#0f172a", fontSize: "clamp(22px,3vw,36px)", fontWeight: 800 }}>Mission IAS &amp; Defence Academy</h2>
            <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>

            {/* Mission IAS */}
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div style={{ background: "linear-gradient(135deg,#1a237e,#283593)", padding: "24px 24px 20px" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 2 }}>Student Career Development</div>
                <h3 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 22, fontWeight: 800, marginTop: 4 }}>Mission I.A.S</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>
                  Foundation for Bright Future — "Pay Back to Society"
                </p>
              </div>
              <div style={{ padding: "20px 24px", background: "#fff" }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontWeight: 700, color: "#1a237e", fontSize: 13, marginBottom: 8 }}>UPSC Pathway:</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["IAS", "IPS", "IFS", "IRS"].map(s => (
                      <span key={s} style={{ background: "#e8eaf6", color: "#1a237e", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#1a237e", fontSize: 13, marginBottom: 8 }}>MPSC Pathway:</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["PSI", "STI", "ASO", "BEO", "Talathi", "SDO", "BDO"].map(s => (
                      <span key={s} style={{ background: "#fce4ec", color: "#c62828", padding: "4px 10px", borderRadius: 20, fontSize: 11.5, fontWeight: 700 }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontWeight: 700, color: "#1a237e", fontSize: 13, marginBottom: 8 }}>Other Services:</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["CRPF", "BSF", "CSF", "SRPF", "RPF", "Army"].map(s => (
                      <span key={s} style={{ background: "#e8f5e9", color: "#1b5e20", padding: "4px 10px", borderRadius: 20, fontSize: 11.5, fontWeight: 700 }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* NDA */}
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div style={{ background: "linear-gradient(135deg,#b71c1c,#c62828)", padding: "24px 24px 20px" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 2 }}>Defence Force as an Officer</div>
                <h3 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 22, fontWeight: 800, marginTop: 4 }}>NDA — National Defence Academy</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>
                  UPSC conducts NDA exam twice yearly. Serve as an Officer in India's armed forces.
                </p>
              </div>
              <div style={{ padding: "20px 24px", background: "#fff" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                  {[
                    { icon: "⚔️", name: "Army", color: "#1b5e20" },
                    { icon: "✈️", name: "Air Force", color: "#0d47a1" },
                    { icon: "⚓", name: "Navy", color: "#1565c0" },
                    { icon: "🚢", name: "Merchant Navy", color: "#01579b" },
                  ].map(f => (
                    <div key={f.name} style={{ background: "#f8fafc", border: `1px solid ${f.color}30`, borderRadius: 8, padding: "12px", textAlign: "center" }}>
                      <div style={{ fontSize: 22 }}>{f.icon}</div>
                      <div style={{ color: f.color, fontWeight: 800, fontSize: 12.5, marginTop: 4 }}>{f.name}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff8e6", borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "#78350f", lineHeight: 1.6 }}>
                  <strong>Eligibility:</strong> Class 12 pass (or appearing). Written test (Mathematics &amp; General Ability) followed by SSB Interview.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════ CAMPUS PHOTOS ══════ */}
      <div style={{ background: "#f4f6fb", padding: "64px 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ color: "#7b1fa2", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>Life at S.R.R. Scholar Convent</div>
            <h2 style={{ fontFamily: "var(--font-h)", color: "#0f172a", fontSize: "clamp(22px,3vw,36px)", fontWeight: 800 }}>Our Campus in Pictures</h2>
            <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "220px 220px", gap: 16 }}>
            {GALLERY_PHOTOS.slice(0, 5).map((p, i) => (
              <div key={i} style={{ gridColumn: i === 0 ? "1 / 3" : "auto", borderRadius: 10, overflow: "hidden", position: "relative", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", cursor: "pointer" }}
                onClick={() => setPage("Gallery")}>
                <img src={p.src} alt={p.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseOver={e => e.target.style.transform = "scale(1.05)"}
                  onMouseOut={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.7))", padding: "14px 16px 12px" }}>
                  <div style={{ color: "#FFB800", fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>{p.label}</div>
                  <div style={{ color: "#fff", fontSize: 12.5, marginTop: 2 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <button onClick={() => setPage("Gallery")} style={{ background: "#7b1fa2", color: "#fff", border: "none", padding: "12px 28px", borderRadius: 6, fontWeight: 700, fontSize: 13.5, cursor: "pointer" }}>
              View Full Gallery →
            </button>
          </div>
        </div>
      </div>

      {/* ══════ AFFILIATION STRIP ══════ */}
      <div style={{ background: "#fff", padding: "24px", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
          {[
            { icon: "🏛️", label: "CBSE Curriculum", sub: "Central Board of Secondary Education" },
            { icon: "✅", label: "Govt. Recognized", sub: `UDISE: ${SCHOOL.udise}` },
            { icon: "📜", label: "Index No.", sub: SCHOOL.index },
            { icon: "🌟", label: "Self Finance", sub: "Quality Education for All" },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 26 }}>{a.icon}</span>
              <div>
                <div style={{ color: "#0f172a", fontWeight: 800, fontSize: 13 }}>{a.label}</div>
                <div style={{ color: "#64748b", fontSize: 11.5 }}>{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════ BROCHURE LIGHTBOX MODAL ══════ */}
      {brochureOpen && (
        <div 
          onClick={() => setBrochureOpen(false)}
          style={{ 
            position: "fixed", 
            inset: 0, 
            zIndex: 9999, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            background: "rgba(0,0,0,0.92)", 
            padding: 20 
          }}
        >
          <div 
            onClick={e => e.stopPropagation()} 
            style={{ 
              maxWidth: 720, 
              width: "100%", 
              borderRadius: 12, 
              overflow: "hidden", 
              background: "#1e293b",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            {/* Modal Header */}
            <div style={{ background: "linear-gradient(135deg, #4a148c, #7b1fa2)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>📖 School Brochure — Page {brochurePage + 1} of 5</h3>
                <span style={{ color: "#FFB800", fontSize: 10.5, fontWeight: 700 }}>Smt. Rajeshwari Reddy Scholar Convent</span>
              </div>
              <button 
                onClick={() => setBrochureOpen(false)} 
                style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 34, height: 34, borderRadius: "50%", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ✕
              </button>
            </div>

            {/* Image Slider */}
            <div style={{ position: "relative", background: "#0b0813", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 0" }}>
              
              {/* Image */}
              <img 
                src={`/brochure_page_${brochurePage + 1}.jpg`} 
                alt={`Brochure Page ${brochurePage + 1}`} 
                style={{ maxHeight: "65vh", maxWidth: "100%", objectFit: "contain" }} 
              />
              
              {/* Prev Button */}
              <button 
                onClick={() => setBrochurePage(prev => (prev > 0 ? prev - 1 : 4))}
                style={{ 
                  position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff", width: 44, height: 44, borderRadius: "50%", cursor: "pointer",
                  fontSize: 20, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center"
                }}
                onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
                onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              >
                ‹
              </button>

              {/* Next Button */}
              <button 
                onClick={() => setBrochurePage(prev => (prev < 4 ? prev + 1 : 0))}
                style={{ 
                  position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff", width: 44, height: 44, borderRadius: "50%", cursor: "pointer",
                  fontSize: 20, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center"
                }}
                onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
                onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              >
                ›
              </button>

            </div>

            {/* Dot indicators & Actions */}
            <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#151025" }}>
              {/* Dots */}
              <div style={{ display: "flex", gap: 8 }}>
                {[0, 1, 2, 3, 4].map(idx => (
                  <span 
                    key={idx}
                    onClick={() => setBrochurePage(idx)}
                    style={{ 
                      width: 10, height: 10, borderRadius: "50%", cursor: "pointer",
                      background: brochurePage === idx ? "#FFB800" : "rgba(255,255,255,0.2)",
                      transition: "all 0.2s"
                    }}
                  />
                ))}
              </div>
              <a 
                href={`/brochure_page_${brochurePage + 1}.jpg`} 
                download={`brochure_page_${brochurePage + 1}.jpg`}
                style={{ background: "#7b1fa2", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, textDecoration: "none", cursor: "pointer" }}
              >
                📥 Download Page
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Home;

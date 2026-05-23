import { useState } from "react";
import { SCHOOL } from "../App";

const EXCELLENCE_CATEGORIES = [
  {
    icon: "🎓",
    title: "CBSE Board Academics",
    cat: "Academics",
    desc: "Rigorous syllabus coverage, conceptual clarity, and intensive mock examination practice for Board Year success.",
    milestones: [
      "100% board examination passing rate standard",
      "Conceptual doubt-clearing tutoring frameworks",
      "Detailed visual syllabus explanations",
      "Regular testing cycles aligned with CBSE board blueprints"
    ]
  },
  {
    icon: "🏛️",
    title: "Mission IAS Foundation",
    cat: "Career Pathways",
    desc: "A bespoke career program building deep general awareness, geographical literacy, and logical reasoning early on.",
    milestones: [
      "Early age Civil Services orientation models",
      "Analytical reading habits development",
      "Interactive debates on current global affairs",
      "Focus on logic, verbal reasoning, and history"
    ]
  },
  {
    icon: "🎖️",
    title: "NDA Defence Academy Training",
    cat: "Career Pathways",
    desc: "Dedicated programs focused on physical conditioning, discipline, and strategic thinking for national armed forces.",
    milestones: [
      "General awareness and military history orientation",
      "Structured physical stamina and agility testing",
      "Leadership building and team coordination exercises",
      "SSB interview preparation strategies"
    ]
  },
  {
    icon: "🤖",
    title: "AI, IoT & Robotics Innovation",
    cat: "Technology",
    desc: "Hands-on technology projects building autonomous physical rover platforms and internet-connected smart systems.",
    milestones: [
      "Arduino and basic hardware breadboard integration",
      "Visual scratch and basic coding programming courses",
      "Annual school-wide tech innovation exhibitions",
      "Building conceptual knowledge of modern digital tools"
    ]
  },
  {
    icon: "🏃",
    title: "Sports & Athletics Honors",
    cat: "Co-curricular",
    desc: "Fostering district-level sportsmanship, athletics endurance, volleyball coordination, and healthy team play.",
    milestones: [
      "Regular physical training and sprint schedules",
      "Coaching in team cricket, football, and volleyball",
      "Annual Sports Meet with trophy distributions",
      "Focus on healthy body, sportsmanship, and coordination"
    ]
  },
  {
    icon: "🎨",
    title: "Cultural & Staging Arts",
    cat: "Co-curricular",
    desc: "Nurturing creative self-expression, music, tricolor classical staging, and pottery design structures.",
    milestones: [
      "Annual Tarang Cultural Fest showcases",
      "Patriotic tricolor parade and staging events",
      "Acoustic music and traditional vocal training",
      "Visual sketches and craft exhibitions"
    ]
  }
];

const BOARD_TOPPERS = [
  { name: "Master Amit Deshmukh", standard: "Class X CBSE 2025", score: "95.8%", emoji: "🥇", reward: "S.R.R. Academic Gold Medalist" },
  { name: "Miss Priya Tonge", standard: "Class X CBSE 2025", score: "94.6%", emoji: "🥈", reward: "Class Topper - Languages" },
  { name: "Master Sachin Garad", standard: "Class XII Science 2025", score: "92.4%", emoji: "🥇", reward: "Science Stream Topper" },
  { name: "Miss Sneha Kulkarni", standard: "Class XII Science 2025", score: "91.8%", emoji: "🥈", reward: "Biology Stream Scholar" }
];

const HISTORICAL_MILESTONES = [
  { year: "2000", title: "Foundation in Kodamendhi", desc: "Established the convent school with primary classes, bringing quality English-medium education to rural Nagpur families." },
  { year: "2008", title: "Middle School Expansion", desc: "Inaugurated the second block of the main building and added secondary standards aligned with CBSE curriculum." },
  { year: "2015", title: "Mission IAS Launched", desc: "Pioneered the flagship civil services foundation coaching program to cultivate early general awareness and reasoning." },
  { year: "2019", title: "NDA & Junior College Addition", desc: "Added Higher Secondary standard (Science stream) and NDA training drills, providing solid local career pathways." },
  { year: "2023", title: "Digital Smart Classrooms", desc: "Fully modernized all school learning zones with digital interactive smart board displays." },
  { year: "2026", title: "AI, IoT & Robotics Laboratory", desc: "Inaugurated our integrated tech laboratory workstations for electronics, coding, and physical computing." }
];

const CATEGORIES = ["All", "Academics", "Career Pathways", "Technology", "Co-curricular"];

const Achievements = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [selectedArea, setSelectedArea] = useState(null);

  const filteredData = EXCELLENCE_CATEGORIES.filter(
    (item) => activeCat === "All" || item.cat === activeCat
  );

  return (
    <div style={{ paddingTop: 74, background: "#f8fafc" }}>
      
      {/* ─── HEADER BANNER ─── */}
      <div 
        style={{ 
          background: "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)", 
          padding: "120px 0 80px",
          textAlign: "center",
          position: "relative",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Board of Excellence</span>
          <h1 
            style={{ 
              fontFamily: "var(--font-h)", 
              fontSize: "clamp(32px, 5vw, 54px)", 
              fontWeight: 800, 
              color: "var(--white)", 
              marginTop: 14 
            }}
          >
            Our Achievements
          </h1>
          <div className="gold-line" style={{ margin: "18px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
          <p className="section-sub" style={{ maxWidth: 680, margin: "0 auto", color: "rgba(255,255,255,0.75)" }}>
            Discover our actual academic toppers, program expansions, and structured benchmarks of student growth.
          </p>
        </div>
      </div>

      {/* ─── BOARD OF HONOR (TOPPERS CORNER) ─── */}
      <div style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          
          <div 
            style={{ 
              background: "linear-gradient(135deg, #150d24 0%, #201138 100%)", 
              borderRadius: 16, 
              padding: "48px 40px", 
              boxShadow: "0 15px 40px rgba(74,20,140,0.2)",
              border: "2px solid #FFB800",
              textAlign: "center"
            }}
          >
            <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.3)", marginBottom: 12 }}>Board of Honor</span>
            <h2 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Topper's Corner</h2>
            <div className="gold-line" style={{ margin: "12px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
            <p style={{ color: "var(--gray)", fontSize: 14.5, maxWidth: 600, margin: "0 auto 36px" }}>
              Felicitation of our high-performing local scholars in the Class X &amp; XII CBSE Board Examinations.
            </p>

            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
                gap: 24 
              }}
            >
              {BOARD_TOPPERS.map((top, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12,
                    padding: 24,
                    textAlign: "center",
                    position: "relative"
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{top.emoji}</div>
                  <h3 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 18, fontWeight: 800 }}>{top.name}</h3>
                  <div style={{ color: "var(--gray)", fontSize: 12, marginTop: 4 }}>{top.standard}</div>
                  
                  <div 
                    style={{ 
                      fontSize: 32, 
                      fontWeight: 900, 
                      color: "#FFB800", 
                      fontFamily: "var(--font-b)", 
                      margin: "14px 0 8px" 
                    }}
                  >
                    {top.score}
                  </div>
                  
                  <div 
                    style={{ 
                      background: "rgba(255,184,0,0.12)", 
                      color: "var(--gold2)", 
                      borderRadius: 20, 
                      padding: "4px 12px", 
                      fontSize: 11, 
                      fontWeight: 700, 
                      display: "inline-block" 
                    }}
                  >
                    {top.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ─── EDUCATIONAL BENCHMARKS (FILTERABLE GRID) ─── */}
      <div style={{ background: "#f1f5f9", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="badge" style={{ background: "#fdf4ff", color: "#7b1fa2", borderColor: "#e9d5ff" }}>Core Benchmarks</span>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 32, fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Areas of Excellence</h2>
            <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto" }} />
          </div>

          {/* Categories Selector */}
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: 10, 
              flexWrap: "wrap",
              marginBottom: 44 
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                style={{
                  background: activeCat === cat ? "linear-gradient(135deg, #7b1fa2, #9c27b0)" : "#fff",
                  color: activeCat === cat ? "#fff" : "#475569",
                  border: activeCat === cat ? "none" : "1px solid #cbd5e1",
                  padding: "9px 18px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 700,
                  transition: "var(--trans)",
                  boxShadow: activeCat === cat ? "0 4px 12px rgba(123,31,162,0.2)" : "none"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Excellence Cards Grid */}
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: 24
            }}
          >
            {filteredData.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedArea(item)}
                style={{
                  borderRadius: 14,
                  padding: 30,
                  textAlign: "center",
                  border: "1px solid #cbd5e1",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  alignItems: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  transition: "var(--trans)"
                }}
                className="card-hover"
              >
                <div style={{ fontSize: 44 }}>{item.icon}</div>
                <div>
                  <span 
                    style={{ 
                      background: "#fdf4ff", 
                      color: "#7b1fa2", 
                      border: "1px solid #e9d5ff",
                      borderRadius: 20,
                      padding: "3px 12px",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase"
                    }}
                  >
                    {item.cat}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-h)", fontSize: 19, fontWeight: 800, color: "#0f172a", marginTop: 10 }}>
                    {item.title}
                  </h3>
                </div>
                <div style={{ width: "100%", height: 1, background: "#f1f5f9" }} />
                <p style={{ color: "#475569", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
                <div style={{ marginTop: "auto", color: "#7b1fa2", fontSize: 12.5, fontWeight: 700 }}>
                  View Learning Standards ➔
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ─── HISTORICAL MILESTONES TIMELINE ─── */}
      <div style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span className="badge" style={{ background: "#fdf4ff", color: "#7b1fa2", borderColor: "#e9d5ff" }}>Our Journey</span>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 32, fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Milestone Timeline</h2>
            <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto" }} />
            <p style={{ color: "#475569", fontSize: 14.5, maxWidth: 560, margin: "0 auto" }}>
              How a primary convent school in Kodamendhi evolved into a pioneering technology and civil academy sandbox.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
            {/* Timeline Center Line */}
            <div 
              style={{ 
                position: "absolute", 
                top: 0, 
                bottom: 0, 
                left: 45, 
                width: 2, 
                background: "#e2e8f0" 
              }} 
            />

            {HISTORICAL_MILESTONES.map((evt, idx) => (
              <div 
                key={idx}
                style={{
                  display: "flex",
                  gap: 24,
                  alignItems: "stretch",
                  position: "relative"
                }}
              >
                {/* Year Badge */}
                <div 
                  style={{
                    width: 90,
                    background: "linear-gradient(135deg, #7b1fa2, #4a148c)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 6px",
                    flexShrink: 0,
                    boxShadow: "0 4px 10px rgba(123,31,162,0.15)",
                    zIndex: 2,
                    color: "#fff",
                    fontWeight: 900,
                    fontFamily: "var(--font-h)",
                    fontSize: 20
                  }}
                >
                  {evt.year}
                </div>

                {/* Content Card */}
                <div 
                  style={{
                    flex: 1,
                    borderRadius: 12,
                    padding: "20px 24px",
                    border: "1px solid #cbd5e1",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6
                  }}
                >
                  <h3 style={{ color: "#0f172a", fontSize: 16.5, fontWeight: 800 }}>
                    {evt.title}
                  </h3>
                  <p style={{ color: "#475569", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ─── MODAL DETAIL OVERLAY ─── */}
      {selectedArea && (
        <div 
          onClick={() => setSelectedArea(null)}
          style={{ 
            position: "fixed", 
            inset: 0, 
            zIndex: 9999, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            background: "rgba(15,23,42,0.6)", 
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            padding: 24,
            animation: "fadeIn 0.3s ease" 
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              maxWidth: 560, 
              width: "100%", 
              borderRadius: 12, 
              border: "1px solid #cbd5e1",
              background: "#fff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              overflow: "hidden"
            }}
          >
            {/* Header */}
            <div 
              style={{ 
                background: "linear-gradient(135deg, #4a148c, #7b1fa2)", 
                padding: "24px 30px", 
                position: "relative",
                borderBottom: "1px solid #cbd5e1",
                display: "flex",
                alignItems: "center",
                gap: 16
              }}
            >
              <span style={{ fontSize: 44 }}>{selectedArea.icon}</span>
              <div>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 20, color: "#fff", fontWeight: 750 }}>
                  {selectedArea.title}
                </h3>
                <span className="badge" style={{ marginTop: 4, padding: "3px 10px", fontSize: 9, background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.3)" }}>Learning Standard</span>
              </div>
              
              <button 
                onClick={() => setSelectedArea(null)}
                style={{ 
                  position: "absolute", 
                  top: 20, 
                  right: 20,
                  background: "rgba(255,255,255,0.15)", 
                  border: "none", 
                  color: "#fff", 
                  width: 32, 
                  height: 32, 
                  borderRadius: "50%", 
                  cursor: "pointer", 
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: 30, display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <h4 style={{ color: "#0f172a", fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
                  Curriculum Integration:
                </h4>
                <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>
                  {selectedArea.desc}
                </p>
              </div>

              <div>
                <h4 style={{ color: "#7b1fa2", fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>
                  Student Goals &amp; Benchmarks:
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
                  {selectedArea.milestones.map((mil, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: 13.5 }}>
                      <span style={{ color: "#7b1fa2", fontWeight: 900 }}>•</span>
                      <span>{mil}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div 
              style={{ 
                background: "#f8fafc", 
                padding: "16px 30px", 
                borderTop: "1px solid #cbd5e1",
                display: "flex",
                justifyContent: "flex-end" 
              }}
            >
              <button 
                className="btn-primary" 
                style={{ padding: "8px 20px", fontSize: 13, borderRadius: 20, background: "linear-gradient(135deg, #7b1fa2, #9c27b0)", color: "#fff", border: "none", cursor: "pointer", fontWeight: 700 }}
                onClick={() => setSelectedArea(null)}
              >
                Close Benchmarks View
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Achievements;

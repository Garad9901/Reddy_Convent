import { useState } from "react";
import { SCHOOL } from "../App";

const EXCELLENCE_DATA = [
  {
    icon: "🎓",
    title: "CBSE Academic Excellence",
    cat: "Academics",
    desc: "Rigorous syllabus coverage, conceptual clarity, and intensive mock examination practice for Board Year success.",
    milestones: [
      "100% board examination passing rate standards",
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
  },
  {
    icon: "🧘",
    title: "Yogic Wellness & Focus",
    cat: "Wellness",
    desc: "Integrating group morning yoga practices and breathing meditation to align child mental wellness and concentration.",
    milestones: [
      "Daily morning assembly group yoga routines",
      "Breathing focus practices for classroom concentration",
      "Instruction in classical physical postures",
      "Educating on balanced, healthy lifestyle principles"
    ]
  }
];

const CATEGORIES = ["All", "Academics", "Career Pathways", "Technology", "Co-curricular", "Wellness"];

const Achievements = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [selectedArea, setSelectedArea] = useState(null);

  const filteredData = EXCELLENCE_DATA.filter(
    (item) => activeCat === "All" || item.cat === activeCat
  );

  return (
    <div style={{ paddingTop: 74 }}>
      
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
          <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Wall of Excellence</span>
          <h1 
            style={{ 
              fontFamily: "var(--font-h)", 
              fontSize: "clamp(32px, 5vw, 54px)", 
              fontWeight: 800, 
              color: "var(--white)", 
              marginTop: 14 
            }}
          >
            Pillars of Achievement
          </h1>
          <div className="gold-line" style={{ margin: "18px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
          <p className="section-sub" style={{ maxWidth: 680, margin: "0 auto", color: "rgba(255,255,255,0.75)" }}>
            Our achievements are built on structural learning models, encouraging career readiness, digital skills, and complete physical fitness.
          </p>
        </div>
      </div>

      {/* ─── PATHWAYS AND PROGRAMS PORTAL ─── */}
      <div style={{ background: "var(--dark)", padding: "80px 0 100px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>
          
          {/* Categories Selector */}
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: 10, 
              flexWrap: "wrap",
              marginBottom: 48 
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                style={{
                  background: activeCat === cat ? "linear-gradient(135deg, var(--gold), var(--gold2))" : "rgba(255, 255, 255, 0.05)",
                  color: activeCat === cat ? "#040D1E" : "var(--white)",
                  border: "none",
                  padding: "10px 22px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: 13.5,
                  fontWeight: 700,
                  transition: "var(--trans)"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Excellence Cards Grid */}
          <div 
            className="animate-fadeUp"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: 28
            }}
          >
            {filteredData.map((item, idx) => (
              <div
                key={idx}
                className="glass card-hover"
                onClick={() => setSelectedArea(item)}
                style={{
                  borderRadius: "var(--rad)",
                  padding: 30,
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "var(--trans)"
                }}
              >
                {/* Big Icon */}
                <div 
                  style={{ 
                    fontSize: 50, 
                    filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.35))",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <span 
                    style={{ 
                      background: "rgba(255,184,0,0.12)", 
                      color: "var(--gold2)", 
                      border: "1px solid rgba(255,184,0,0.25)",
                      borderRadius: 20,
                      padding: "3px 12px",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase"
                    }}
                  >
                    {item.cat}
                  </span>
                  <h3 
                    style={{ 
                      fontFamily: "var(--font-h)", 
                      fontSize: 20, 
                      fontWeight: 700, 
                      color: "var(--white)",
                      marginTop: 10 
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.05)", margin: "4px 0" }} />

                <p style={{ color: "var(--gray)", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
                
                <div 
                  style={{ 
                    marginTop: "auto", 
                    color: "var(--gold2)", 
                    fontSize: 12.5, 
                    fontWeight: 700, 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 6 
                  }}
                >
                  View Benchmarks ➔
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ─── PEDAGOGICAL COMMITMENT BAND ─── */}
      <div 
        style={{ 
          background: "#fff", 
          padding: "80px 24px", 
          color: "#1e293b",
          borderTop: "1px solid rgba(255,255,255,0.05)" 
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ background: "#f3e5f5", color: "#7b1fa2", border: "1px solid #ce93d8", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Our Commitment</span>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: 32, fontWeight: 800, color: "#0f172a", marginTop: 14 }}>
            Dedication to Quality Education
          </h2>
          <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto" }} />
          <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, maxWidth: 680, margin: "0 auto 36px" }}>
            "Start Right..... Future Bright !" At Smt. Rajeshwari Reddy Scholar Convent, we pledge to keep our teaching frameworks honest, highly advanced, and safe. We focus on building capabilities that allow children from rural communities to excel in any professional path.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { t: "Honest Standards", d: "Zero inflated records or fabricated statistics. We present transparent student details." },
              { t: "Digital Literacy", d: "Teaching actual AI, IoT, coding, and basic hardware arrays early in childhood." },
              { t: "Value Integration", d: "Providing traditional ethics, civil mindfulness, and patriotic values to every scholar." },
            ].map((p, idx) => (
              <div key={idx} style={{ background: "#fdf4ff", border: "1px solid #e9d5ff", padding: "24px 20px", borderRadius: 12, textAlign: "left" }}>
                <h3 style={{ color: "#4a148c", fontSize: 16, fontWeight: 800, marginBottom: 8 }}>{p.t}</h3>
                <p style={{ color: "#475569", fontSize: 13.5, lineHeight: 1.6 }}>{p.d}</p>
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
            background: "rgba(4, 13, 30, 0.85)", 
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            padding: 24,
            animation: "fadeIn 0.3s ease" 
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              maxWidth: 580, 
              width: "100%", 
              borderRadius: "var(--rad)", 
              border: "1px solid rgba(212, 160, 23, 0.25)",
              background: "#071330",
              boxShadow: "var(--shadow-lg), 0 20px 60px rgba(0,0,0,0.6)",
              overflow: "hidden"
            }}
          >
            {/* Header */}
            <div 
              style={{ 
                background: "linear-gradient(135deg, #4a148c, #7b1fa2)", 
                padding: "24px 30px", 
                position: "relative",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                gap: 16
              }}
            >
              <span style={{ fontSize: 44 }}>{selectedArea.icon}</span>
              <div>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 20, color: "var(--white)", fontWeight: 700 }}>
                  {selectedArea.title}
                </h3>
                <span className="badge" style={{ marginTop: 4, padding: "3px 10px", fontSize: 9, background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.3)" }}>Excellence Standard</span>
              </div>
              
              <button 
                onClick={() => setSelectedArea(null)}
                style={{ 
                  position: "absolute", 
                  top: 20, 
                  right: 20,
                  background: "rgba(255,255,255,0.06)", 
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
                <h4 style={{ color: "var(--white)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.5px" }}>
                  Curriculum Integration:
                </h4>
                <p style={{ color: "var(--gray)", fontSize: 13.5, lineHeight: 1.7 }}>
                  {selectedArea.desc}
                </p>
              </div>

              <div>
                <h4 style={{ color: "var(--gold2)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginBottom: 10, letterSpacing: "0.5px" }}>
                  Student Milestones &amp; Goals:
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
                  {selectedArea.milestones.map((mil, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--white)", fontSize: 13 }}>
                      <span style={{ color: "var(--gold2)", fontWeight: 900 }}>•</span>
                      <span>{mil}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div 
              style={{ 
                background: "rgba(255,255,255,0.02)", 
                padding: "16px 30px", 
                borderTop: "1px solid rgba(255,255,255,0.06)",
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

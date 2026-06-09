import React from "react";
import { SCHOOL } from "../App";

const About = () => {
  return (
    <div style={{ paddingTop: 74 }}>

      {/* ─── ABOUT HERO SECTION ─── */}
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
          <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Temple of Education</span>
          <h1
            style={{
              fontFamily: "var(--font-h)",
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: 800,
              color: "var(--white)",
              marginTop: 14
            }}
          >
            About Our School
          </h1>
          <div className="gold-line" style={{ margin: "18px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
          <p className="section-sub" style={{ maxWidth: 680, margin: "0 auto", color: "rgba(255,255,255,0.75)" }}>
            Rajeshwari Convent & Junior College — a Govt. Recognized, CBSE-affiliated institution providing quality education from Nursery to 12th Std. in Kodamendhi.
          </p>
        </div>
      </div>

      {/* ─── STORY, VISION & MISSION ─── */}
      <div style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "center" }}>

            {/* Left: Narrative text */}
            <div>
              <span style={{ background: "#f3e5f5", color: "#7b1fa2", border: "1px solid #ce93d8", padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Our Story</span>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, color: "#0f172a", marginTop: 16, lineHeight: 1.2 }}>
                घर से दूर, एक सुन्दर घर
              </h2>
              <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "16px 0" }} />

              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>
                Rajeshwari Convent was established with a clear mission — to bring <strong style={{ color: "#4a148c" }}>international-standard education</strong> to the children of Kodamendhi and surrounding villages. The school is a <strong style={{ color: "#4a148c" }}>Self-Finance, Government Recognized</strong> institution committed to nurturing young minds.
              </p>

              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}>
                Our tagline <em>"Start Right..... Future Bright !"</em> reflects our belief that a strong educational foundation leads to lifelong success. As a "Temple of Education," we provide not just academics but a complete ecosystem for student growth — including modern technology, competitive exam preparation, and character development.
              </p>

              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.85, marginBottom: 24 }}>
                With programs like <strong style={{ color: "#4a148c" }}>Mission IAS</strong>, <strong style={{ color: "#4a148c" }}>NDA Defence Academy</strong> coaching, and comprehensive <strong style={{ color: "#4a148c" }}>Computer &amp; Creative Science</strong> Laboratories, we prepare our students for every career path — from civil services to armed forces, from modern computing to entrepreneurship.
              </p>

              {/* Quick metrics */}
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                {[
                  { n: "CBSE", l: "Curriculum" },
                  { n: "Govt.", l: "Recognized" },
                  { n: "K–12", l: "Nursery to 12th" },
                  { n: "Self", l: "Finance" }
                ].map((item, idx) => (
                  <div key={idx} style={{ minWidth: 80, textAlign: "center", background: "#fdf4ff", borderRadius: 10, padding: "14px 18px", border: "1px solid #e9d5ff" }}>
                    <div style={{ fontFamily: "var(--font-h)", fontSize: 22, fontWeight: 800, color: "#7b1fa2" }}>
                      {item.n}
                    </div>
                    <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginTop: 4 }}>
                      {item.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Campus Image & Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(123,31,162,0.2)",
                  border: "3px solid #7b1fa2",
                  position: "relative"
                }}
              >
                <img src="/building.png" alt="School Building at Kodamendhi" style={{ width: "100%", height: 260, objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(74,20,140,0.9))", padding: "20px 18px 14px" }}>
                  <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 13 }}>Multi-Storey Campus</div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>Modern facilities at Kodamendhi</div>
                </div>
              </div>

              <div style={{
                background: "linear-gradient(135deg,#4a148c,#7b1fa2)",
                borderRadius: 16,
                padding: "28px 24px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🎓</div>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 20, color: "#fff", fontWeight: 700, marginBottom: 10 }}>
                  Our Recognition
                </h3>
                <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                  {[
                    { label: "UDISE", value: SCHOOL.udise },
                    { label: "Index No.", value: SCHOOL.index },
                  ].map((item, idx) => (
                    <div key={idx} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 18px", border: "1px solid rgba(255,255,255,0.15)" }}>
                      <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontWeight: 600 }}>{item.label}</div>
                      <div style={{ color: "#FFB800", fontSize: 15, fontWeight: 800, marginTop: 2 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PROGRAMS & OFFERINGS ─── */}
      <div style={{ background: "#f4f6fb", padding: "80px 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ background: "#f3e5f5", color: "#7b1fa2", border: "1px solid #ce93d8", padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>What We Offer</span>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Holistic Education Programs</h2>
            <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto 0" }} />
            <p style={{ color: "#64748b", fontSize: 15, marginTop: 12, maxWidth: 600, margin: "12px auto 0" }}>
              Beyond textbooks — we prepare students for life with a unique blend of academics, technology, and career foundation.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { icon: "🏛️", title: "CBSE Curriculum", desc: "Nursery to 12th Std. with structured academic approach following CBSE guidelines for holistic student development." },
              { icon: "💻", title: "Computer Science & ICT", desc: "Fostering early digital literacy, keyboard training, MS Office software, and internet safety modules." },
              { icon: "🔬", title: "Logical Science Labs", desc: "Hands-on science experiments mapping physical, chemical, and biological concepts to build strong fundamentals." },
              { icon: "🧩", title: "Creative Coding Basics", desc: "Learning core logical thinking steps using simple Scratch block coding interfaces to create interactive stories." },
              { icon: "💻", title: "Digital Learning", desc: "Smart classrooms with internet-enabled digital teaching for interactive and engaging learning experience." },
              { icon: "🏛️", title: "Mission IAS Foundation", desc: "UPSC/MPSC coaching foundation from early classes — IAS, IPS, IFS, PSI, STI, and more career pathways." },
              { icon: "⚔️", title: "NDA Defence Academy", desc: "Defence Forces preparation — Army, Navy, Air Force, Merchant Navy. NDA exam coaching for Class 11-12 students." },
              { icon: "⚽", title: "Sports & Physical Education", desc: "Regular sports activities, yoga sessions, and physical development for building team spirit and discipline." },
              { icon: "🎭", title: "Cultural Programs", desc: "Regular cultural events, Independence Day celebrations, annual day functions fostering creativity and confidence." },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "28px 22px",
                  textAlign: "center",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(123,31,162,0.15)";
                  e.currentTarget.style.borderColor = "#ce93d8";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ color: "#4a148c", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: 13.5, lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CORE VALUES SECTION ─── */}
      <div style={{ background: "#0f0a1a", padding: "80px 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Our Philosophy</span>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, color: "#fff", marginTop: 14 }}>Core Educational Values</h2>
            <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #FFB800, #D4A017)", borderRadius: 2, margin: "14px auto" }} />
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, maxWidth: 600, margin: "0 auto" }}>
              These principles guide our daily teaching, administration, and student development across all grade levels.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { i: "🎯", v: "Academic Excellence", d: "Dedicated to building strong academic foundations with CBSE curriculum and conceptual clarity from Nursery to 12th." },
              { i: "🤝", v: "Integrity & Discipline", d: "Building core values of honesty, respect, and accountability — shaping responsible citizens of tomorrow." },
              { i: "💡", v: "Innovation & Technology", d: "Preparing students for the future with Computer Education, Creative Science, and Digital Learning from early classes." },
              { i: "🌱", v: "Holistic Development", d: "Nurturing growth through sports, yoga, cultural programs, and social-emotional learning alongside academics." },
              { i: "🇮🇳", v: "Nation Building", d: "Mission IAS and NDA programs inspire students to serve the nation through civil services and defence forces." },
              { i: "❤️", v: "Warm Community", d: "\"घर से दूर, एक सुन्दर घर\" — A beautiful home away from home where every student belongs." }
            ].map((val, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(14px)",
                  borderRadius: 16,
                  padding: "36px 24px",
                  textAlign: "center",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(123,31,162,0.4)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(123,31,162,0.2)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{val.i}</div>
                <h3 style={{ color: "#FFB800", fontWeight: 800, fontSize: 18, marginBottom: 10 }}>
                  {val.v}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13.5, lineHeight: 1.65 }}>
                  {val.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;

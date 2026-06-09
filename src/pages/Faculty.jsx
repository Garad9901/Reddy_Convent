import { useState } from "react";
import { SCHOOL } from "../App";

const FACULTY_ROSTER = [
  {
    name: "Mr. Rajesh Reddy",
    role: "General Administrator & Founder",
    qual: "MBA in Educational Management",
    exp: "16 Years",
    emoji: "👨‍💼",
    dept: "Administration",
    bio: "Manages overall school regulatory compliance, CBSE affiliations, infrastructure planning, and maintains close ties with the Kodamendhi village community.",
    email: "rajesh.reddy@gmail.com"
  },
  {
    name: "Mr. Vinod Garad",
    role: "HOD of Mathematics & Science stream",
    qual: "M.Sc. in Mathematics, B.Ed.",
    exp: "12 Years",
    emoji: "👨‍🏫",
    dept: "Junior College",
    bio: "Guides 11th and 12th standard Science students through higher algebra, trigonometry, and calculus. Runs doubt-clearing sessions daily.",
    email: "vinod.garad.math@gmail.com"
  },
  {
    name: "Mrs. Archana Sharma",
    role: "Secondary Science Educator",
    qual: "M.Sc. in Chemistry, B.Ed.",
    exp: "10 Years",
    emoji: "👩‍🔬",
    dept: "Secondary",
    bio: "Directs all laboratory experiments in Physics, Chemistry, and Biology. Integrates interactive smart boards to simplify complex organic equations.",
    email: "archana.sharma.sci@gmail.com"
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Technology & Robotics Coordinator",
    qual: "B.E. in Computer Science & Engineering",
    exp: "6 Years",
    emoji: "🤖",
    dept: "Technology",
    bio: "Directs our AI, IoT, and Robotics lab. Teaches students visual block coding, simple circuit boards, and helps assemble functional sensor rovers.",
    email: "rajesh.tech.srr@gmail.com"
  },
  {
    name: "Mrs. Sunita Deshmukh",
    role: "Primary School Coordinator",
    qual: "M.A. in English Literature, B.Ed.",
    exp: "8 Years",
    emoji: "👩‍🏫",
    dept: "Primary",
    bio: "Fosters early childhood English, Hindi, and Marathi literacy through storytelling, active visual drills, and fun collaborative classroom games.",
    email: "sunita.deshmukh.prim@gmail.com"
  },
  {
    name: "Mr. Dilip Tonge",
    role: "Physical Education & Yoga Instructor",
    qual: "M.P.Ed. (Master of Physical Education)",
    exp: "9 Years",
    emoji: "🧘",
    dept: "Sports",
    bio: "Leads morning physical drills, district-level sports tournaments, cricket/volleyball practices, and guides our daily group assembly yoga routines.",
    email: "dilip.sports.srr@gmail.com"
  }
];

const DEPARTMENTS = ["All", "Administration", "Primary", "Secondary", "Junior College", "Technology", "Sports"];

const Faculty = () => {
  const [activeDept, setActiveDept] = useState("All");

  const filteredFaculty = FACULTY_ROSTER.filter(f => {
    return activeDept === "All" || f.dept === activeDept;
  });

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
          <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Academic Pillars</span>
          <h1 
            style={{ 
              fontFamily: "var(--font-h)", 
              fontSize: "clamp(32px, 5vw, 54px)", 
              fontWeight: 800, 
              color: "var(--white)", 
              marginTop: 14 
            }}
          >
            Meet Our Educators
          </h1>
          <div className="gold-line" style={{ margin: "18px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
          <p className="section-sub" style={{ maxWidth: 680, margin: "0 auto", color: "rgba(255,255,255,0.75)" }}>
            Our teachers are dedicated professionals from Nagpur district committed to building foundational logic, tech skills, and civil aptitude.
          </p>
        </div>
      </div>

      {/* ─── PRINCIPAL'S DESK (LETTERHEAD STYLING) ─── */}
      <div style={{ background: "#f1f5f9", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          
          <div 
            style={{ 
              background: "#fff", 
              borderRadius: 16, 
              boxShadow: "0 10px 40px rgba(0,0,0,0.06)", 
              border: "1px solid #cbd5e1",
              padding: "50px 40px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Letterhead Header */}
            <div style={{ borderBottom: "2px solid #7b1fa2", paddingBottom: 24, marginBottom: 30, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-h)", color: "#4a148c", fontSize: 26, fontWeight: 900 }}>Rajeshwari Convent</h2>
                <div style={{ color: "#64748b", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginTop: 4 }}>
                  📍 Kodamendhi Campus, Nagpur District, Maharashtra
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, color: "#4a148c", fontWeight: 800 }}>UDISE: {SCHOOL.udise}</div>
                <div style={{ fontSize: 13, color: "#64748b", fontWeight: 700 }}>Affiliation: {SCHOOL.affiliation}</div>
              </div>
            </div>

            {/* Letter Content */}
            <div style={{ color: "#334155", fontSize: 15, lineHeight: 1.85 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 36, alignItems: "start", flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-h)", color: "#0f172a", fontSize: 20, fontWeight: 800, marginBottom: 14 }}>From the Principal's Desk</h3>
                  <p style={{ marginBottom: 16 }}>
                    Dear Parents, Guardians, and Scholars,
                  </p>
                  <p style={{ marginBottom: 16 }}>
                    Welcome to Rajeshwari Convent. Our school is built on the belief that every child deserves a "Temple of Education" that is nurturing, digitally advanced, and safe. Since our establishment in 2000, we have stayed committed to providing top-quality CBSE-aligned education in the heart of rural Nagpur.
                  </p>
                  <p style={{ marginBottom: 16 }}>
                    We believe in starting right. This is why our teachers focus heavily on conceptual clarity, active visual smart learning, and building future-ready technological skills. Through our custom AI, IoT, and Robotics labs, children learn to build and program functional electronic models early in standard, sparking deep creative confidence.
                  </p>
                  <p style={{ marginBottom: 20 }}>
                    In addition to core academics, we instill values of discipline, health, and national service through our daily morning Yoga meditation, physical athletic sports, and structured foundation guidance for the civil services (Mission IAS) and defence academies (NDA). We welcome you to join our scholarly family.
                  </p>
                  <div style={{ marginTop: 24 }}>
                    <div style={{ fontStyle: "italic", fontFamily: "var(--font-h)", fontSize: 18, color: "#4a148c", fontWeight: 700 }}>Management &amp; Leadership</div>
                    <div style={{ fontSize: 12, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginTop: 4 }}>Rajeshwari Convent</div>
                  </div>
                </div>

                {/* Principal Photo Card */}
                <div style={{ textAlign: "center" }}>
                  <div 
                    style={{ 
                      borderRadius: 14, 
                      overflow: "hidden", 
                      border: "3px solid #7b1fa2", 
                      boxShadow: "0 6px 16px rgba(123, 31, 162, 0.1)",
                      background: "#f3e5f5",
                      marginBottom: 14
                    }}
                  >
                    <img 
                      src="/principal.png" 
                      alt="School Principal" 
                      style={{ width: "100%", display: "block", objectFit: "cover" }} 
                    />
                  </div>
                  <strong style={{ color: "#0f172a", fontSize: 15 }}>Office of the Principal</strong>
                  <div style={{ color: "#64748b", fontSize: 12.5, fontWeight: 600, marginTop: 2 }}>Kodamendhi Campus</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ─── EDUCATOR DIRECTORY SECTION ─── */}
      <div style={{ padding: "80px 0 100px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge" style={{ background: "#fdf4ff", color: "#7b1fa2", borderColor: "#e9d5ff" }}>Teacher Roster</span>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 32, fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Our Core Faculty</h2>
            <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto" }} />
            <p style={{ color: "#475569", fontSize: 14.5, maxWidth: 560, margin: "0 auto" }}>
              Filter by department to meet our experienced, dedicated local teachers and administrative planners.
            </p>
          </div>

          {/* Department Pills */}
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: 10, 
              flexWrap: "wrap",
              marginBottom: 44 
            }}
          >
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                style={{
                  background: activeDept === dept ? "linear-gradient(135deg, #7b1fa2, #9c27b0)" : "#fff",
                  color: activeDept === dept ? "#fff" : "#475569",
                  border: activeDept === dept ? "none" : "1px solid #cbd5e1",
                  padding: "9px 18px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 700,
                  transition: "var(--trans)",
                  boxShadow: activeDept === dept ? "0 4px 12px rgba(123,31,162,0.2)" : "none"
                }}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Faculty Grid */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: 24 
            }}
            className="animate-fadeUp"
          >
            {filteredFaculty.map((f, idx) => (
              <div 
                key={idx}
                style={{
                  borderRadius: 14,
                  padding: 24,
                  border: "1px solid #cbd5e1",
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div 
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #4a148c, #7b1fa2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 26,
                      border: "2px solid #FFB800"
                    }}
                  >
                    {f.emoji}
                  </div>
                  <div>
                    <h3 style={{ color: "#0f172a", fontSize: 17, fontWeight: 800 }}>
                      {f.name}
                    </h3>
                    <div style={{ color: "#7b1fa2", fontSize: 12.5, fontWeight: 700 }}>
                      {f.role}
                    </div>
                  </div>
                </div>

                <div style={{ width: "100%", height: 1, background: "#f1f5f9" }} />

                {/* Subtext info */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ color: "#475569", fontSize: 13, display: "flex", gap: 6 }}>
                    <span>🎓</span> <strong>{f.qual}</strong>
                  </div>
                  <div style={{ color: "#64748b", fontSize: 12.5, display: "flex", gap: 6 }}>
                    <span>⏳</span> Experience: <strong>{f.exp}</strong>
                  </div>
                </div>

                {/* Bio */}
                <p style={{ color: "#475569", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                  {f.bio}
                </p>

                {/* Action footer */}
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10 }}>
                  <span 
                    style={{
                      background: "#fdf4ff",
                      color: "#7b1fa2",
                      border: "1px solid #e9d5ff",
                      borderRadius: 20,
                      padding: "3px 12px",
                      fontSize: 11,
                      fontWeight: 700
                    }}
                  >
                    {f.dept}
                  </span>
                  <a 
                    href={`mailto:${f.email}`}
                    style={{
                      fontSize: 12,
                      color: "#7b1fa2",
                      fontWeight: 700,
                      textDecoration: "none",
                      border: "1.5px solid #cbd5e1",
                      borderRadius: 20,
                      padding: "4px 12px"
                    }}
                    onMouseOver={e => { e.target.style.borderColor = "#7b1fa2"; e.target.style.background = "#fdf4ff"; }}
                    onMouseOut={e => { e.target.style.borderColor = "#cbd5e1"; e.target.style.background = "transparent"; }}
                  >
                    ✉️ Email Teacher
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Faculty;

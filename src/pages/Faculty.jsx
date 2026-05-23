import { useState } from "react";
import { SCHOOL } from "../App";

const DEPARTMENTS_DATA = [
  {
    id: "admin",
    name: "Administration & Leadership",
    emoji: "💼",
    tagline: "Steering academic vision, regulatory compliance, and community trust.",
    desc: "Our leadership team comprises highly experienced school administrators and academic coordinators who align school operations with CBSE standards and the state education department. They ensure a safe, inclusive, and disciplined learning environment for every child.",
    keyStrengths: [
      "Rigorous academic planning & syllabus tracking",
      "Robust campus safety and discipline monitoring",
      "Regular parent-teacher consultation systems",
      "Continuous teacher training and development programs"
    ]
  },
  {
    id: "primary",
    name: "Primary Education (Nursery - Grade 5)",
    emoji: "🎨",
    tagline: "Nurturing curiosity, early literacy, and basic mathematical logic.",
    desc: "Our primary school educators are trained in early-childhood pedagogy. They focus on language development, motor skills, social-emotional learning, and fundamental numeracy using active storytelling, digital learning modules, and creative play.",
    keyStrengths: [
      "Play-way and interactive learning methods",
      "Nurturing and supportive classroom atmospheres",
      "Foundational language literacy (English, Hindi, Marathi)",
      "Creative arts, drawing, and manual crafts integration"
    ]
  },
  {
    id: "secondary",
    name: "Secondary Education (Grade 6 - Grade 10)",
    emoji: "📚",
    tagline: "Transitioning to logical research, structured inquiry, and conceptual clarity.",
    desc: "Secondary teachers are subject specialists in Mathematics, General Sciences, Social Sciences, and Languages. They guide students through the transitioning CBSE syllabus, fostering analytical thinking and structured examination skills.",
    keyStrengths: [
      "Conceptual learning in Mathematics & Sciences",
      "Interactive social science mapping & presentations",
      "Regular class tests and board-pattern mock assessments",
      "Mentorship for state scholarship examinations"
    ]
  },
  {
    id: "college",
    name: "Junior College & Higher Secondary (Grade 11 - Grade 12)",
    emoji: "🎓",
    tagline: "Advanced specialized learning preparing students for higher education.",
    desc: "Our Junior College faculty is specialized in higher secondary education (Science stream). They offer in-depth, rigorous instruction in Physics, Chemistry, Biology, and Higher Mathematics to build a solid foundation for collegiate academic success.",
    keyStrengths: [
      "In-depth analysis of CBSE Grade 11-12 curriculum",
      "Hands-on practical laboratory instruction",
      "Doubt-clearing tutorials and academic mentoring",
      "Mock board exam series and time-management strategies"
    ]
  },
  {
    id: "technology",
    name: "Technology & Coding Innovation",
    emoji: "🤖",
    tagline: "Instructing young minds in robotics, AI logic, and coding protocols.",
    desc: "Technology instructors in our specialized AI, IoT, and Robotics labs guide students through the mechanics of coding, visual programming, and microcontrollers. They foster technological confidence and design-thinking skills from middle school standards.",
    keyStrengths: [
      "Practical coding sessions in modern computer labs",
      "Arduino, sensor arrays, and IoT hardware setups",
      "Step-by-step guidance for tech innovation projects",
      "Encouraging problem-solving and electronic designs"
    ]
  },
  {
    id: "ias",
    name: "Mission IAS & Civil Services Foundation",
    emoji: "🏛️",
    tagline: "Developing global awareness, general knowledge, and civil aptitude.",
    desc: "Specialized coaches instruct our flagship 'Mission IAS' foundation program. They help secondary students build general knowledge, reading habits, civil awareness, geographical literacy, and logical reasoning starting from a junior level.",
    keyStrengths: [
      "Weekly general knowledge and news review sessions",
      "Mental ability, logic, and aptitude training",
      "Interactive debates on history, geography, and polity",
      "Building confidence, articulation, and vocabulary"
    ]
  },
  {
    id: "nda",
    name: "NDA Defence Academy Preparatory",
    emoji: "🎖️",
    tagline: "Instilling peak physical standards, patriotism, and strategic thinking.",
    desc: "Our Defence training coordinators prepare interested junior college and high school students for a career in the Indian Armed Forces. They combine physical conditioning, personality development, and written entrance exam awareness.",
    keyStrengths: [
      "Structured physical fitness drills & athletics coaching",
      "SSB interview processes and personality training",
      "Written NDA exam question patterns review",
      "Instilling core values of duty, discipline, and patriotism"
    ]
  },
  {
    id: "sports",
    name: "Sports, Yoga & Wellness",
    emoji: "🧘",
    tagline: "Fostering physical strength, coordination, and calm mindfulness.",
    desc: "Certified Physical Education Teachers (PETs) and Yoga instructors lead our daily morning drills, athletic track events, outdoor team games, and yogic meditation to ensure complete student physical health and emotional balance.",
    keyStrengths: [
      "Daily structured morning assembly yoga practice",
      "Coaching in volleyball, badminton, cricket, and football",
      "Annual school athletics meet and running events",
      "Teaching lifestyle wellness, nutrition, and mental focus"
    ]
  }
];

const Faculty = () => {
  const [activeTab, setActiveTab] = useState("admin");

  const currentDept = DEPARTMENTS_DATA.find((d) => d.id === activeTab);

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
            Our Teaching Departments
          </h1>
          <div className="gold-line" style={{ margin: "18px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
          <p className="section-sub" style={{ maxWidth: 680, margin: "0 auto", color: "rgba(255,255,255,0.75)" }}>
            Discover our structured academic departments, where experienced and dedicated teachers collaborate to provide quality CBSE education.
          </p>
        </div>
      </div>

      {/* ─── OUR LEADERSHIP MESSAGE ─── */}
      <div style={{ background: "#fff", padding: "80px 0", color: "#1e293b" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 50, alignItems: "center" }}>
            
            {/* Left Column: Image Block */}
            <div style={{ textAlign: "center" }}>
              <div 
                style={{ 
                  display: "inline-block",
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  border: "4px solid #7b1fa2", 
                  boxShadow: "0 10px 30px rgba(123, 31, 162, 0.15)",
                  background: "#f3e5f5"
                }}
              >
                <img 
                  src="/principal.png" 
                  alt="School Principal" 
                  style={{ width: "100%", maxWidth: 320, display: "block", objectFit: "cover" }} 
                  onError={(e) => {
                    // Fallback to beautiful icon if image not present
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div 
                  style={{ 
                    width: 320, 
                    height: 320, 
                    display: "none", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: 80, 
                    color: "#7b1fa2",
                    background: "#f3e5f5"
                  }}
                >
                  👨‍💼
                  <div style={{ fontSize: 16, fontWeight: 700, marginTop: 10 }}>Our Principal</div>
                </div>
              </div>
              <h3 style={{ fontFamily: "var(--font-h)", fontSize: 22, fontWeight: 800, color: "#4a148c", marginTop: 18 }}>
                Principal &amp; Management
              </h3>
              <div style={{ color: "#64748b", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginTop: 4 }}>
                Smt. Rajeshwari Reddy Scholar Convent
              </div>
            </div>

            {/* Right Column: Message Block */}
            <div>
              <span style={{ background: "#f3e5f5", color: "#7b1fa2", border: "1px solid #ce93d8", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                Leadership Message
              </span>
              <h2 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#0f172a", marginTop: 16, lineHeight: 1.25 }}>
                Dedicated to Lifelong Excellence
              </h2>
              <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "16px 0" }} />
              
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                "At Smt. Rajeshwari Reddy Scholar Convent, our educators are more than instructors — they are mentors who shape the moral, technological, and intellectual futures of our students. We focus on providing premium, modern education to the children of rural Nagpur, ensuring they are competitive on national and global levels."
              </p>
              
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                Our hiring standards are rigorous, focusing on teachers who possess deep subject authority, a positive attitude, and modern technological confidence. Through continuous training workshops, we keep our academic staff updated with modern interactive visual aids and National Education Policy guidelines.
              </p>
              
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                <div style={{ background: "#fdf4ff", border: "1px solid #e9d5ff", padding: "12px 20px", borderRadius: "10px" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#7b1fa2" }}>100%</div>
                  <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>Trained Teachers</div>
                </div>
                <div style={{ background: "#fdf4ff", border: "1px solid #e9d5ff", padding: "12px 20px", borderRadius: "10px" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#7b1fa2" }}>CBSE-Aligned</div>
                  <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>Pedagogy Standards</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ─── DEPARTMENT PORTAL SECTION ─── */}
      <div style={{ background: "var(--dark)", padding: "80px 0 100px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Department Portal</span>
            <h2 className="section-title" style={{ marginTop: 14, fontFamily: "var(--font-h)", color: "var(--white)" }}>Explore Academic Areas</h2>
            <div className="gold-line" style={{ margin: "14px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
            <p style={{ color: "var(--gray)", fontSize: 14.5, maxWidth: 600, margin: "0 auto" }}>
              Select an educational department below to inspect their teaching methods, academic focus, and student growth parameters.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 30 }}>
            
            {/* Horizontal Department Tab Buttons */}
            <div 
              style={{ 
                display: "flex", 
                gap: 10, 
                flexWrap: "wrap", 
                justifyContent: "center",
                background: "rgba(255,255,255,0.02)",
                padding: 16,
                borderRadius: "var(--rad)",
                border: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              {DEPARTMENTS_DATA.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveTab(dept.id)}
                  style={{
                    background: activeTab === dept.id ? "linear-gradient(135deg, var(--gold), var(--gold2))" : "rgba(255, 255, 255, 0.05)",
                    color: activeTab === dept.id ? "#040D1E" : "var(--white)",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 700,
                    transition: "var(--trans)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                  }}
                >
                  <span>{dept.emoji}</span>
                  <span>{dept.name.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Department Panel Card */}
            {currentDept && (
              <div 
                className="glass animate-fadeUp"
                style={{
                  borderRadius: "var(--rad)",
                  padding: "40px 30px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.01)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 30,
                  alignItems: "start"
                }}
              >
                {/* Left Card: Summary */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #4a148c, #7b1fa2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>
                      {currentDept.emoji}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-h)", fontSize: 22, fontWeight: 700, color: "var(--white)" }}>
                      {currentDept.name}
                    </h3>
                  </div>
                  
                  <div style={{ color: "var(--gold2)", fontSize: 14, fontWeight: 600, fontStyle: "italic" }}>
                    "{currentDept.tagline}"
                  </div>
                  
                  <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.75 }}>
                    {currentDept.desc}
                  </p>
                </div>

                {/* Right Card: Pedagogical Focus */}
                <div 
                  style={{ 
                    background: "rgba(255,255,255,0.02)", 
                    borderRadius: "16px", 
                    padding: "24px 28px", 
                    border: "1px solid rgba(255,255,255,0.04)" 
                  }}
                >
                  <h4 style={{ color: "var(--white)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>
                    Pedagogical Focus &amp; Assets:
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {currentDept.keyStrengths.map((str, sIdx) => (
                      <div key={sIdx} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, color: "var(--gray)" }}>
                        <span style={{ color: "var(--gold2)", fontWeight: 900 }}>✓</span>
                        <span style={{ color: "var(--white)", fontWeight: 500 }}>{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>

      {/* ─── JOIN OUR TEAM (CAREERS) ─── */}
      <div 
        style={{ 
          background: "linear-gradient(135deg, #0B1F4A 0%, #071330 100%)", 
          padding: "80px 24px", 
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)"
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Career Opportunities</span>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: 32, fontWeight: 800, color: "var(--white)", marginTop: 14 }}>
            Join Our Team of Scholars
          </h2>
          <div className="gold-line" style={{ margin: "14px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
          <p style={{ color: "var(--gray)", fontSize: 14.5, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 28px" }}>
            Are you an experienced CBSE teacher, a physical instructor, or a technology coordinator passionate about rural educational development? Send your credentials to join Smt. Rajeshwari Reddy Scholar Convent.
          </p>
          
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a 
              href={`mailto:${SCHOOL.email}`} 
              className="btn-primary" 
              style={{ padding: "12px 28px", fontSize: 14, textDecoration: "none", borderRadius: 30, background: "linear-gradient(135deg,#7b1fa2,#9c27b0)" }}
            >
              ✉️ Email Resume
            </a>
            <a 
              href={`tel:${SCHOOL.phone1}`} 
              style={{ padding: "12px 28px", fontSize: 14, textDecoration: "none", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 30, fontWeight: 700 }}
              onMouseOver={e => e.target.style.borderColor = "#FFB800"}
              onMouseOut={e => e.target.style.borderColor = "rgba(255,255,255,0.3)"}
            >
              📞 Call Office
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Faculty;

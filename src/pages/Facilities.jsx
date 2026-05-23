import { useState } from "react";
import { SCHOOL } from "../App";

const FACILITIES_DATA = [
  { 
    icon: "🏫", 
    name: "Multi-Storey Campus Building", 
    desc: "A modern, spacious, multi-storey brick and concrete building designed for academic comfort and student safety.",
    fullDesc: "Smt. Rajeshwari Reddy Scholar Convent features a grand multi-storey main school building at Kodamendhi. Designed with bright, ventilated corridors, secure entryways, and modern earthquake-resistant concrete construction, our campus provides an inspiring and safe environment for learning. The campus architecture includes dedicated sections for primary, middle, secondary, and junior college classrooms.",
    specs: ["Multi-storey concrete construction", "Secure entrance and exit pathways", "Natural ventilation and lighting", "Safe, child-friendly layout"]
  },
  { 
    icon: "🖥️", 
    name: "Digital Smart Classrooms", 
    desc: "Spacious classrooms fitted with smart digital boards and interactive learning displays for modern visual education.",
    fullDesc: "We believe in starting right. Our classrooms are equipped with digital smart boards and high-quality projector screens that allow teachers to integrate animations, digital textbooks, and educational videos directly into daily lessons. Ergonomic, age-appropriate seating ensures that children remain comfortable and focused throughout the school day.",
    specs: ["Digital Smart Board displays", "Ergonomic, modular seating setups", "Broadband internet-linked teaching resources", "Large, well-lit learning environments"]
  },
  { 
    icon: "💻", 
    name: "Computer Science & Technology Lab", 
    desc: "A modern computing sandbox equipped with up-to-date terminals, keyboard drills, and programming packages.",
    fullDesc: "Aligning with the national push for digital literacy, our fully equipped Computer and Technology Lab teaches students the fundamentals of computing, software systems, and visual Scratch programming from early standards. Students work with modern terminals, learning typing, office applications, and basic logical circuits.",
    specs: ["Modern personal computer terminals", "Structured ICT & Coding curriculum", "Visual Scratch coding workstations", "Basic hardware and science experiment sets"]
  },
  { 
    icon: "🔬", 
    name: "Composite Science Laboratory", 
    desc: "A fully equipped laboratory setup for practical experiments in Physics, Chemistry, and Biology.",
    fullDesc: "Our science laboratory is the perfect launchpad for young scientists. Stocked with all essential reagents, safety gear, microscopes, electrical boards, and botanical specimens, the composite lab allows middle and high school students to verify theoretical principles through hands-on experimental practice.",
    specs: ["Standard microscope arrays", "Safety-first chemistry workstation setup", "Physics optics and mechanics apparatus", "Detailed botanical & biological models"]
  },
  { 
    icon: "📚", 
    name: "School Library Hub", 
    desc: "A peaceful space housing an extensive collection of textbooks, reference works, literature, and digital learning assets.",
    fullDesc: "The school library at Smt. Rajeshwari Reddy Scholar Convent serves as a sanctuary for readers. It houses thousands of physical volumes, encyclopedias, competitive exam materials for the Mission IAS foundation, and fiction books. Cozy reading tables invite students to read and engage in self-study.",
    specs: ["Diverse physical book catalog", "Mission IAS foundation references", "Comfortable group study tables", "Periodicals, daily newspapers, and magazines"]
  },
  { 
    icon: "🏃", 
    name: "Playground & Sports Arena", 
    desc: "A large open playground optimized for daily athletics, football, cricket practice, and physical training.",
    fullDesc: "Physical fitness is central to our curriculum. Our spacious sports field accommodates athletic tracks, football goal posts, cricket practice nets, and a dedicated volleyball zone. Experienced physical instructors lead regular sports meets, morning drill sessions, and inter-school sports preparations.",
    specs: ["Open-field athletics running space", "Dedicated cricket practice nets", "Volleyball & badminton court markings", "Daily physical education scheduling"]
  },
  { 
    icon: "🚌", 
    name: "School Bus Transport", 
    desc: "Safe and secure transport service connecting the Kodamendhi campus with surrounding villages and towns.",
    fullDesc: "We provide reliable transport facilities to ensure easy accessibility for students. Our school bus service covers major transport routes across Kodamendhi and neighboring rural sectors. Each route is managed by certified, experienced drivers and supportive supervisors to guarantee maximum child safety.",
    specs: ["Regularly serviced school bus", "Experienced, licensed school bus drivers", "Defined pick-up & drop-off route system", "Direct driver-office telecomm links"]
  },
  { 
    icon: "🌳", 
    name: "Garden & Assembly Ground", 
    desc: "A beautifully landscaped green lawn and assembly ground for daily prayers, national events, and cultural exhibitions.",
    fullDesc: "The assembly area is the spiritual heart of our school, where students gather daily for morning prayers and standard national pledges. Lined with beautiful green landscaping and seasonal botanical flowerbeds maintained by our nature club, it fosters an appreciation for environment and community wellness.",
    specs: ["Large assembly capacity ground", "Eco-friendly landscaping & flowerbeds", "Integrated outdoor PA audio setup", "National tricolor flag post hub"]
  }
];

const Facilities = () => {
  const [selectedFac, setSelectedFac] = useState(null);

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
          <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Campus Infrastructure</span>
          <h1 
            style={{ 
              fontFamily: "var(--font-h)", 
              fontSize: "clamp(32px, 5vw, 54px)", 
              fontWeight: 800, 
              color: "var(--white)", 
              marginTop: 14 
            }}
          >
            Excellent Facilities
          </h1>
          <div className="gold-line" style={{ margin: "18px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
          <p className="section-sub" style={{ maxWidth: 680, margin: "0 auto", color: "rgba(255,255,255,0.75)" }}>
            Explore our solid and honest physical infrastructure, purposely designed to nurture a digitally skilled, active, and academically strong generation.
          </p>
        </div>
      </div>

      {/* ─── INFRASTRUCTURE GRID ─── */}
      <div style={{ background: "var(--dark)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>
          
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Explore R.S.R. Campus</span>
            <h2 className="section-title" style={{ marginTop: 14, fontFamily: "var(--font-h)", color: "var(--white)" }}>Our Infrastructure</h2>
            <div className="gold-line" style={{ margin: "14px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
            <p style={{ color: "var(--gray)", fontSize: 14.5, maxWidth: 600, margin: "0 auto" }}>
              Click on any facility below to inspect detailed specifications, learning goals, and practical equipment models.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }} className="animate-fadeUp">
            {FACILITIES_DATA.map((fac, idx) => (
              <div 
                key={idx} 
                className="glass card-hover" 
                onClick={() => setSelectedFac(fac)}
                style={{ 
                  borderRadius: "var(--rad)", 
                  padding: "30px 24px", 
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "var(--trans)"
                }}
              >
                <div style={{ fontSize: 40, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}>{fac.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-h)", fontSize: 19, fontWeight: 700, color: "var(--white)" }}>
                    {fac.name}
                  </h3>
                  <p style={{ color: "var(--gray)", fontSize: 13.5, lineHeight: 1.6, marginTop: 8 }}>
                    {fac.desc}
                  </p>
                </div>
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
                  Inspect Specifications ➔
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ─── LIGHTBOX MODAL OVERLAY ─── */}
      {selectedFac && (
        <div 
          onClick={() => setSelectedFac(null)}
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
              maxWidth: 600, 
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
              <span style={{ fontSize: 44 }}>{selectedFac.icon}</span>
              <div>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 20, color: "var(--white)", fontWeight: 700 }}>
                  {selectedFac.name}
                </h3>
                <span className="badge" style={{ marginTop: 4, padding: "3px 10px", fontSize: 9, background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.3)" }}>Campus Standard</span>
              </div>
              
              <button 
                onClick={() => setSelectedFac(null)}
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
                  Overview & Scope:
                </h4>
                <p style={{ color: "var(--gray)", fontSize: 13.5, lineHeight: 1.7 }}>
                  {selectedFac.fullDesc}
                </p>
              </div>

              <div>
                <h4 style={{ color: "var(--gold2)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", marginBottom: 10, letterSpacing: "0.5px" }}>
                  Features & Details:
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
                  {selectedFac.specs.map((spec, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--white)", fontSize: 13 }}>
                      <span style={{ color: "var(--gold2)", fontWeight: 900 }}>•</span>
                      <span>{spec}</span>
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
                onClick={() => setSelectedFac(null)}
              >
                Close Infrastructure Detail
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Facilities;

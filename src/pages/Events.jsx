import { useState, useEffect } from "react";
import { SCHOOL } from "../App";

const EVENTS_DATA = [
  { 
    date: "15", 
    month: "JUN", 
    year: "2026", 
    timestamp: "2026-06-15T10:00:00", 
    title: "Admission Open Day & School Tour", 
    cat: "General", 
    desc: "A warm welcoming day for parents and prospective scholars to tour our campus building, digital smart classes, and interactive Science and AI/Robotics labs." 
  },
  { 
    date: "21", 
    month: "JUN", 
    year: "2026", 
    timestamp: "2026-06-21T08:00:00", 
    title: "International Yoga Day Demonstration", 
    cat: "Wellness", 
    desc: "A beautiful morning assembly group yoga session on our green lawns, featuring breathing focus techniques and standard physical postures." 
  },
  { 
    date: "10", 
    month: "JUL", 
    year: "2026", 
    timestamp: "2026-07-10T11:00:00", 
    title: "Mission IAS Foundation Seminar", 
    cat: "Academics", 
    desc: "An analytical career orientation workshop for secondary students to map out general knowledge habits and reasoning pathways for future Civil Services." 
  },
  { 
    date: "15", 
    month: "AUG", 
    year: "2026", 
    timestamp: "2026-08-15T08:30:00", 
    title: "Independence Day Celebrations", 
    cat: "Cultural", 
    desc: "National flag hoisting ceremony, disciplined tricolor parade march-past by students in purple uniforms, and emotional patriotic singing by the school choir." 
  },
  { 
    date: "18", 
    month: "SEP", 
    year: "2026", 
    timestamp: "2026-09-18T10:00:00", 
    title: "AI & Robotics Project Exhibition", 
    cat: "Technology", 
    desc: "Students from middle and secondary grades demonstrate functional Arduino sensors, visual block code logic, and autonomous robotic models in the innovation labs." 
  },
  { 
    date: "15", 
    month: "OCT", 
    year: "2026", 
    timestamp: "2026-10-15T11:00:00", 
    title: "NDA Defence Academy Career Orientation", 
    cat: "General", 
    desc: "An inspiring introductory seminar by visiting experts explaining UPSC-NDA eligibility rules, physical parameters, and careers in the Armed Forces." 
  },
  { 
    date: "10", 
    month: "NOV", 
    year: "2026", 
    timestamp: "2026-11-10T09:00:00", 
    title: "Parent-Teacher Academic Meet (PTM)", 
    cat: "Academics", 
    desc: "Comprehensive review of quarterly student progress cards, conceptual clarity benchmarks, and personal behavioral goals with class educators." 
  },
  { 
    date: "18", 
    month: "DEC", 
    year: "2026", 
    timestamp: "2026-12-18T08:00:00", 
    title: "Annual Sports Day Athletics Meet", 
    cat: "Sports", 
    desc: "Disciplined track sprints, long jump challenges, inter-house volleyball tournaments, and physical drill presentations on our sports playground." 
  },
  { 
    date: "25", 
    month: "JAN", 
    year: "2027", 
    timestamp: "2027-01-25T14:00:00", 
    title: "Tarang Annual Cultural Festival", 
    cat: "Cultural", 
    desc: "Our premium annual stage festival showcasing classical traditional dances, theatrical dramas, musical performances, and manual craft galleries." 
  },
  { 
    date: "20", 
    month: "FEB", 
    year: "2027", 
    timestamp: "2027-02-20T10:30:00", 
    title: "Annual Prize Distribution Day", 
    cat: "Academics", 
    desc: "Felicitation ceremony awarding certificates, shields, and scholarships to mock board exam toppers, tech innovation winners, and sports achievers." 
  }
];

const CATEGORIES = ["All", "Academics", "Technology", "Sports", "Cultural", "Wellness", "General"];

const AcademicCalendar = () => {
  return (
    <div style={{ background: "#fff", padding: "80px 24px", color: "#1e293b" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ background: "#f3e5f5", color: "#7b1fa2", border: "1px solid #ce93d8", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Academic Roadmap</span>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: 32, fontWeight: 800, color: "#0f172a", marginTop: 14 }}>
            2026–27 Academic Calendar
          </h2>
          <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto" }} />
          <p style={{ color: "#475569", fontSize: 14.5, maxWidth: 600, margin: "0 auto" }}>
            Our academic year is structured into three continuous terms designed to balance deep cognitive learning with physical training and co-curricular programs.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            {
              term: "Term 1: Foundational Term (June – September 2026)",
              focus: "Syllabus initiation, digital tech workshops, and national celebrations.",
              events: "Admission Open Day, International Yoga Day, Mission IAS Seminars, Independence Day hoisting, AI & Robotics exhibitions."
            },
            {
              term: "Term 2: Mid-Term & Career Focus (October – December 2026)",
              focus: "Rigorous mid-year assessments, parent-teacher reviews, and athletic conditioning.",
              events: "NDA Defence orientation, half-yearly exams, Parent-Teacher Meets, physical training drills, Annual Sports Day Athletics Meet."
            },
            {
              term: "Term 3: Staging & Boards Preparation (January – April 2027)",
              focus: "CBSE board year mock cycles, cultural expressions, and grand annual prize distributions.",
              events: "Republic Day staging, board mock exam series, Tarang Annual Cultural Fest, Annual Prize Distribution, final grade evaluations."
            }
          ].map((item, idx) => (
            <div key={idx} style={{ background: "#fdf4ff", border: "1px solid #e9d5ff", padding: "28px 24px", borderRadius: 12 }}>
              <h3 style={{ color: "#4a148c", fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{item.term}</h3>
              <div style={{ color: "#334155", fontSize: 13.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 6 }}>
                Core Focus: <span style={{ color: "#7b1fa2" }}>{item.focus}</span>
              </div>
              <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
                <strong>Key Milestones:</strong> {item.events}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown calculations targeting: Admission Open Day (June 15, 2026)
  useEffect(() => {
    const targetDate = new Date("2026-06-15T10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredEvents = EVENTS_DATA.filter(
    (e) => activeCat === "All" || e.cat === activeCat
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
          <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.4)" }}>Calendar of Affairs</span>
          <h1 
            style={{ 
              fontFamily: "var(--font-h)", 
              fontSize: "clamp(32px, 5vw, 54px)", 
              fontWeight: 800, 
              color: "var(--white)", 
              marginTop: 14 
            }}
          >
            Events &amp; School Timeline
          </h1>
          <div className="gold-line" style={{ margin: "18px auto", background: "linear-gradient(90deg, #FFB800, #D4A017)" }} />
          <p className="section-sub" style={{ maxWidth: 680, margin: "0 auto", color: "rgba(255,255,255,0.75)" }}>
            Stay updated with our academic workshops, technology demonstrations, sports matches, and beautiful annual staging days.
          </p>
        </div>
      </div>

      {/* ─── LIVE COUNTDOWN WIDGET ─── */}
      <div style={{ background: "var(--dark)", padding: "60px 0 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          
          <div 
            className="glass"
            style={{
              borderRadius: "var(--rad)",
              padding: "36px 30px",
              border: "1px solid rgba(212,160,23,0.3)",
              background: "linear-gradient(135deg, rgba(74,20,140,0.2) 0%, rgba(4,13,30,0.8) 100%)",
              boxShadow: "var(--glow-gold)",
              textAlign: "center"
            }}
          >
            <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.3)", marginBottom: 12 }}>Nearest School Event</span>
            <h3 style={{ fontFamily: "var(--font-h)", fontSize: 22, fontWeight: 700, color: "var(--white)", marginBottom: 24 }}>
              📅 Admission Open Day &amp; Campus Tour Countdown
            </h3>

            {/* Countdown Nodes */}
            <div 
              style={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: 16, 
                flexWrap: "wrap" 
              }}
            >
              {[
                { v: timeLeft.days, l: "Days" },
                { v: timeLeft.hours, l: "Hours" },
                { v: timeLeft.minutes, l: "Minutes" },
                { v: timeLeft.seconds, l: "Seconds" }
              ].map((clockNode, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    width: 90,
                    padding: "16px 8px",
                    textAlign: "center"
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: 32, 
                      fontWeight: 800, 
                      color: "var(--gold2)", 
                      fontFamily: "var(--font-b)" 
                    }}
                  >
                    {String(clockNode.v).padStart(2, "0")}
                  </div>
                  <div style={{ color: "var(--gray)", fontSize: 10, fontWeight: 600, textTransform: "uppercase", marginTop: 4, letterSpacing: "0.5px" }}>
                    {clockNode.l}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ color: "var(--gray)", fontSize: 13, marginTop: 20, fontWeight: 500 }}>
              Live Launch Scheduled: <strong>June 15, 2026 @ 10:00 AM IST</strong>
            </div>
          </div>

        </div>
      </div>

      {/* ─── TIMELINE BULLETIN BOARD ─── */}
      <div style={{ background: "var(--dark)", padding: "40px 0 100px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          
          {/* Filters */}
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
                  padding: "8px 18px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 700,
                  transition: "var(--trans)"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Timeline Stack */}
          {filteredEvents.length > 0 ? (
            <div 
              className="animate-fadeUp"
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: 24,
                position: "relative" 
              }}
            >
              {/* Timeline Center Line */}
              <div 
                style={{ 
                  position: "absolute", 
                  top: 0, 
                  bottom: 0, 
                  left: 45, 
                  width: 2, 
                  background: "rgba(255, 255, 255, 0.05)" 
                }} 
              />

              {filteredEvents.map((evt, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: "flex",
                    gap: 30,
                    alignItems: "stretch",
                    position: "relative"
                  }}
                >
                  {/* Left Date Block */}
                  <div 
                    style={{
                      width: 90,
                      background: "rgba(255,184,0,0.08)",
                      border: "1px solid rgba(255,184,0,0.25)",
                      borderRadius: "14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 8px",
                      flexShrink: 0,
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                      zIndex: 2
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-h)", fontSize: 26, fontWeight: 900, color: "var(--gold2)", lineHeight: 1 }}>
                      {evt.date}
                    </div>
                    <div style={{ color: "var(--white)", fontSize: 11, fontWeight: 700, marginTop: 4, letterSpacing: "1px" }}>
                      {evt.month}
                    </div>
                    <div style={{ color: "var(--gray)", fontSize: 9, fontWeight: 600, marginTop: 2 }}>
                      {evt.year}
                    </div>
                  </div>

                  {/* Right Description Card */}
                  <div 
                    className="glass card-hover"
                    style={{
                      flex: 1,
                      borderRadius: "var(--rad)",
                      padding: "24px 28px",
                      border: "1px solid rgba(255,255,255,0.05)",
                      background: "rgba(255,255,255,0.02)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      justifyContent: "center"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontFamily: "var(--font-h)", fontSize: 18, color: "var(--white)", fontWeight: 700 }}>
                        {evt.title}
                      </h3>
                      <span 
                        style={{
                          background: evt.cat === "Technology" ? "rgba(18,85,204,0.12)" : evt.cat === "Sports" ? "rgba(212,160,23,0.12)" : evt.cat === "Academics" ? "rgba(26,127,78,0.12)" : "rgba(124,58,237,0.12)",
                          color: evt.cat === "Technology" ? "#95bcfb" : evt.cat === "Sports" ? "var(--gold2)" : evt.cat === "Academics" ? "#62efa9" : "#cbb2ff",
                          border: `1px solid rgba(${evt.cat === "Technology" ? "18,85,204" : evt.cat === "Sports" ? "212,160,23" : evt.cat === "Academics" ? "26,127,78" : "124,58,237"}, 0.35)`,
                          borderRadius: 20,
                          padding: "3px 10px",
                          fontSize: 10,
                          fontWeight: 700
                        }}
                      >
                        {evt.cat}
                      </span>
                    </div>

                    <p style={{ color: "var(--gray)", fontSize: 13.5, lineHeight: 1.6 }}>
                      {evt.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div 
              style={{ 
                textAlign: "center", 
                padding: "60px 0",
                background: "rgba(255,255,255,0.01)",
                borderRadius: "var(--rad)",
                border: "1px solid rgba(255,255,255,0.03)"
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 12 }}>📅</div>
              <h3 style={{ color: "var(--white)", marginBottom: 6 }}>No Events Scheduled</h3>
              <p style={{ color: "var(--gray)", fontSize: 14 }}>
                There are no upcoming events listed under the "{activeCat}" category.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* ─── ACADEMIC CALENDAR OUTLINE ─── */}
      <AcademicCalendar />

    </div>
  );
};

export default Events;

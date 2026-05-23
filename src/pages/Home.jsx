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
  { date: "10 May 2026", text: "Computer lab and science practical sessions begin for Class 5th onwards from June 2026.", type: "Academic" },
  { date: "05 May 2026", text: "Parent-Teacher Meeting for Classes 5th–8th on June 5, 2026 at 10:00 AM.", type: "General" },
  { date: "01 May 2026", text: "Mission IAS Aptitude Workshop — Registration open for Classes 9th–12th.", type: "Academic" },
  { date: "28 Apr 2026", text: "NDA Defence Academy orientation session scheduled for interested Class 11-12 students.", type: "Defence" },
];

const TESTIMONIALS = [
  {
    quote: "Smt. Rajeshwari Reddy Scholar Convent has changed how our children learn. The computer education and science lab sessions are very practical and helpful! We are highly satisfied.",
    author: "Mr. Anil Deshmukh",
    address: "Mouda, Nagpur Rural",
    role: "Parent of Grade 7 Student",
    emoji: "👨‍🌾"
  },
  {
    quote: "The 3-Year Shiksha Samriddhi Scheme is a blessing for rural parents. Getting uniforms and books completely free has saved us so much time and money, and there's no fee increase!",
    author: "Mrs. Sunita Garad",
    address: "Parseoni, Nagpur Rural",
    role: "Parent of Grade 3 Student",
    emoji: "👩‍🍳"
  },
  {
    quote: "Our son has joined the NDA Academy prep course here. The physical drills and mock UPSC tests have built immense confidence. Best school in Nagpur rural.",
    author: "Mr. Santosh Kulkarni",
    address: "Ramtek, Nagpur District",
    role: "Parent of Grade 11 Student",
    emoji: "👨‍🏫"
  }
];

const noticeColor = (t) => ({ Admissions: "#1255CC", योजना: "#7b1fa2", Academic: "#1a7f4e", General: "#D4A017", Defence: "#b91c1c" }[t] || "#64748B");

const Home = ({ setPage }) => {
  const [activeNotice, setActiveNotice] = useState("All");
  const [statsOn, setStatsOn] = useState(false);
  const statsRef = useRef();

  // Custom Interactive UI States
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [brochurePage, setBrochurePage] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  // Tuition Fee Estimator States
  const [estimateClass, setEstimateClass] = useState("primary");
  const [applyScheme, setApplyScheme] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsOn(true); }, { threshold: 0.2 });
    if (statsRef.current) ob.observe(statsRef.current);
    return () => ob.disconnect();
  }, []);

  const stats = [
    { n: 850, s: "+", label: "Students Enrolled" },
    { n: 35, s: "+", label: "Dedicated Teachers" },
    { n: 2000, s: "", label: "Year Established" },
    { n: 100, s: "%", label: "Govt. Recognized" },
  ];

  const filteredNotices = activeNotice === "All" ? NOTICES : NOTICES.filter(n => n.type === activeNotice);

  // Fee Estimator Calculations
  const getFeeDetails = () => {
    let tuition = 0;
    let books = 0;
    
    if (estimateClass === "nursery") {
      tuition = 2500;
      books = 1500;
    } else if (estimateClass === "primary") {
      tuition = 3500;
      books = 2000;
    } else if (estimateClass === "secondary") {
      tuition = 4500;
      books = 2500;
    } else if (estimateClass === "college") {
      tuition = 6500;
      books = 3500;
    }

    if (applyScheme) {
      // Free books/uniform + 15% tuition discount
      return {
        tuition: Math.round(tuition * 0.85),
        books: 0,
        saving: tuition * 0.15 + books,
        isScheme: true
      };
    }

    return {
      tuition,
      books,
      saving: 0,
      isScheme: false
    };
  };

  const feeData = getFeeDetails();

  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ══════ ASYMMETRIC HERO SPLIT LAYOUT ══════ */}
      <div 
        style={{ 
          minHeight: "90vh", 
          display: "flex", 
          alignItems: "center", 
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", 
          paddingTop: 90,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "40vw", height: "40vw", borderRadius: "50%", background: "rgba(123,31,162,0.03)", filter: "blur(80px)" }} />
        
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "40px 24px", width: "100%", position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 50, alignItems: "center" }}>
            
            {/* Left: Text & Pitch */}
            <div className="animate-fadeUp">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                <span className="badge" style={{ background: "#f3e5f5", color: "#7b1fa2", borderColor: "#ce93d8", padding: "4px 10px", fontSize: 10 }}>CBSE Curriculum</span>
                <span className="badge" style={{ background: "#fff8e6", color: "#D4A017", borderColor: "#fde68a", padding: "4px 10px", fontSize: 10 }}>Govt. Recognized</span>
                <span className="badge" style={{ background: "#e8f5e9", color: "#1b5e20", borderColor: "#a5d6a7", padding: "4px 10px", fontSize: 10 }}>Est. 2000</span>
              </div>

              <div style={{ color: "#7b1fa2", fontFamily: "var(--font-h)", fontSize: "1.1rem", fontStyle: "italic", fontWeight: 700, marginBottom: 8 }}>
                {SCHOOL.taglineHindi}
              </div>

              <h1 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, marginBottom: 12 }}>
                Smt. Rajeshwari Reddy<br />
                <span style={{ color: "#7b1fa2" }}>Scholar Convent</span>
              </h1>
              <h2 style={{ color: "#475569", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 600, marginBottom: 14 }}>
                & Junior College, Kodamendhi
              </h2>
              
              <p style={{ color: "#475569", fontSize: "15.5px", lineHeight: 1.8, marginBottom: 28, maxWidth: 560 }}>
                Providing a modern, safe, and academically rigorous environment. Inspiring rural scholars from Nursery to 12th standard with pioneering programs in <strong>Computer Education &amp; Creative Coding</strong>, and foundation coaching for the <strong>Mission IAS &amp; NDA</strong> academies.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => setPage("Admissions")} style={{ background: "linear-gradient(135deg,#7b1fa2,#9c27b0)", color: "#fff", border: "none", padding: "13px 28px", borderRadius: 30, fontSize: 14.5, cursor: "pointer", fontWeight: 700, boxShadow: "0 4px 15px rgba(123,31,162,0.3)" }}>
                  📋 Admission Enquiry 2026-27
                </button>
                <button 
                  onClick={() => setPage("About")}
                  style={{ background: "#fff", color: "#475569", border: "1.5px solid #cbd5e1", padding: "12px 28px", borderRadius: 30, fontWeight: 700, fontSize: 14.5, cursor: "pointer", transition: "var(--trans)" }}
                  onMouseOver={e => { e.target.style.borderColor = "#7b1fa2"; e.target.style.color = "#7b1fa2"; }}
                  onMouseOut={e => { e.target.style.borderColor = "#cbd5e1"; e.target.style.color = "#475569"; }}
                >
                  Know Our Story
                </button>
              </div>
            </div>

            {/* Right: Overlapping Photo Collage Frame */}
            <div style={{ position: "relative", height: 420, width: "100%" }} className="hide-mobile">
              {/* Back Image (Entrance) */}
              <div 
                style={{ 
                  position: "absolute", 
                  bottom: 20, 
                  left: 20, 
                  width: "70%", 
                  height: "70%", 
                  borderRadius: 16, 
                  overflow: "hidden", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "4px solid #fff",
                  transform: "rotate(-3deg)",
                  zIndex: 2,
                  transition: "var(--trans)"
                }}
                onMouseOver={e => e.currentTarget.style.transform = "rotate(-1deg) scale(1.02)"}
                onMouseOut={e => e.currentTarget.style.transform = "rotate(-3deg)"}
              >
                <img src="/entrance.png" alt="Campus Entrance" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* Front Image (Building) */}
              <div 
                style={{ 
                  position: "absolute", 
                  top: 20, 
                  right: 20, 
                  width: "75%", 
                  height: "70%", 
                  borderRadius: 16, 
                  overflow: "hidden", 
                  boxShadow: "0 15px 40px rgba(123,31,162,0.15)",
                  border: "4px solid #fff",
                  transform: "rotate(3deg)",
                  zIndex: 3,
                  transition: "var(--trans)"
                }}
                onMouseOver={e => e.currentTarget.style.transform = "rotate(1deg) scale(1.02)"}
                onMouseOut={e => e.currentTarget.style.transform = "rotate(3deg)"}
              >
                <img src="/building.png" alt="Campus Main Building" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* Asymmetrical Frame Overlay */}
              <div 
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 40,
                  background: "#FFB800",
                  color: "#0f172a",
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontWeight: 800,
                  fontSize: 13,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  zIndex: 4,
                  transform: "rotate(2deg)"
                }}
              >
                📍 Kodamendhi Campus
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════ STATS BAND ══════ */}
      <div ref={statsRef} style={{ background: "linear-gradient(90deg, #4a148c, #7b1fa2, #6a1b9a)", padding: "32px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {stats.map((s, i) => {
            const c = useCounter(s.n, statsOn);
            return (
              <div key={i} style={{ textAlign: "center", padding: "0 16px" }}>
                <div style={{ fontFamily: "var(--font-h)", fontSize: "clamp(26px,3vw,38px)", fontWeight: 900, color: "#FFB800" }}>{c}{s.s}</div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 4, fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase" }}>{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══════ MAIN GRID CONTENT ══════ */}
      <div style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 36, alignItems: "start" }}>

          {/* Left Column: Notices Board & Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            
            {/* Notices Board */}
            <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
              <div style={{ background: "#4a148c", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 19, fontWeight: 700 }}>📋 Notices &amp; Announcements</h2>
                <span style={{ background: "#FFB800", color: "#040D1E", padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 800 }}>{NOTICES.length} Active</span>
              </div>
              
              <div style={{ padding: "12px 20px", display: "flex", gap: 8, flexWrap: "wrap", borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
                {["All", "Admissions", "योजना", "Academic", "Defence", "General"].map(t => (
                  <button 
                    key={t} 
                    onClick={() => setActiveNotice(t)} 
                    style={{ 
                      padding: "5px 14px", 
                      borderRadius: 20, 
                      border: "none", 
                      cursor: "pointer", 
                      fontSize: 11.5, 
                      fontWeight: 700, 
                      background: activeNotice === t ? "#7b1fa2" : "#e2e8f0", 
                      color: activeNotice === t ? "#fff" : "#475569", 
                      transition: "all 0.2s" 
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {filteredNotices.map((n, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: "18px 24px", 
                    borderBottom: "1px solid #f1f5f9", 
                    display: "flex", 
                    gap: 14, 
                    alignItems: "flex-start", 
                    background: n.urgent ? "#fffafd" : i % 2 === 0 ? "#fff" : "#fafbfd", 
                    cursor: "pointer",
                    transition: "var(--trans)"
                  }}
                  onMouseOver={e => e.currentTarget.style.background = "#fdf4ff"}
                  onMouseOut={e => e.currentTarget.style.background = n.urgent ? "#fffafd" : i % 2 === 0 ? "#fff" : "#fafbfd"}
                >
                  {n.urgent && <span style={{ color: "#c0392b", fontSize: 14, marginTop: 2, flexShrink: 0 }}>🔴</span>}
                  <span style={{ background: noticeColor(n.type) + "12", color: noticeColor(n.type), border: `1px solid ${noticeColor(n.type)}30`, borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 800, whiteSpace: "nowrap", flexShrink: 0, marginTop: 1 }}>{n.type}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#1e293b", fontSize: 14, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{n.text}</p>
                    <div style={{ color: "#94a3b8", fontSize: 11.5, marginTop: 6, fontWeight: 600 }}>📅 {n.date}</div>
                  </div>
                  <span style={{ color: "#7b1fa2", fontSize: 16, flexShrink: 0 }}>›</span>
                </div>
              ))}
              
              <div style={{ padding: "16px 24px", textAlign: "center", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
                <button onClick={() => setPage("Events")} style={{ color: "#7b1fa2", fontWeight: 700, fontSize: 13, background: "none", border: "none", cursor: "pointer" }}>View All School Events →</button>
              </div>
            </div>

            {/* Interactive Tuition Fee Estimator Widget */}
            <div style={{ background: "#fff", borderRadius: 12, padding: 30, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18 }}>
                <span style={{ fontSize: 32 }}>🧮</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-h)", color: "#0f172a", fontSize: 20, fontWeight: 800 }}>Tuition &amp; Scheme Cost Estimator</h3>
                  <p style={{ color: "#64748b", fontSize: 12.5, margin: 0 }}>Calculate quarterly rates and brochure samriddhi scheme savings</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ color: "#475569", fontWeight: 700, fontSize: 12.5 }}>Select Student Grade:</label>
                  <select 
                    value={estimateClass} 
                    onChange={e => setEstimateClass(e.target.value)}
                    style={{ background: "#f8fafc", border: "1px solid #cbd5e1", color: "#1e293b", padding: "10px 14px", borderRadius: 8, cursor: "pointer" }}
                  >
                    <option value="nursery">Pre-Primary (Nursery - UKG)</option>
                    <option value="primary">Primary (Grade 1 - 5)</option>
                    <option value="secondary">Middle / Secondary (Grade 6 - 10)</option>
                    <option value="college">Junior College (Grade 11 - 12 Science)</option>
                  </select>
                </div>

                <div style={{ display: "flex", alignItems: "center", paddingTop: 20 }}>
                  <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", margin: 0 }}>
                    <input 
                      type="checkbox" 
                      checked={applyScheme} 
                      onChange={e => setApplyScheme(e.target.checked)}
                      style={{ width: 18, height: 18, cursor: "pointer" }} 
                    />
                    <span style={{ color: "#4a148c", fontWeight: 800, fontSize: 13 }}>Apply 3-Year Upfront Scheme</span>
                  </label>
                </div>
              </div>

              {/* Fee Results Display */}
              <div style={{ background: "#fdf4ff", border: "1px solid #e9d5ff", borderRadius: 10, padding: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
                <div>
                  <div style={{ color: "#64748b", fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>Estimated Tuition</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#4a148c", marginTop: 4 }}>₹{feeData.isScheme ? `${feeData.tuition} / Qtr` : `${feeData.tuition} / Qtr`}</div>
                  <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 2 }}>Tuition cost estimation</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>Books &amp; Uniforms</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: feeData.books === 0 ? "#1b5e20" : "#0f172a", marginTop: 4 }}>{feeData.books === 0 ? "FREE 🎉" : `₹${feeData.books}`}</div>
                  <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 2 }}>Charged annually</div>
                </div>

                {feeData.saving > 0 && (
                  <div style={{ borderLeft: "2px dashed #ce93d8", paddingLeft: 16 }}>
                    <div style={{ color: "#1b5e20", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>Scheme Savings</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#1b5e20", marginTop: 4 }}>₹{feeData.saving}</div>
                    <div style={{ color: "#62c478", fontSize: 11.5, fontWeight: 600, marginTop: 2 }}>Upfront benefits!</div>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Parent Testimonial Slider */}
            <div style={{ background: "linear-gradient(135deg, #0B1F4A 0%, #071330 100%)", borderRadius: 12, padding: 30, color: "#fff", boxShadow: "0 10px 30px rgba(11,31,74,0.15)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="badge" style={{ background: "rgba(255,184,0,0.15)", color: "#FFB800", borderColor: "rgba(255,184,0,0.3)" }}>Parent Testimonial</span>
              <h3 style={{ fontFamily: "var(--font-h)", fontSize: 20, color: "#fff", fontWeight: 700, margin: "14px 0 20px" }}>What Our Families Say</h3>

              <div style={{ minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ fontStyle: "italic", fontSize: 14.5, lineHeight: 1.7, color: "var(--gray)", margin: 0 }}>
                  "{TESTIMONIALS[testimonialIndex].quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 18 }}>
                  <span style={{ fontSize: 30 }}>{TESTIMONIALS[testimonialIndex].emoji}</span>
                  <div>
                    <strong style={{ color: "#fff", fontSize: 14.5 }}>{TESTIMONIALS[testimonialIndex].author}</strong>
                    <div style={{ color: "var(--gold2)", fontSize: 11.5, fontWeight: 700 }}>{TESTIMONIALS[testimonialIndex].role} — {TESTIMONIALS[testimonialIndex].address}</div>
                  </div>
                </div>
              </div>

              {/* Slider Arrows */}
              <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 14 }}>
                <button 
                  onClick={() => setTestimonialIndex(prev => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}
                  onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                  onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                >
                  ‹
                </button>
                <button 
                  onClick={() => setTestimonialIndex(prev => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}
                  onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                  onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                >
                  ›
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Admission CTA */}
            <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", borderRadius: 12, padding: "30px 24px", textAlign: "center", boxShadow: "0 6px 20px rgba(123,31,162,0.25)" }}>
              <div style={{ fontSize: 34, marginBottom: 8 }}>🎓</div>
              <h3 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Admissions Open 2026-27</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12.5, lineHeight: 1.6, marginBottom: 20 }}>
                Nursery • KG-1 • KG-2<br />1st Std. to 12th Std.<br />CBSE Curriculum
              </p>
              <button style={{ width: "100%", background: "#FFB800", color: "#040D1E", border: "none", padding: "12px", borderRadius: 8, fontWeight: 800, fontSize: 13.5, cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }} onClick={() => setPage("Admissions")}>
                Apply Online Now
              </button>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 8 }}>📞 Call: {SCHOOL.admissionPhone}</div>
            </div>

            {/* त्रिवर्षीय योजना */}
            <div style={{ background: "#fff", borderRadius: 12, border: "2px solid #7b1fa2", overflow: "hidden", boxShadow: "0 4px 15px rgba(123,31,162,0.08)" }}>
              <div style={{ background: "#4a148c", padding: "12px 16px" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 11.5, textTransform: "uppercase", letterSpacing: 1 }}>Special Scheme</div>
                <h3 style={{ color: "#fff", fontSize: 14, fontWeight: 800, marginTop: 2 }}>त्रिवर्षीय शिक्षा समृद्धि योजना</h3>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <div style={{ color: "#1e293b", fontSize: 13, lineHeight: 1.65 }}>
                  {["📚 किताबें बिल्कुल मुफ्त", "👕 यूनिफार्म बिल्कुल मुफ्त", "💰 3 साल की फीस एक साथ", "🔢 केवल 111 सीटें उपलब्ध", "💻 कंप्यूटर एवं कोडिंग क्लासेज शामिल"].map((f, i) => (
                    <div key={i} style={{ padding: "5px 0", borderBottom: i < 4 ? "1px solid #f1f5f9" : "none", fontWeight: 600, color: i === 3 ? "#c0392b" : "#1e293b" }}>{f}</div>
                  ))}
                </div>
                <button onClick={() => setPage("Admissions")} style={{ width: "100%", background: "#7b1fa2", color: "#fff", border: "none", padding: "9px", borderRadius: 6, fontWeight: 700, fontSize: 12.5, cursor: "pointer", marginTop: 12 }}>
                  Know More →
                </button>
              </div>
            </div>

            {/* School Brochure Preview */}
            <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.04)" }}>
              <div style={{ background: "#7b1fa2", padding: "12px 16px" }}>
                <h3 style={{ color: "#fff", fontSize: 13, fontWeight: 800 }}>📖 School Brochure 2026-27</h3>
              </div>
              <div style={{ padding: "16px", textAlign: "center" }}>
                <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", border: "1px solid #e2e8f0", marginBottom: 12, cursor: "pointer" }} onClick={() => { setBrochurePage(0); setBrochureOpen(true); }}>
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
            <div style={{ background: "#fff8e6", borderRadius: 12, border: "1px solid #fde68a", padding: "16px 18px" }}>
              <h4 style={{ color: "#92400e", fontWeight: 800, fontSize: 13.5, marginBottom: 10 }}>📞 Contact Helplines</h4>
              {[["Admissions", SCHOOL.admissionPhone], ["Office", SCHOOL.phone1], ["Transport", SCHOOL.phone2]].map(([l, n]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #fde68a", fontSize: 12.5, color: "#78350f" }}>
                  <span>{l}</span><strong>{n}</strong>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", overflow: "hidden" }}>
              <div style={{ background: "#1e293b", padding: "12px 16px" }}>
                <h3 style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>Quick Access</h3>
              </div>
              {[["📄 Admission Form", "Admissions"], ["📅 Academic Calendar", "Events"], ["🏫 Facilities", "Facilities"], ["👩‍🏫 Faculty", "Faculty"], ["🏆 Achievements", "Achievements"]].map(([l, p]) => (
                <div key={p} onClick={() => setPage(p)} style={{ padding: "10px 16px", borderBottom: "1px solid #f1f5f9", cursor: "pointer", fontSize: 13, color: "#334155", fontWeight: 500, display: "flex", justifyContent: "space-between" }}
                  onMouseOver={e => e.currentTarget.style.background = "#fdf4ff"}
                  onMouseOut={e => e.currentTarget.style.background = "#fff"}>
                  <span>{l}</span><span style={{ color: "#7b1fa2" }}>›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════ GALLERY SNAPSHOTS SECTION ══════ */}
      <div style={{ background: "#fff", padding: "70px 0", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="badge" style={{ background: "#fdf4ff", color: "#7b1fa2", borderColor: "#e9d5ff" }}>Visual Showcase</span>
            <h2 style={{ fontFamily: "var(--font-h)", fontSize: 32, fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Campus Life in Focus</h2>
            <div style={{ width: 60, height: 3, background: "#7b1fa2", borderRadius: 2, margin: "14px auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { src: "/building.png", label: "School Building", desc: "Our 3-storey campus at Kodamendhi" },
              { src: "/entrance.png", label: "School Entrance", desc: "Welcoming entrance with steps and greenery" },
              { src: "/assembly.png", label: "Morning Assembly", desc: "Students in purple uniforms at assembly" },
              { src: "/yoga.png", label: "Yoga & Wellness", desc: "Daily yoga practice for holistic development" },
            ].map((p, i) => (
              <div key={i} className="card-hover" style={{ borderRadius: 10, overflow: "hidden", position: "relative", height: 210, cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #cbd5e1" }} onClick={() => setPage("Gallery")}>
                <img src={p.src} alt={p.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 50%, rgba(15,23,42,0.85))" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
                  <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: 0.5 }}>{p.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 2 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <button onClick={() => setPage("Gallery")} style={{ background: "linear-gradient(135deg,#7b1fa2,#9c27b0)", color: "#fff", border: "none", padding: "12px 30px", borderRadius: 30, fontWeight: 700, fontSize: 13.5, cursor: "pointer", boxShadow: "0 4px 12px rgba(123,31,162,0.2)" }}>
              View Full Gallery →
            </button>
          </div>
        </div>
      </div>

      {/* ══════ AFFILIATION STRIP ══════ */}
      <div style={{ background: "#fff", padding: "28px 24px", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
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
                <div style={{ color: "#0f172a", fontWeight: 800, fontSize: 13.5 }}>{a.label}</div>
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

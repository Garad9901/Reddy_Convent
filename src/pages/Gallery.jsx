import { useState, useEffect } from "react";
import { SCHOOL } from "../App";

const PHOTOS = [
  // ── Real School Photos ──────────────────────────────────────────
  { src: "/gate_entrance_real.jpg", title: "School Entrance Gate", cat: "Campus", desc: "सुस्वागतम — Our iconic welcome gate. Pay Back to Society. घर से दूर, एक सुंदर घर… Kodamendhi campus entrance with Udaan Sport Academy." },
  { src: "/annual_day_dignitaries.jpg", title: "13th Annual Day — Dignitaries", cat: "Annual Day 2025", desc: "Rajeshwari Convent — 13th Annual Day Function 2025. Dignitaries including police officials and management seated on stage." },
  { src: "/annual_day_crowd_night.jpg", title: "Annual Day — Grand Audience", cat: "Annual Day 2025", desc: "Hundreds of parents, students and community members gathered for the 13th Annual Day 2025 night celebrations at Kodamendhi campus." },
  { src: "/award_ceremony_police.jpg", title: "Award Ceremony — Police Honour", cat: "Annual Day 2025", desc: "A student receiving a sapling award from the school management and police dignitary at the 13th Annual Day Function 2025." },
  { src: "/award_ceremony_traditional.jpg", title: "Award Ceremony — Cultural Honour", cat: "Annual Day 2025", desc: "A student in traditional Maharashtrian attire receiving an award from school management and a distinguished guest at Annual Day 2025." },
  // ── Campus ──────────────────────────────────────────────────────
  { src: "/building.png", title: "School Building", cat: "Campus", desc: "Our main school building — Kodamendhi" },
  { src: "/entrance.png", title: "Campus View", cat: "Campus", desc: "Grand campus view with steps and greenery" },
  { src: "/assembly.png", title: "Morning Assembly", cat: "Students", desc: "Daily morning assembly of students in purple uniforms" },
  { src: "/yoga.png", title: "Yoga Practice", cat: "Sports", desc: "Students practicing yoga for holistic wellness" },
  { src: "/cultural.png", title: "Cultural Program", cat: "Events", desc: "Annual cultural celebration with tricolor decorations" },
  { src: "/bus.png", title: "School Bus", cat: "Facilities", desc: "Safe and reliable school transport service" },
  { src: "/garden.png", title: "School Garden", cat: "Campus", desc: "Botanical garden maintained by students" },
  { src: "/classroom.png", title: "Smart Classroom", cat: "Facilities", desc: "Digital interactive classrooms" },
  { src: "/robotics.png", title: "Robotics Lab", cat: "Facilities", desc: "Students building robots and learning AI" },
  { src: "/sports.png", title: "Sports Ground", cat: "Sports", desc: "Open grounds for cricket, football and athletics" },
  { src: "/brochure_page_1.jpg", title: "Brochure - Front Cover", cat: "Brochure", desc: "Front cover of Rajeshwari Convent brochure" },
  { src: "/brochure_page_2.jpg", title: "Brochure - Leadership & Vision", cat: "Brochure", desc: "Principal's message, management team, and academic goals" },
  { src: "/brochure_page_3.jpg", title: "Brochure - Mission IAS & NDA", cat: "Brochure", desc: "Milestones for Civil Services foundation and Defence Academy courses" },
  { src: "/brochure_page_4.jpg", title: "Brochure - Facilities & Sports", cat: "Brochure", desc: "Outline of smart classrooms, science labs, and athletics" },
  { src: "/brochure_page_5.jpg", title: "Brochure - Admissions & Scheme", cat: "Brochure", desc: "Details on admissions enrollment and the three-year fee scheme" },
];

const CATS = ["All", "Annual Day 2025", "Campus", "Students", "Facilities", "Sports", "Events", "Brochure"];

const Gallery = () => {
  const [cat, setCat] = useState("All");
  const [selected, setSelected] = useState(null);
  const [columns, setColumns] = useState(3);

  // Dynamic responsive columns logic for Masonry Grid
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setColumns(1);
      else if (w < 960) setColumns(2);
      else setColumns(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = cat === "All" ? PHOTOS : PHOTOS.filter(p => p.cat === cat);
  const annualDayPhotos = PHOTOS.filter(p => p.cat === "Annual Day 2025");

  return (
    <div style={{ paddingTop: 90, background: "#f4f6fb", minHeight: "100vh" }}>
      
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", padding: "48px 24px 38px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, marginBottom: 8 }}>Campus Gallery</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>{SCHOOL.nameShort}, {SCHOOL.location} — Life in Pictures</p>
      </div>

      {/* ══════ FEATURED: 13th ANNUAL DAY 2025 SECTION ══════ */}
      {(cat === "All" || cat === "Annual Day 2025") && (
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "48px 24px 0" }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
              <div style={{ width: 4, height: 36, background: "linear-gradient(#FFB800,#7b1fa2)", borderRadius: 2 }} />
              <div>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginBottom: 2 }}>🏆 Featured Event</div>
                <h2 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(20px,3vw,30px)", fontWeight: 900, color: "#0f172a", margin: 0 }}>13<sup>th</sup> Annual Day Function — 2025</h2>
              </div>
            </div>
            <p style={{ color: "#64748b", fontSize: 14, marginLeft: 18, maxWidth: 700 }}>
              Rajeshwari Convent celebrated its 13th Annual Day with a spectacular event — dignitaries, cultural performances, award ceremonies, and hundreds of community members attending.
            </p>
          </div>

          {/* Featured 5-photo mosaic layout */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "280px 280px", gap: 12, marginBottom: 48 }}>
            {/* Large left - Stage/Dignitaries */}
            <div
              style={{ gridColumn: "1 / 2", gridRow: "1 / 2", borderRadius: 12, overflow: "hidden", cursor: "pointer", position: "relative", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              onClick={() => setSelected(annualDayPhotos[1])}
            >
              <img src={annualDayPhotos[1]?.src} alt="Annual Day Dignitaries" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} onMouseOver={e => e.target.style.transform="scale(1.04)"} onMouseOut={e => e.target.style.transform="scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px", background: "linear-gradient(transparent, rgba(15,23,42,0.88))" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Annual Day 2025</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginTop: 2 }}>Dignitaries on Stage</div>
              </div>
            </div>

            {/* Top center - Gate Entrance */}
            <div
              style={{ gridColumn: "2 / 3", gridRow: "1 / 2", borderRadius: 12, overflow: "hidden", cursor: "pointer", position: "relative", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              onClick={() => setSelected(annualDayPhotos[0])}
            >
              <img src={annualDayPhotos[0]?.src} alt="School Gate" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} onMouseOver={e => e.target.style.transform="scale(1.04)"} onMouseOut={e => e.target.style.transform="scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px", background: "linear-gradient(transparent, rgba(15,23,42,0.88))" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Campus</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginTop: 2 }}>सुस्वागतम — School Gate</div>
              </div>
            </div>

            {/* Top right - Award Police */}
            <div
              style={{ gridColumn: "3 / 4", gridRow: "1 / 2", borderRadius: 12, overflow: "hidden", cursor: "pointer", position: "relative", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              onClick={() => setSelected(annualDayPhotos[3])}
            >
              <img src={annualDayPhotos[3]?.src} alt="Award Police" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} onMouseOver={e => e.target.style.transform="scale(1.04)"} onMouseOut={e => e.target.style.transform="scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px", background: "linear-gradient(transparent, rgba(15,23,42,0.88))" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Award Ceremony</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginTop: 2 }}>Police Honour</div>
              </div>
            </div>

            {/* Bottom left wide - Night Crowd */}
            <div
              style={{ gridColumn: "1 / 3", gridRow: "2 / 3", borderRadius: 12, overflow: "hidden", cursor: "pointer", position: "relative", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              onClick={() => setSelected(annualDayPhotos[2])}
            >
              <img src={annualDayPhotos[2]?.src} alt="Night Crowd" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} onMouseOver={e => e.target.style.transform="scale(1.04)"} onMouseOut={e => e.target.style.transform="scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px", background: "linear-gradient(transparent, rgba(15,23,42,0.88))" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Annual Day 2025</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginTop: 2 }}>Grand Audience — Night Celebrations</div>
              </div>
            </div>

            {/* Bottom right - Traditional Award */}
            <div
              style={{ gridColumn: "3 / 4", gridRow: "2 / 3", borderRadius: 12, overflow: "hidden", cursor: "pointer", position: "relative", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
              onClick={() => setSelected(annualDayPhotos[4])}
            >
              <img src={annualDayPhotos[4]?.src} alt="Traditional Award" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} onMouseOver={e => e.target.style.transform="scale(1.04)"} onMouseOut={e => e.target.style.transform="scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px", background: "linear-gradient(transparent, rgba(15,23,42,0.88))" }}>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Award Ceremony</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginTop: 2 }}>Cultural Honour</div>
              </div>
            </div>
          </div>

          {cat === "Annual Day 2025" && (
            <div style={{ height: 1, background: "#e2e8f0", margin: "0 0 40px" }} />
          )}
        </div>
      )}

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "40px 24px" }}>
        
        {/* Filter Buttons */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 36 }}>
          {CATS.map(c => (
            <button 
              key={c} 
              onClick={() => setCat(c)} 
              style={{ 
                padding: "9px 22px", 
                borderRadius: 20, 
                border: "none", 
                cursor: "pointer", 
                fontWeight: 700, 
                fontSize: 13, 
                background: cat === c ? "#7b1fa2" : "#fff", 
                color: cat === c ? "#fff" : "#475569", 
                boxShadow: cat === c ? "0 4px 12px rgba(123,31,162,0.25)" : "0 1px 6px rgba(0,0,0,0.06)", 
                transition: "all 0.2s" 
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* ─── PREMIUM CSS COLUMNS MASONRY GRID ─── */}
        <div 
          style={{ 
            columnCount: columns, 
            columnGap: 20,
            width: "100%" 
          }}
          className="animate-fadeUp"
        >
          {filtered.map((p, i) => (
            <div 
              key={i} 
              onClick={() => setSelected(p)} 
              style={{ 
                display: "inline-block",
                width: "100%",
                marginBottom: 20,
                breakInside: "avoid",
                borderRadius: 12, 
                overflow: "hidden", 
                position: "relative", 
                cursor: "pointer", 
                boxShadow: "0 2px 14px rgba(0,0,0,0.08)", 
                border: "1px solid #cbd5e1",
                background: "#fff",
                transition: "transform 0.2s, box-shadow 0.2s" 
              }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(123,31,162,0.14)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 14px rgba(0,0,0,0.08)"; }}
            >
              <img 
                src={p.src} 
                alt={p.title} 
                style={{ 
                  width: "100%", 
                  display: "block", 
                  objectFit: "cover", 
                  maxHeight: p.cat === "Brochure" ? 420 : 320,
                  transition: "transform 0.35s" 
                }}
                onMouseOver={e => e.target.style.transform = "scale(1.02)"}
                onMouseOut={e => e.target.style.transform = "scale(1)"} 
              />
              
              {/* Info Overlay Panel */}
              <div 
                style={{ 
                  position: "absolute", 
                  inset: 0, 
                  background: "linear-gradient(transparent 50%, rgba(15,23,42,0.85))",
                  opacity: 0,
                  transition: "opacity 0.25s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "16px"
                }}
                onMouseOver={e => e.currentTarget.style.opacity = 1}
                onMouseOut={e => e.currentTarget.style.opacity = 0}
              >
                <div>
                  <span style={{ background: "#FFB800", color: "#0f172a", borderRadius: 4, padding: "2px 8px", fontSize: 9.5, fontWeight: 800, marginBottom: 6, display: "inline-block", textTransform: "uppercase" }}>{p.cat}</span>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>{p.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11.5, marginTop: 4 }}>{p.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.92)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 800, width: "100%", borderRadius: 12, overflow: "hidden", background: "#0f0a1a", boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}>
            <img src={selected.src} alt={selected.title} style={{ width: "100%", maxHeight: "68vh", objectFit: "contain", background: "#0b0813", display: "block" }} />
            <div style={{ padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#150d24", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 10.5, textTransform: "uppercase", letterSpacing: 1 }}>{selected.cat}</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginTop: 2 }}>{selected.title}</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 3 }}>{selected.desc}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 18, width: 38, height: 38, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

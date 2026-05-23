import { useState, useEffect } from "react";
import { SCHOOL } from "../App";

const PHOTOS = [
  { src: "/building.png", title: "School Building", cat: "Campus", desc: "Our main school building — Kodamendhi" },
  { src: "/entrance.png", title: "School Entrance", cat: "Campus", desc: "Grand entrance with steps and greenery" },
  { src: "/assembly.png", title: "Morning Assembly", cat: "Students", desc: "Daily morning assembly of students in purple uniforms" },
  { src: "/yoga.png", title: "Yoga Practice", cat: "Sports", desc: "Students practicing yoga for holistic wellness" },
  { src: "/cultural.png", title: "Cultural Program", cat: "Events", desc: "Annual cultural celebration with tricolor decorations" },
  { src: "/bus.png", title: "School Bus", cat: "Facilities", desc: "Safe and reliable school transport service" },
  { src: "/garden.png", title: "School Garden", cat: "Campus", desc: "Botanical garden maintained by students" },
  { src: "/classroom.png", title: "Smart Classroom", cat: "Facilities", desc: "Digital interactive classrooms" },
  { src: "/robotics.png", title: "Robotics Lab", cat: "Facilities", desc: "Students building robots and learning AI" },
  { src: "/sports.png", title: "Sports Ground", cat: "Sports", desc: "Open grounds for cricket, football and athletics" },
  { src: "/brochure_page_1.jpg", title: "Brochure - Front Cover", cat: "Brochure", desc: "Front cover of Smt. Rajeshwari Reddy Scholar Convent brochure" },
  { src: "/brochure_page_2.jpg", title: "Brochure - Leadership & Vision", cat: "Brochure", desc: "Principal's message, management team, and academic goals" },
  { src: "/brochure_page_3.jpg", title: "Brochure - Mission IAS & NDA", cat: "Brochure", desc: "Milestones for Civil Services foundation and Defence Academy courses" },
  { src: "/brochure_page_4.jpg", title: "Brochure - Facilities & Sports", cat: "Brochure", desc: "Outline of smart classrooms, science labs, and athletics" },
  { src: "/brochure_page_5.jpg", title: "Brochure - Admissions & Scheme", cat: "Brochure", desc: "Details on admissions enrollment and the three-year fee scheme" },
];

const CATS = ["All", "Campus", "Students", "Facilities", "Sports", "Events", "Brochure"];

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

  return (
    <div style={{ paddingTop: 90, background: "#f4f6fb", minHeight: "100vh" }}>
      
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", padding: "48px 24px 38px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, marginBottom: 8 }}>Campus Gallery</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>{SCHOOL.nameShort}, {SCHOOL.location} — Life in Pictures</p>
      </div>

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

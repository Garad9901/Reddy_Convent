import { useState } from "react";
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
  const filtered = cat === "All" ? PHOTOS : PHOTOS.filter(p => p.cat === cat);

  return (
    <div style={{ paddingTop: 90, background: "#f4f6fb", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", padding: "44px 24px 36px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, marginBottom: 8 }}>Campus Gallery</h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15 }}>{SCHOOL.nameShort}, {SCHOOL.location} — Life in Pictures</p>
      </div>

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "40px 24px" }}>
        {/* Filter */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 36 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{ padding: "8px 20px", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: cat === c ? "#7b1fa2" : "#fff", color: cat === c ? "#fff" : "#475569", boxShadow: cat === c ? "0 2px 12px rgba(123,31,162,0.35)" : "0 1px 6px rgba(0,0,0,0.06)", transition: "all 0.2s" }}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
          {filtered.map((p, i) => (
            <div key={i} onClick={() => setSelected(p)} style={{ borderRadius: 10, overflow: "hidden", position: "relative", height: 220, cursor: "pointer", boxShadow: "0 2px 16px rgba(0,0,0,0.1)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.18)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.1)"; }}>
              <img src={p.src} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s" }}
                onMouseOver={e => e.target.style.transform = "scale(1.05)"}
                onMouseOut={e => e.target.style.transform = "scale(1)"} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 50%,rgba(0,0,0,0.7))" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px" }}>
                <span style={{ background: "#7b1fa2", color: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: 10, fontWeight: 700, marginBottom: 4, display: "inline-block" }}>{p.cat}</span>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13.5 }}>{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 860, width: "100%", borderRadius: 12, overflow: "hidden", background: "#1e293b" }}>
            <img src={selected.src} alt={selected.title} style={{ width: "100%", maxHeight: "65vh", objectFit: "cover" }} />
            <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#FFB800", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{selected.cat}</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginTop: 2 }}>{selected.title}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 3 }}>{selected.desc}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 20, width: 40, height: 40, borderRadius: "50%", cursor: "pointer" }}>✕</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

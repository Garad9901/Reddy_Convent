import { useState, useEffect } from "react";
import { SCHOOL } from "../App";

const Navbar = ({ page, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const PAGES = ["Home","About","Admissions","Facilities","Faculty","Gallery","Events","Achievements","Contact"];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navBg = scrolled ? "rgba(6,15,40,0.97)" : "rgba(6,15,40,0.92)";

  return (
    <>
      {/* Top info strip */}
      <div style={{ background: "#7b1fa2", padding: "5px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
        <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 11.5, fontWeight: 500 }}>
          📞 {SCHOOL.phone1} | {SCHOOL.phone2} &nbsp;|&nbsp; ✉️ {SCHOOL.email}
        </div>
        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 600 }}>
          UDISE: {SCHOOL.udise} &nbsp;|&nbsp; Index: {SCHOOL.index} &nbsp;|&nbsp; {SCHOOL.recognition}
        </div>
      </div>

      <nav style={{
        position: "fixed", top: 30, left: 0, right: 0, zIndex: 1000,
        background: navBg,
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s"
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>

          {/* Logo */}
          <div onClick={() => { setPage("Home"); setMobileOpen(false); }}
            style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "linear-gradient(135deg, #7b1fa2, #ab47bc)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, border: "2px solid rgba(255,255,255,0.2)",
              flexShrink: 0
            }}>🎓</div>
            <div>
              <div style={{ fontFamily: "var(--font-h)", fontSize: 14, fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>
                {SCHOOL.nameShort}
              </div>
              <div style={{ fontSize: 9.5, color: "#FFB800", fontWeight: 700, letterSpacing: 1 }}>
                KODAMENDHI | EST. 2000
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hide-mobile" style={{ display: "flex", gap: 2, alignItems: "center" }}>
            {PAGES.map(p => (
              <span key={p} onClick={() => setPage(p)} style={{
                color: page === p ? "#FFB800" : "rgba(255,255,255,0.82)",
                padding: "6px 11px", borderRadius: 6, cursor: "pointer",
                fontSize: 12.5, fontWeight: page === p ? 700 : 500,
                background: page === p ? "rgba(255,184,0,0.12)" : "transparent",
                borderBottom: page === p ? "2px solid #FFB800" : "2px solid transparent",
                transition: "all 0.2s", whiteSpace: "nowrap"
              }}
                onMouseOver={e => { if (page !== p) e.currentTarget.style.color = "#FFB800"; }}
                onMouseOut={e => { if (page !== p) e.currentTarget.style.color = "rgba(255,255,255,0.82)"; }}
              >{p}</span>
            ))}
          </div>

          <div className="hide-mobile">
            <button className="btn-primary" style={{ fontSize: 12, padding: "9px 18px", borderRadius: 6 }}
              onClick={() => setPage("Admissions")}>
              Admission Enquiry
            </button>
          </div>

          <button className="show-mobile" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 20, width: 40, height: 40, borderRadius: 8, cursor: "pointer", display: "none", alignItems: "center", justifyContent: "center" }}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div style={{ background: "rgba(6,15,40,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "12px 20px 20px" }}>
            {PAGES.map(p => (
              <div key={p} onClick={() => { setPage(p); setMobileOpen(false); }}
                style={{ padding: "11px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", color: page === p ? "#FFB800" : "rgba(255,255,255,0.8)", cursor: "pointer", fontSize: 15, fontWeight: page === p ? 700 : 400 }}>
                {p}
              </div>
            ))}
            <button className="btn-primary" style={{ marginTop: 14, width: "100%", justifyContent: "center" }}
              onClick={() => { setPage("Admissions"); setMobileOpen(false); }}>
              📋 Admission Enquiry
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

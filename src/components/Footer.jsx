import { useState } from "react";
import { SCHOOL } from "../App";

const Footer = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(""); setTimeout(() => setSubscribed(false), 5000); }
  };

  return (
    <footer style={{ background: "#0f0a1a", color: "#fff" }}>

      {/* Main footer */}
      <div style={{ background: "#150d24", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "48px 0 40px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px,1fr))", gap: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, cursor: "pointer" }} onClick={() => { setPage("Home"); window.scrollTo(0,0); }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#7b1fa2,#9c27b0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>🎓</div>
              <div>
                <div style={{ fontFamily: "var(--font-h)", fontSize: 14.5, fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>S.R.R. Scholar Convent</div>
                <div style={{ fontSize: 9, color: "#FFB800", fontWeight: 700, letterSpacing: 1.5 }}>& JUNIOR COLLEGE</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
              "{SCHOOL.tagline}"<br />"{SCHOOL.tagline2}"<br /><br />
              CBSE Curriculum | Govt. Recognized<br />
              UDISE: {SCHOOL.udise}<br />Index: {SCHOOL.index}
            </p>
            <div style={{ color: "#FFB800", fontStyle: "italic", fontFamily: "var(--font-h)", fontSize: 13 }}>
              {SCHOOL.taglineHindi}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16, color: "#ce93d8" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {["Home","About","Admissions","Facilities","Faculty","Gallery","Events","Achievements","Contact"].map(p => (
                <span key={p} onClick={() => { setPage(p); window.scrollTo(0,0); }}
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, cursor: "pointer", transition: "color 0.15s" }}
                  onMouseOver={e => e.target.style.color="#FFB800"} onMouseOut={e => e.target.style.color="rgba(255,255,255,0.5)"}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16, color: "#ce93d8" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "rgba(255,255,255,0.5)", fontSize: 13.5 }}>
              <div>📍 {SCHOOL.address}</div>
              <a href={`tel:${SCHOOL.phone1}`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>📞 {SCHOOL.phone1}</a>
              <a href={`tel:${SCHOOL.phone2}`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>📞 {SCHOOL.phone2}</a>
              <a href={`tel:${SCHOOL.phone3}`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>📞 {SCHOOL.phone3} (Admissions)</a>
              <a href={`mailto:${SCHOOL.email}`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>✉️ {SCHOOL.email}</a>
              <div>⏰ Mon–Sat: 7:30 AM – 4:00 PM</div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16, color: "#ce93d8" }}>Stay Updated</h4>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
              Get admission updates, exam results, and school news directly in your inbox.
            </p>
            {subscribed ? (
              <div style={{ background: "rgba(26,127,78,0.15)", border: "1px solid rgba(26,127,78,0.3)", borderRadius: 8, padding: "10px 14px", color: "#62efa9", fontSize: 13, fontWeight: 600 }}>
                ✓ Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}
                  style={{ padding: "10px 14px", fontSize: 13, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, color: "#fff", fontFamily: "var(--font-b)", outline: "none" }} />
                <button type="submit" style={{ background: "#7b1fa2", color: "#fff", border: "none", padding: "10px", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  Subscribe to Updates
                </button>
              </form>
            )}

            <div style={{ marginTop: 20 }}>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 8 }}>FOLLOW US ON</div>
              <div style={{ display: "flex", gap: 8 }}>
                {[["📘","FB"],["📺","YT"],["📸","IG"],["🐦","TW"]].map(([icon, s]) => (
                  <div key={s} style={{ width: 34, height: 34, borderRadius: 6, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 16 }}>{icon}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ padding: "14px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontSize: 12, color: "rgba(255,255,255,0.25)", maxWidth: 1300, margin: "0 auto" }}>
        <span>© {year} Rajeshwari Convent &amp; Junior College, Kodamendhi. All Rights Reserved.</span>
        <div style={{ display: "flex", gap: 16 }}>
          <span style={{ cursor: "pointer" }}>Privacy Policy</span>
          <span style={{ cursor: "pointer" }}>Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

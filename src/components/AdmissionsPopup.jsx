import { SCHOOL } from "../App";

const AdmissionsPopup = ({ onClose, onNavigate }) => {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", maxWidth: 480, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.4)", animation: "bounceIn 0.5s" }}>

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2,#9c27b0)", padding: "22px 24px 18px", position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: 14, right: 16, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 28, height: 28, borderRadius: "50%", cursor: "pointer", fontSize: 14, fontWeight: 700 }}>✕</button>
          <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>🎓 Admissions Open 2026-27</div>
          <h2 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 20, fontWeight: 900, lineHeight: 1.2 }}>
            त्रिवर्षीय शिक्षा समृद्धि योजना
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12.5, marginTop: 5 }}>
            Smt. Rajeshwari Reddy Scholar Convent, Kodamendhi
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 24px" }}>
          <div style={{ background: "#fdf4ff", border: "1px solid #e9d5ff", borderRadius: 8, padding: "14px 16px", marginBottom: 16 }}>
            <div style={{ fontWeight: 800, color: "#4a148c", fontSize: 14.5, marginBottom: 8 }}>📚 3 साल की फीस पर पाएं:</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { icon: "📚", text: "किताबें मुफ्त\nBooks FREE" },
                { icon: "👕", text: "यूनिफार्म मुफ्त\nUniform FREE" },
                { icon: "💻", text: "कंप्यूटर शिक्षा\nComputer Class" },
                { icon: "🔬", text: "विज्ञान प्रयोगशाला\nScience Lab" },
              ].map((f, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e9d5ff", borderRadius: 6, padding: "10px", textAlign: "center" }}>
                  <div style={{ fontSize: 20 }}>{f.icon}</div>
                  <div style={{ color: "#4a148c", fontWeight: 700, fontSize: 11, marginTop: 4, whiteSpace: "pre-line", lineHeight: 1.4 }}>{f.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff8e6", borderRadius: 8, padding: "10px 14px", textAlign: "center", marginBottom: 16, border: "1px solid #fde68a" }}>
            <span style={{ color: "#c0392b", fontWeight: 800, fontSize: 13.5 }}>🔢 Only 111 Seats Available!</span>
            <div style={{ color: "#92400e", fontSize: 12, marginTop: 3 }}>First come, first served. Register today.</div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => { onNavigate("Admissions"); onClose(); }} style={{ flex: 1, background: "linear-gradient(135deg,#4a148c,#7b1fa2)", color: "#fff", border: "none", padding: "12px", borderRadius: 8, fontWeight: 800, fontSize: 13.5, cursor: "pointer" }}>
              Apply Now →
            </button>
            <a href={`tel:${SCHOOL.admissionPhone}`} style={{ flex: 1, background: "#FFB800", color: "#040D1E", textDecoration: "none", padding: "12px", borderRadius: 8, fontWeight: 800, fontSize: 13.5, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
              📞 {SCHOOL.admissionPhone}
            </a>
          </div>
          <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 11, marginTop: 10 }}>
            {SCHOOL.nameShort} | {SCHOOL.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPopup;

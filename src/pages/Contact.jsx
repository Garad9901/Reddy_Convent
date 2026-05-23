import { useState } from "react";
import { SCHOOL } from "../App";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: 90, background: "#f4f6fb", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", padding: "44px 24px 36px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, marginBottom: 8 }}>Contact Us</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>We're here to help — reach out anytime</p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            <div style={{ background: "#fff", borderRadius: 12, padding: "28px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
              <h2 style={{ fontFamily: "var(--font-h)", color: "#4a148c", fontSize: 22, fontWeight: 800, marginBottom: 20 }}>School Information</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>🏫</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#1e293b", fontSize: 15 }}>Smt. Rajeshwari Reddy Scholar Convent &amp; Junior College</div>
                    <div style={{ color: "#64748b", fontSize: 13.5, marginTop: 2 }}>{SCHOOL.address}</div>
                    <div style={{ color: "#7b1fa2", fontSize: 12.5, marginTop: 3, fontWeight: 600 }}>UDISE: {SCHOOL.udise} | Index: {SCHOOL.index}</div>
                  </div>
                </div>

                {[
                  { icon: "📞", label: "Main Office", val: SCHOOL.phone1, href: `tel:${SCHOOL.phone1}` },
                  { icon: "📞", label: "Secondary", val: SCHOOL.phone2, href: `tel:${SCHOOL.phone2}` },
                  { icon: "📞", label: "Admissions", val: `${SCHOOL.phone3} / ${SCHOOL.phone4}`, href: `tel:${SCHOOL.phone3}` },
                  { icon: "✉️", label: "Email", val: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ color: "#64748b", fontSize: 11.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{c.label}</div>
                      <a href={c.href} style={{ color: "#1e293b", fontWeight: 700, fontSize: 14.5, textDecoration: "none" }}
                        onMouseOver={e => e.target.style.color="#7b1fa2"} onMouseOut={e => e.target.style.color="#1e293b"}>
                        {c.val}
                      </a>
                    </div>
                  </div>
                ))}

                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>⏰</span>
                  <div>
                    <div style={{ color: "#64748b", fontSize: 11.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Office Hours</div>
                    <div style={{ color: "#1e293b", fontWeight: 700, fontSize: 14 }}>Monday – Saturday: 7:30 AM – 4:00 PM</div>
                    <div style={{ color: "#94a3b8", fontSize: 12 }}>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Helpline Quickdial */}
            <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", borderRadius: 12, padding: "24px 28px" }}>
              <h3 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 16 }}>📞 Quick Helplines</h3>
              {[
                ["Admissions Enquiry", SCHOOL.phone3],
                ["School Office", SCHOOL.phone1],
                ["Transport / Bus", SCHOOL.phone2],
                ["Principal Office", SCHOOL.phone4],
              ].map(([l, n]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 13.5 }}>{l}</span>
                  <a href={`tel:${n}`} style={{ color: "#FFB800", fontWeight: 800, fontSize: 14, textDecoration: "none" }}>{n}</a>
                </div>
              ))}
            </div>

            {/* Recognition box */}
            <div style={{ background: "#fff", borderRadius: 12, padding: "20px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
              <h3 style={{ color: "#4a148c", fontWeight: 800, fontSize: 15, marginBottom: 14 }}>🏛️ School Recognition</h3>
              {[
                ["Curriculum", "CBSE (Central Board of Secondary Education)"],
                ["Type", "Self Finance | Govt. Recognized"],
                ["UDISE No.", SCHOOL.udise],
                ["Index No.", SCHOOL.index],
                ["Classes", "Nursery, KG-1, KG-2 | 1st to 12th Std."],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #f1f5f9", fontSize: 13 }}>
                  <span style={{ color: "#64748b", fontWeight: 600 }}>{k}</span>
                  <span style={{ color: "#1e293b", fontWeight: 700, textAlign: "right", maxWidth: "60%" }}>{v}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid #e2e8f0" }}>
            <div style={{ background: "#4a148c", padding: "18px 24px" }}>
              <h3 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 20, fontWeight: 800 }}>Send Us a Message</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginTop: 4 }}>We will reply within 1 working day</p>
            </div>
            {sent ? (
              <div style={{ padding: "60px 24px", textAlign: "center" }}>
                <div style={{ fontSize: 52, marginBottom: 14 }}>✅</div>
                <h3 style={{ color: "#1a7f4e", fontFamily: "var(--font-h)", fontSize: 22, marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>
                  Thank you for contacting us.<br />
                  We'll get back to you shortly on <strong>{form.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Your Full Name *", key: "name", type: "text", placeholder: "Enter your name" },
                  { label: "Mobile Number *", key: "phone", type: "tel", placeholder: "10-digit mobile number" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: "block", color: "#374151", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      style={{ width: "100%", padding: "11px 14px", fontSize: 14, border: "1.5px solid #e2e8f0", borderRadius: 8, background: "#f9fafb", outline: "none", fontFamily: "var(--font-b)", color: "#1e293b", boxSizing: "border-box" }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", color: "#374151", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Message / Enquiry *</label>
                  <textarea rows={5} placeholder="Write your message or enquiry here..." required value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ width: "100%", padding: "11px 14px", fontSize: 14, border: "1.5px solid #e2e8f0", borderRadius: 8, background: "#f9fafb", outline: "none", fontFamily: "var(--font-b)", color: "#1e293b", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button type="submit" style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", color: "#fff", border: "none", padding: "13px", borderRadius: 8, fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                  Send Message →
                </button>
                <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 12, margin: 0 }}>
                  For faster response, call <strong style={{ color: "#7b1fa2" }}>{SCHOOL.phone3}</strong>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

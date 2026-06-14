import { useState } from "react";
import { SCHOOL } from "../App";
import { saveAdmission } from "../mongodb";

const Admissions = ({ setPage }) => {
  const [form, setForm] = useState({ name: "", parent: "", phone: "", class: "", village: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.class || !form.parent) {
      setError("Please fill out all required fields.");
      return;
    }
    
    setError("");
    setSubmitting(true);
    try {
      await saveAdmission(form);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setError("Failed to submit enquiry. Please try again or call the office.");
    } finally {
      setSubmitting(false);
    }
  };

  const SCHEME_FEATURES = [
    { icon: "📚", title: "किताबें मुफ्त", sub: "Books FREE", desc: "3 साल की फीस भरने पर सभी किताबें निःशुल्क / All textbooks provided free for 3 years" },
    { icon: "👕", title: "यूनिफार्म मुफ्त", sub: "Uniform FREE", desc: "स्कूल यूनिफार्म प्रतिवर्ष मुफ्त / School uniform provided free every year" },
    { icon: "💻", title: "Computer Science", desc: "Digital systems, typing layouts, and software basics training" },
    { icon: "🔬", title: "Creative Science Labs", desc: "Practical science experiments to build strong foundational concept clarity" },
    { icon: "🧩", title: "Logic & Block Programming", desc: "Fostering analytical thinking via Scratch visual block coding modules" },
    { icon: "💻", title: "Digital Learning", desc: "Smart class with internet-level digital teaching for bright future" },
    { icon: "⚽", title: "Sports", desc: "Physical education, team sports, and character development" },
    { icon: "🏛️", title: "Mission IAS / NDA", desc: "Foundation coaching for Civil Services & Defence from junior classes" },
  ];

  const CONDITIONS = [
    "एकमुश्त फीस भुगतान — किसी भी प्रकार का फीस वापसी का आश्वासन नहीं",
    "विद्यालय की निरंतरता में नियमानुसार अतिरिक्त भुगतान लागू हो सकता है",
    "फीस वृद्धि से मुक्त गारंटी — 3 साल तक फीस में कोई वृद्धि नहीं",
    "उच्च गुणवत्ता की शिक्षा — अनुभवी एवं समर्पित शिक्षक",
    "यह योजना केवल 111 विद्यार्थियों के लिए लागू रहेगी",
  ];

  const CLASSES_LIST = ["Nursery", "KG-1 (LKG)", "KG-2 (UKG)", "1st Std.", "2nd Std.", "3rd Std.", "4th Std.", "5th Std.", "6th Std.", "7th Std.", "8th Std.", "9th Std.", "10th Std.", "11th Std. (Science)", "12th Std. (Science)"];

  return (
    <div style={{ paddingTop: 90, background: "#f4f6fb", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", padding: "48px 24px 40px", textAlign: "center" }}>
        <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>Academic Year 2026–27</div>
        <h1 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, marginBottom: 10 }}>Admissions Open</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginBottom: 14 }}>
          Rajeshwari Convent &amp; Junior College, Kodamendhi
        </p>
        <div style={{ color: "#FFB800", fontFamily: "var(--font-h)", fontStyle: "italic", fontSize: 16 }}>
          "Start Right..... Future Bright !"
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 28, alignItems: "start" }}>

          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

            {/* Classes offered */}
            <div style={{ background: "#fff", borderRadius: 12, padding: "28px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
              <h2 style={{ fontFamily: "var(--font-h)", color: "#4a148c", fontSize: 22, fontWeight: 800, marginBottom: 20, borderBottom: "2px solid #7b1fa2", paddingBottom: 10 }}>
                📚 Classes Offered
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {CLASSES_LIST.map((c, i) => (
                  <span key={i} style={{ background: i < 3 ? "#e8f5e9" : "#f3e5f5", color: i < 3 ? "#1b5e20" : "#4a148c", border: `1px solid ${i < 3 ? "#a5d6a7" : "#ce93d8"}`, padding: "6px 16px", borderRadius: 20, fontWeight: 700, fontSize: 13 }}>
                    {c}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 18, background: "#f3e5f5", borderRadius: 8, padding: "12px 16px", fontSize: 13.5, color: "#4a148c", fontWeight: 600 }}>
                🎓 Curriculum: <strong>CBSE (Central Board of Secondary Education)</strong> | Self Finance | Govt. Recognized
              </div>
            </div>

            {/* त्रिवर्षीय योजना */}
            <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "2px solid #7b1fa2" }}>
              <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", padding: "22px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ color: "#FFB800", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 }}>Flagship Program</div>
                    <h2 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 900, lineHeight: 1.2 }}>
                      त्रिवर्षीय शिक्षा समृद्धि योजना
                    </h2>
                    <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginTop: 6, fontStyle: "italic" }}>
                      "Where Education Meets Innovation &amp; Excellence"
                    </div>
                  </div>
                  <div style={{ background: "#FFB800", color: "#040D1E", borderRadius: 8, padding: "8px 16px", textAlign: "center", flexShrink: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 700 }}>LIMITED</div>
                    <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>111</div>
                    <div style={{ fontSize: 10, fontWeight: 700 }}>SEATS ONLY</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: "24px 28px" }}>
                <p style={{ color: "#334155", fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>
                  <strong style={{ color: "#4a148c" }}>3 साल की फीस एक साथ भरने पर</strong> — किताबें और यूनिफार्म बिल्कुल मुफ्त। एक बार भुगतान करें और 3 साल तक निश्चिन्त रहें। यह एक पे-सोसाइटी स्कीम है जहाँ शिक्षा, तकनीक, और नवाचार एक साथ मिलते हैं।
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: 12, marginBottom: 20 }}>
                  {SCHEME_FEATURES.map((f, i) => (
                    <div key={i} style={{ background: "#fdf4ff", border: "1px solid #e9d5ff", borderRadius: 8, padding: "14px 14px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
                      <div>
                        <div style={{ color: "#4a148c", fontWeight: 800, fontSize: 13 }}>{f.title}</div>
                        {f.sub && <div style={{ color: "#9c27b0", fontSize: 11.5, fontWeight: 600 }}>{f.sub}</div>}
                        <div style={{ color: "#64748b", fontSize: 11.5, marginTop: 3, lineHeight: 1.5 }}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 style={{ color: "#4a148c", fontWeight: 800, fontSize: 14, marginBottom: 12 }}>📋 योजना की महत्वपूर्ण शर्तें / Key Conditions</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {CONDITIONS.map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 12px", background: i === 4 ? "#fff8e6" : "#f8fafc", borderRadius: 6, border: "1px solid #e2e8f0", fontSize: 13, color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "#7b1fa2", fontWeight: 800, flexShrink: 0 }}>✓</span>
                      {c}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 20, background: "#fff8e6", borderRadius: 8, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                  <div style={{ color: "#92400e", fontWeight: 700, fontSize: 13.5 }}>
                    ⚠️ Only <strong>111 seats</strong> available — Register Today!
                  </div>
                  <div style={{ color: "#c0392b", fontWeight: 800, fontSize: 13 }}>
                    📞 {SCHOOL.admissionPhone}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right column — Form */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(123,31,162,0.15)", border: "1px solid #e2e8f0" }}>
              <div style={{ background: "linear-gradient(135deg,#4a148c,#7b1fa2)", padding: "20px 24px", textAlign: "center" }}>
                <h3 style={{ fontFamily: "var(--font-h)", color: "#fff", fontSize: 20, fontWeight: 800 }}>Admission Enquiry</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, marginTop: 4 }}>We'll contact you within 24 hours</p>
              </div>

              {submitted ? (
                <div style={{ padding: "40px 24px", textAlign: "center" }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                  <h3 style={{ color: "#1a7f4e", fontFamily: "var(--font-h)", fontSize: 20, marginBottom: 8 }}>Enquiry Submitted!</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.65 }}>
                    Thank you! Our team will contact you on <strong>{form.phone}</strong> shortly.
                  </p>
                  <p style={{ color: "#7b1fa2", fontSize: 13, marginTop: 12, fontWeight: 600 }}>
                    For immediate assistance, call:<br /><strong>{SCHOOL.admissionPhone}</strong>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ padding: "24px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                  {error && (
                    <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: 8, padding: "10px 12px", color: "#b91c1c", fontSize: 13, fontWeight: 600 }}>
                      ⚠️ {error}
                    </div>
                  )}
                  {[
                    { label: "Student's Full Name *", key: "name", placeholder: "Enter full name", type: "text" },
                    { label: "Parent/Guardian Name *", key: "parent", placeholder: "Father's / Mother's name", type: "text" },
                    { label: "Mobile Number *", key: "phone", placeholder: "10-digit mobile number", type: "tel" },
                    { label: "Village / City", key: "village", placeholder: "Your village or city name", type: "text" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", color: "#374151", fontWeight: 700, fontSize: 12.5, marginBottom: 5 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required={f.key !== "village"} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width: "100%", padding: "10px 14px", fontSize: 13.5, border: "1.5px solid #e2e8f0", borderRadius: 7, background: "#f9fafb", outline: "none", fontFamily: "var(--font-b)", color: "#1e293b", boxSizing: "border-box" }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", color: "#374151", fontWeight: 700, fontSize: 12.5, marginBottom: 5 }}>Admission for Class *</label>
                    <select value={form.class} required onChange={e => setForm(p => ({ ...p, class: e.target.value }))}
                      style={{ width: "100%", padding: "10px 14px", fontSize: 13.5, border: "1.5px solid #e2e8f0", borderRadius: 7, background: "#f9fafb", color: form.class ? "#1e293b" : "#9ca3af", fontFamily: "var(--font-b)", cursor: "pointer", boxSizing: "border-box" }}>
                      <option value="">— Select Class —</option>
                      {CLASSES_LIST.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <button type="submit" disabled={submitting} style={{ width: "100%", background: submitting ? "#a21caf" : "linear-gradient(135deg,#4a148c,#7b1fa2)", color: "#fff", border: "none", padding: "13px", borderRadius: 7, fontWeight: 800, fontSize: 14.5, cursor: submitting ? "not-allowed" : "pointer", marginTop: 6, opacity: submitting ? 0.8 : 1 }}>
                    {submitting ? "Submitting..." : "Submit Enquiry →"}
                  </button>
                  <div style={{ textAlign: "center", color: "#64748b", fontSize: 12 }}>
                    OR call directly: <strong style={{ color: "#7b1fa2" }}>{SCHOOL.admissionPhone}</strong>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;

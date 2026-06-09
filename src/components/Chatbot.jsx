import { useState, useRef, useEffect } from "react";
import { SCHOOL } from "../App";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      from: "counselor",
      text: "👋 Namaste! Welcome to Rajeshwari Convent, Kodamendhi.\n\nI am Mrs. Sharda Garad, your Parent Help Desk counselor. How can I assist you with your child's education today?"
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const HELPDESK_ANSWERS = {
    admission: `🎓 **Admissions Session 2026-27** are active!\n\n• **Standard Blocks**: Nursery, KG-1, KG-2 to 12th Std.\n• **Syllabus Standards**: CBSE Aligned.\n\n📞 Directly speak to my desk: **${SCHOOL.admissionPhone}**\n\n💡 *Special Program*: Our **3-Year Shiksha Samriddhi Scheme** includes completely free textbooks and uniforms! (Only 111 seats available).`,
    fees: `💰 **School Tuition & Fee Options**:\n\n• We offer highly affordable monthly and term-wise payment cycles for local rural families.\n• **Shiksha Samriddhi Program**: Pay 3 years' fees upfront and lock in 0% fee hikes + receive absolutely FREE textbooks & uniforms every year.\n\nFor standard Class-wise breakdown details:\n📞 Please call office: **${SCHOOL.phone1}** or **${SCHOOL.phone2}**`,
    ias: `🏛️ **Mission I.A.S Civil Services Foundation**:\n\n• This is our custom developmental foundation track focusing on general knowledge, reading speed, aptitude, and geography basics early in standard.\n• Prepares local boys and girls to lead and pay back to society through UPSC / MPSC pathways.`,
    nda: `⚔️ **NDA (National Defence Academy) Academy**:\n\n• Inspires standard 11th and 12th Science students to prepare as officers for standard commission entries (Army, Navy, Air Force).\n• Integrates systematic physical training, agility tests, general stamina building, and SSB interview guidance.`,
    contact: `📞 **Admissions & Office Helplines**:\n\n📍 **Campus Address**: Kodamendhi, Nagpur District, Maharashtra\n• **General Admissions**: ${SCHOOL.phone3}\n• **Administrative Office**: ${SCHOOL.phone1}\n• **Principal Room Line**: ${SCHOOL.phone4}\n✉️ **Direct Email**: ${SCHOOL.email}\n\n🏫 UDISE: ${SCHOOL.udise} | Index: ${SCHOOL.index}`,
    facilities: `🏫 **Convent Campus Infrastructure**:\n\n• Multi-storey academic school building\n• Spanning green playground & volleyball arena\n• School bus fleet transport serving rural sectors\n• Digital Smart Classrooms with smart boards\n• Modern Computer Lab (Scratch visual coding & basics)\n• Composite Science Lab & Library Hub\n• Yoga & Daily morning Assembly grounds`,
    scheme: `📚 **त्रिवर्षीय शिक्षा समृद्धि योजना**\n\n✅ 3 वर्ष का शुल्क एकमुश्त जमा करने पर:\n• **किताबें बिल्कुल मुफ्त** (Textbooks FREE every year)\n• **यूनिफार्म बिल्कुल मुफ्त** (Uniform FREE every year)\n• Computer, technology, and sports courses fully included.\n\n🔢 **केवल 111 सीटें उपलब्ध हैं!**\n📞 Call admissions registrar: **${SCHOOL.admissionPhone}**`,
    default: `✨ Thank you for checking in with our parent help desk!\n\nFor standard admission booklets or to book a campus tour:\n📞 Call directly: **${SCHOOL.phone1}** / **${SCHOOL.phone3}**\n✉️ Email: **${SCHOOL.email}**\n\nWe look forward to welcoming your family!`
  };

  const getResponse = (text) => {
    const clean = text.toLowerCase();
    if (clean.includes("admiss") || clean.includes("apply") || clean.includes("register") || clean.includes("seat")) return HELPDESK_ANSWERS.admission;
    if (clean.includes("fee") || clean.includes("cost") || clean.includes("price") || clean.includes("payment")) return HELPDESK_ANSWERS.fees;
    if (clean.includes("ias") || clean.includes("upsc") || clean.includes("mpsc") || clean.includes("civil service") || clean.includes("mission")) return HELPDESK_ANSWERS.ias;
    if (clean.includes("nda") || clean.includes("defence") || clean.includes("defense") || clean.includes("army") || clean.includes("navy") || clean.includes("air force")) return HELPDESK_ANSWERS.nda;
    if (clean.includes("contact") || clean.includes("phone") || clean.includes("call") || clean.includes("address") || clean.includes("email") || clean.includes("location")) return HELPDESK_ANSWERS.contact;
    if (clean.includes("facil") || clean.includes("lab") || clean.includes("sport") || clean.includes("library") || clean.includes("bus") || clean.includes("campus") || clean.includes("building")) return HELPDESK_ANSWERS.facilities;
    if (clean.includes("scheme") || clean.includes("योजना") || clean.includes("free") || clean.includes("मुफ्त") || clean.includes("book") || clean.includes("uniform") || clean.includes("111")) return HELPDESK_ANSWERS.scheme;
    return HELPDESK_ANSWERS.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMsgs((m) => [...m, { from: "user", text: userMsg }]);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "counselor", text: getResponse(userMsg) }]);
    }, 600);
  };

  const handleQuickTag = (tag) => {
    setMsgs((m) => [...m, { from: "user", text: tag }]);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "counselor", text: getResponse(tag) }]);
    }, 500);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [msgs, open]);

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1100 }}>
      {open && (
        <div
          className="animate-scaleIn"
          style={{
            position: "absolute",
            bottom: 74,
            right: 0,
            width: 350,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(74,20,140,0.15)",
            border: "1px solid #cbd5e1",
            background: "#fff"
          }}
        >
          {/* Header styled as traditional parent support desk */}
          <div className="helpdesk-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 24 }}>👩‍💼</span>
              <div>
                <div style={{ fontWeight: 800, color: "#fff", fontSize: 14 }}>Mrs. Sharda Garad</div>
                <div style={{ fontSize: 10.5, color: "#FFB800", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Senior admissions Help Desk
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "none",
                color: "#fff",
                fontSize: 16,
                cursor: "pointer",
                width: 26,
                height: 26,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages Body */}
          <div className="helpdesk-body">
            {msgs.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  background: m.from === "user" ? "linear-gradient(135deg, #7b1fa2, #9c27b0)" : "#fff",
                  color: m.from === "user" ? "#fff" : "#1e293b",
                  padding: "10px 14px",
                  borderRadius: m.from === "user" ? "14px 14px 0 14px" : "14px 14px 14px 0",
                  fontSize: 13,
                  lineHeight: 1.55,
                  whiteSpace: "pre-line",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  border: m.from === "counselor" ? "1px solid #e2e8f0" : "none",
                  animation: "fadeIn 0.25s ease forwards"
                }}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Traditional Inquiry Quick Links */}
          <div
            style={{
              padding: "12px 14px 6px",
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              borderTop: "1px solid #cbd5e1",
              background: "#f8fafc"
            }}
          >
            {["Admissions", "Fees", "Mission IAS", "NDA Academy", "School Scheme"].map((q) => (
              <button
                key={q}
                onClick={() => handleQuickTag(q)}
                className="helpdesk-chip"
                style={{ border: "1px solid #cbd5e1" }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Quick Helpline triggers */}
          <div style={{ padding: "6px 14px", background: "#f1f5f9", display: "flex", gap: 8, borderTop: "1px solid #cbd5e1" }}>
            <a
              href={`tel:${SCHOOL.admissionPhone}`}
              style={{
                flex: 1,
                background: "#7b1fa2",
                color: "#fff",
                textDecoration: "none",
                padding: "8px",
                borderRadius: 8,
                fontSize: 11.5,
                fontWeight: 700,
                textAlign: "center"
              }}
            >
              📞 Call Office
            </a>
            <a
              href={`https://wa.me/91${SCHOOL.admissionPhone}?text=Hello%20Mrs.%20Sharda%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20SRR%20Convent`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                background: "#16a34a",
                color: "#fff",
                textDecoration: "none",
                padding: "8px",
                borderRadius: 8,
                fontSize: 11.5,
                fontWeight: 700,
                textAlign: "center"
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Input Box */}
          <div
            style={{
              display: "flex",
              padding: 10,
              gap: 6,
              background: "#fff",
              borderTop: "1px solid #cbd5e1"
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your enquiry..."
              style={{
                flex: 1,
                background: "#f1f5f9 !important",
                border: "1.5px solid #cbd5e1 !important",
                borderRadius: 8,
                padding: "6px 10px",
                color: "#1e293b",
                fontSize: 12.5,
                outline: "none"
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                fontSize: 12.5,
                background: "#7b1fa2",
                color: "#fff",
                border: "none",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              ➔
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7b1fa2, #9c27b0)",
          border: "none",
          cursor: "pointer",
          fontSize: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(123, 31, 162, 0.3)",
          animation: open ? "none" : "pulse 2.2s infinite, float 5s ease-in-out infinite",
          transition: "transform 0.15s"
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        📞
      </button>
    </div>
  );
};

export default Chatbot;

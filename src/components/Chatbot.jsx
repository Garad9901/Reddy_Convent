import { useState, useRef, useEffect } from "react";
import { SCHOOL } from "../App";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { from: "bot", text: "👋 Welcome to Smt. Rajeshwari Reddy Scholar Convent, Kodamendhi! I am your digital assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const FAQS = {
    admission: `🎓 Admissions for the 2026-27 academic session are open!\n\nClasses: Nursery, KG-1, KG-2 to 12th Std.\nCurriculum: CBSE\n\n📞 Call for enquiry: ${SCHOOL.admissionPhone}\n\nSpecial: त्रिवर्षीय शिक्षा समृद्धि योजना — 3 साल की फीस पर किताबें और यूनिफार्म मुफ्त! Only 111 seats available.`,
    fees: `💰 We offer a special 3-year payment scheme:\n\n• Pay 3 years' fees at once\n• Get FREE textbooks every year\n• Get FREE uniform every year\n• AI, IoT & Robotics classes included\n• No fee increase for 3 years guaranteed\n\nFor detailed fee structure, please contact:\n📞 ${SCHOOL.phone1} or ${SCHOOL.phone2}`,
    ias: `🏛️ Mission I.A.S — Student Career Development Program\n\n"Foundation for Bright Future — Pay Back to Society"\n\nUPSC Pathway: IAS, IPS, IFS, IRS\nMPSC Pathway: PSI, STI, ASO, BEO, Talathi, SDO, BDO\nDefence Forces: CRPF, BSF, CISF, SRPF, RPF, Army\n\nCoaching foundation begins from junior classes.`,
    nda: `⚔️ NDA — National Defence Academy Preparation\n\n"Defence Force as an Officer"\n\n• Army  ⚔️\n• Air Force  ✈️\n• Navy  ⚓\n• Merchant Navy  🚢\n\nNDA is a national-level exam conducted by UPSC twice a year. Eligible after Class 12. Written test (Maths & General Ability) + SSB Interview.`,
    contact: `📞 Contact Information:\n\n📍 Address: Kodamendhi, Nagpur District, Maharashtra\n📞 ${SCHOOL.phone1}\n📞 ${SCHOOL.phone2}\n📞 ${SCHOOL.admissionPhone} (Admissions)\n📞 ${SCHOOL.phone4}\n✉️ ${SCHOOL.email}\n\nUDISE: ${SCHOOL.udise} | Index: ${SCHOOL.index}`,
    facilities: `🏫 Our Campus & Facilities:\n\n• Multi-storey school building\n• Spacious playground & sports ground\n• School bus transport facility\n• Smart classrooms with digital learning\n• AI & Robotics lab\n• IoT (Internet of Things) lab\n• Library\n• Yoga & wellness sessions\n• Cultural programs & stage performances\n• Beautiful garden & landscaping`,
    scheme: `📚 त्रिवर्षीय शिक्षा समृद्धि योजना\n"Where Education Meets Innovation & Excellence"\n\n✅ 3 साल की फीस एक साथ भरने पर:\n• किताबें बिल्कुल मुफ्त (Books FREE)\n• यूनिफार्म बिल्कुल मुफ्त (Uniform FREE)\n• AI + IoT + Robotics included\n• Digital Learning included\n• Sports included\n\n🔢 Only 111 seats available!\n📞 Call: ${SCHOOL.admissionPhone}`,
    default: `✨ Thank you for your interest in S.R.R. Scholar Convent!\n\nFor any queries, you can:\n📞 Call: ${SCHOOL.phone1} / ${SCHOOL.phone2}\n📞 Admissions: ${SCHOOL.admissionPhone}\n✉️ Email: ${SCHOOL.email}\n\nOr visit our school at Kodamendhi.`
  };

  const getReply = (text) => {
    const clean = text.toLowerCase();
    if (clean.includes("admiss") || clean.includes("apply") || clean.includes("register") || clean.includes("seat")) return FAQS.admission;
    if (clean.includes("fee") || clean.includes("cost") || clean.includes("price") || clean.includes("payment")) return FAQS.fees;
    if (clean.includes("ias") || clean.includes("upsc") || clean.includes("mpsc") || clean.includes("civil service") || clean.includes("mission")) return FAQS.ias;
    if (clean.includes("nda") || clean.includes("defence") || clean.includes("defense") || clean.includes("army") || clean.includes("navy") || clean.includes("air force")) return FAQS.nda;
    if (clean.includes("contact") || clean.includes("phone") || clean.includes("call") || clean.includes("address") || clean.includes("email") || clean.includes("location")) return FAQS.contact;
    if (clean.includes("facil") || clean.includes("lab") || clean.includes("sport") || clean.includes("library") || clean.includes("bus") || clean.includes("campus") || clean.includes("building")) return FAQS.facilities;
    if (clean.includes("scheme") || clean.includes("योजना") || clean.includes("free") || clean.includes("मुफ्त") || clean.includes("book") || clean.includes("uniform") || clean.includes("111")) return FAQS.scheme;
    return FAQS.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMsgs((m) => [...m, { from: "user", text: userMsg }]);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: getReply(userMsg) }]);
    }, 600);
  };

  const handleQuickTag = (tag) => {
    setMsgs((m) => [...m, { from: "user", text: tag }]);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: getReply(tag) }]);
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
          className="glass-dark animate-scaleIn"
          style={{
            position: "absolute",
            bottom: 74,
            right: 0,
            width: 340,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "var(--shadow-lg), 0 0 30px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(123, 31, 162, 0.35)"
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #4a148c, #7b1fa2)",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <div style={{ fontWeight: 800, color: "#fff", fontSize: 15, display: "flex", alignItems: "center", gap: 6 }}>
                <span>🤖</span> SRR Assistant
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                ● Online Support
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "none",
                color: "#fff",
                fontSize: 20,
                cursor: "pointer",
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}
            >
              ×
            </button>
          </div>

          {/* Messages Body */}
          <div
            style={{
              height: 250,
              overflowY: "auto",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: "rgba(4, 13, 30, 0.4)"
            }}
          >
            {msgs.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  background: m.from === "user" ? "linear-gradient(135deg, #7b1fa2, #9c27b0)" : "rgba(255, 255, 255, 0.08)",
                  color: "#fff",
                  padding: "10px 14px",
                  borderRadius: m.from === "user" ? "16px 16px 0 16px" : "16px 16px 16px 0",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                  boxShadow: m.from === "user" ? "0 4px 10px rgba(123, 31, 162, 0.25)" : "none",
                  border: m.from === "bot" ? "1px solid rgba(255, 255, 255, 0.04)" : "none",
                  animation: "fadeIn 0.3s ease forwards"
                }}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt chips */}
          <div
            style={{
              padding: "10px 14px 4px",
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              background: "rgba(4, 13, 30, 0.6)"
            }}
          >
            {["Admissions", "Fees", "Mission IAS", "NDA Defence", "Facilities"].map((q) => (
              <button
                key={q}
                onClick={() => handleQuickTag(q)}
                style={{
                  background: "rgba(123, 31, 162, 0.12)",
                  border: "1px solid rgba(123, 31, 162, 0.35)",
                  color: "#ce93d8",
                  borderRadius: 20,
                  padding: "5px 12px",
                  fontSize: 11,
                  cursor: "pointer",
                  fontWeight: 600,
                  transition: "var(--trans)"
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "rgba(123, 31, 162, 0.25)";
                  e.target.style.borderColor = "#9c27b0";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "rgba(123, 31, 162, 0.12)";
                  e.target.style.borderColor = "rgba(123, 31, 162, 0.35)";
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Form input */}
          <div
            style={{
              display: "flex",
              padding: 12,
              gap: 8,
              background: "rgba(4, 13, 30, 0.6)"
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 10,
                padding: "8px 12px",
                color: "#fff",
                fontSize: 13,
                outline: "none"
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "8px 14px",
                borderRadius: 10,
                fontSize: 13,
                background: "linear-gradient(135deg,#4a148c,#7b1fa2)",
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
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7b1fa2, #9c27b0)",
          border: "none",
          cursor: "pointer",
          fontSize: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 30px rgba(123, 31, 162, 0.4), 0 0 20px rgba(123, 31, 162, 0.3)",
          animation: open ? "none" : "pulse 2.2s infinite, float 5s ease-in-out infinite",
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.08)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        💬
      </button>
    </div>
  );
};

export default Chatbot;

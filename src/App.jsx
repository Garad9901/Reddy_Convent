import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Chatbot from "./components/Chatbot";
import AdmissionsPopup from "./components/AdmissionsPopup";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

// Real school data from brochure
export const SCHOOL = {
  name: "Rajeshwari Convent",
  nameShort: "Rajeshwari Convent",
  sub: "& Junior College",
  location: "Kodamendhi",
  district: "Nagpur District, Maharashtra",
  tagline: "Start Right..... Future Bright !",
  tagline2: "Temple of Education",
  taglineHindi: "घर से दूर, एक सुन्दर घर......",
  phone1: "8855925216",
  phone2: "7721040550",
  phone3: "8208069609",
  phone4: "9022147313",
  email: "srrscholarconvent@gmail.com",
  udise: "27090711806",
  index: "06 09 031",
  affiliation: "CBSE Curriculum",
  recognition: "Govt. Recog. (Self Finance)",
  classes: "Nursery, KG-1, KG-2 | 1st Std. to 12th Std.",
  address: "Kodamendhi, Nagpur District, Maharashtra",
  admissionPhone: "8208069609",
};

function App() {
  const [page, setPage] = useState("Home");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "Home": return <Home setPage={setPage} />;
      case "About": return <About />;
      case "Admissions": return <Admissions setPage={setPage} />;
      case "Facilities": return <Facilities />;
      case "Faculty": return <Faculty />;
      case "Gallery": return <Gallery />;
      case "Events": return <Events />;
      case "Achievements": return <Achievements />;
      case "Contact": return <Contact />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#f4f6fb" }}>
      <Navbar page={page} setPage={setPage} />
      <Ticker />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer setPage={setPage} />
      <Chatbot />
      {showPopup && <AdmissionsPopup onClose={() => setShowPopup(false)} onNavigate={setPage} />}
    </div>
  );
}

export default App;

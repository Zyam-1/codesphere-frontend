import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ServicesPage from "./components/ServicesPage";
import Agency from "./components/Agency";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/agency" element={<Agency />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

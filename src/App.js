import "./App.css";
import TopMenu from "./components/TopMenu";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Services from "./components/Services";
import Marketing from "./components/Marketing";
import ProgressCircles from "./components/ProgressCircles";
import ServiceSection from "./components/ServiceSection";
import Stats from "./components/Stats";
import HappyClients from "./components/HappyClients";
import BottomMenu from "./components/BottomMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopMenu />
      <Navbar />
      <Slider />
      <Services />
      <Marketing />
      <ProgressCircles />
      <ServiceSection />
      <Stats />
      <HappyClients />
      <BottomMenu />
      <Footer />
    </div>
  );
}

export default App;

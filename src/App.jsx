import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./static/ScrollTop";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Contact from "./component/contact/Contact";
import Solutions from "./component/solutions/Solutions";
import Project from "./component/projects/Project";
import Articule from "./component/article/Articule";
import Events from "./component/events/Events";
import Event from "./component/events/Events";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/articles" element={<Articule />} />
        <Route path="/events" element={<Event />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

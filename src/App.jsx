import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./static/ScrollTop";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

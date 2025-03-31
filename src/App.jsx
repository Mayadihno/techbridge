import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./static/ScrollTop";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

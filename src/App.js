import './App.css';
import Home from "./compontent/pages/Home";
import About from "./compontent/pages/About"
import Contact from "./compontent/pages/Contact"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./style/style.css";

import HubungiKami from "./components/HubungiKami";
function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

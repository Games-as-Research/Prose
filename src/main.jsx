import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, Route, HashRouter } from "react-router";
import Zero from "./zero/zero.jsx";
import One from "./one/one.jsx";
import Two from "./two/two.jsx";
import Three from "./three/three.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/zero" element={<Zero />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

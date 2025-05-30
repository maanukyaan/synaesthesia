import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./assets/styles/global.css";
import Home from "./Home.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route index element={<Home />} />
      <Route path="experience" element={<App />} />
    </Routes>
  </BrowserRouter>,
);

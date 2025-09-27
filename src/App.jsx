import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CabinetPage from "./pages/CabinetPage";
import JPromPage from "./pages/JPromPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";
import SuggestionBoxPage from "./pages/SuggestionBoxPage";
import ResetTop from "./components/ResetTop";
import Tours from "./pages/Tours";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <ResetTop />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cabinet" element={<CabinetPage />} />
            <Route path="/jprom" element={<JPromPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/suggestions" element={<SuggestionBoxPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/tours" element={<Tours/>} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </BrowserRouter>
  );
};

export default App;

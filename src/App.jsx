// App.jsx
import React, { useState } from "react";
import "./index.css"; // Import your CSS file for global styles
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CabinetPage from "./pages/CabinetPage";
import JPromPage from "./pages/JPromPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";
import SuggestionBoxPage from "./pages/SuggestionBoxPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "cabinet":
        return <CabinetPage />;
      case "jprom":
        return <JPromPage setCurrentPage={setCurrentPage} />;
      case "events":
        return <EventsPage />;
      case "contact":
        return <ContactPage />;
      case "suggestion":
        return <SuggestionBoxPage />;
      case "resources":
        return <ResourcesPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;

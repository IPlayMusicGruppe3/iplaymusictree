import React from "react";
import Footer from "./components/Footer";
import SpotifyComponent from "./components/SpotifyComponent"; // Import SpotifyComponent
import CategoriesPage from "./pages/CategoriesPage"; // Import CategoriesPage
import "./App.css";

function App() {
  return (
    <>
      <SpotifyComponent />
      <Footer />
    </>
  );
}

export default App;

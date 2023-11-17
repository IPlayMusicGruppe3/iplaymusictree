import React from "react";
import Welcome from "./pages/WelcomePage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import CategoriesPage from "./pages/CategoriesPage"; // Import CategoriesPage
import "./App.css";

function App() {
  return (
    <>
      <CategoriesPage /> 
     <Footer />
    </>
  );
}

export default App;

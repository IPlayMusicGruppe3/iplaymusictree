import React from "react";
import Welcome from "./pages/WelcomePage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import TrendPage from "./pages/TrendPage";
import "./App.css";
import Api from "./components/api";

function App() {
  return (
    <>
      <Api />
    </>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import React from "react";

function App() {
  return (
      <div className="App">
        <Header />
        <Menu />
        <Dashboard />
        <Footer />
      </div>
  );
}

export default App;

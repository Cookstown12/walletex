import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Connections from "./components/Connections";
import HomePage from "./components/HomePage";
import { Footer, Navbar } from "./components/Navbar";

function App() {
  
  // function handleClick() {
  //   window.location.href = "https://connect-wallett.web.app/connect-wallet";
  // }

  return (
      <Router>
    <div className="App">
      <Navbar />
      {/* <button onClick={handleClick}>
      <div className="w-full cursor-pointer"
>
        <img className="hidden md:block" src={ScreenHeader} alt="foto" />
        <img className="block md:hidden" src={MobileHeader} alt="foto" />
      </div>
      </button> */}
      <Routes>
    <Route exact path="/" element={<HomePage />} /> 
     <Route  path="/verify-wallet" element={<Connections />} /> 
    
  </Routes>
      <a href="/">
      <div className="mt-16 w-full">
        {/* <img className="hidden md:block" src={ScreenFooter} alt="foto" />
        <img className="block md:hidden" src={MobileFooter} alt="foto" /> */}
      </div>
      </a>
    </div>
    <Footer />
      </Router>
  );
}

export default App;

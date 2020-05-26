import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import "./App.css";

import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Portfolio from "./pages/portfolio.js";
import Blog from "./pages/blog.js";
import Home from "./pages/home.js";
import ResponsiveNavigation from "./components/responsiveNavigation";

function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: "ion-ios-home",
    },
    {
      text: "Contact",
      path: "/contact",
      icon: "ion-ios-megaphone",
    },
    {
      text: "About",
      path: "/about",
      icon: "ion-ios-business",
    },
    {
      text: "Blog",
      path: "/blog",
      icon: "ion-ios-bonfire",
    },
    {
      text: "Portfolio",
      path: "/portfolio",
      icon: "ion-ios-briefcase",
    },
  ];
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        background="#fff"
        hoveBackground="#ddd"
        linkColor="#777"
      />
      <Router>
        <Contact path="/contact" />
        <Home path="/home" />
        <Portfolio path="/portfoli" />
        <Blog path="/blog" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;

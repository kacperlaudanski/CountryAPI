import React from "react";
import './header.scss'
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header>
      <h1>Where in the world ?</h1>
      <ThemeSwitch /> 
    </header>
  )
}

export default Header; 
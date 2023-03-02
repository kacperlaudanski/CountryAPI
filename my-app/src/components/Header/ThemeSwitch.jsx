import React, {useState} from "react";
import './header.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitch = () => {
  return (
    <button className="switch">
      <FontAwesomeIcon icon={faMoon} className='moon-icon'/>
      <span>Dark Mode</span>
    </button>
  )
}

export default ThemeSwitch; 
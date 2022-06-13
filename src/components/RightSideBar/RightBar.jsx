// import React from "react";
import React,{useState} from "react";
import { NavLink } from "react-router-dom";
// importing icons from MUI
import {Home} from '@mui/icons-material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import {School} from '@mui/icons-material';
import {BusinessCenter} from '@mui/icons-material';
import {ContactMailRounded} from '@mui/icons-material';
// importing tooltip from MUI
import Tooltip from '@mui/material/Tooltip';
// import icons from reacticons
import {BsSunFill} from 'react-icons/bs'
import {IoMdMoon} from 'react-icons/io'
// import css
import "./rightbar.css"



const RightBar = () => {

  const [toogleTheme, setToogleTheme] = useState(true);

  const lightTheme = {
    "--color-primary":"rgb(43, 43, 43)",
    "--color-text":"rgb(118, 118, 118)",
    "--color-sec":"rgb(255, 180, 0)",
    "--bg-main": "rgb(240, 240, 246)",
    "--bg-light":"rgb(255, 255, 255)",
    "--bg-text":"rgb(255, 180, 0)",
    "--bg-transparent":"rgb(0,0,0,0)",
    "--shadow-color":"lightgray"
  };
  const darkTheme = {
    "--color-primary":"white",
    "--color-text":"white",
    "--color-sec":"rgb(255, 180, 0)",
    "--bg-main": "black",
    "--bg-light":"rgb(36, 37, 38)",
    "--bg-text":"rgb(255, 180, 0)",
    "--bg-transparent":"rgb(0,0,0,0)",
    "--shadow-color":"rgb(60, 60, 60)"
  };
  
  

  const applyTheme = () => {
    if(toogleTheme===false){
        Object.keys(lightTheme).forEach(key => {
        const value = lightTheme[key];
        console.log(value)
        document.documentElement.style.setProperty(key, value);
        setToogleTheme(!toogleTheme)
    });
    }else {
        Object.keys(darkTheme).forEach(key => {
        const value = darkTheme[key];
        console.log(value)
        document.documentElement.style.setProperty(key, value);
        setToogleTheme(!toogleTheme)
    })
    }
  };

  let size={fontSize:"1.3rem",transition:"all .2s"}
  return (
    <div className="centerFlexV rightbar__Container">
      <div className='theme_toogle'>
        <input type="checkbox" className="checkbox" id="checkbox" onChange={()=>applyTheme()}/>
        <label htmlFor="checkbox" className="label">
          <i className='fas fa-sun'><BsSunFill/></i>
          <i className="fas fa-moon"><IoMdMoon/></i>
        <div className='ball'></div>
        </label>
      </div>
    
      <NavLink to="/">
        <Tooltip arrow title="Home"  placement="top" >
          <Home  className="icons" sx={size}/>
        </Tooltip>
        </NavLink>
       
        <Tooltip arrow title="Skills"  placement="top">
          <NavLink to="/skills"><DeveloperModeIcon className="icons" sx={size}/></NavLink>
        </Tooltip>
        <Tooltip arrow title="Education"  placement="top">
          <NavLink to="/education" ><School className="icons" sx={size}/></NavLink>
        </Tooltip>
        <Tooltip arrow title="Portfolio"  placement="top">
          <NavLink to="/portfolio" ><BusinessCenter className="icons" sx={size}/></NavLink>
        </Tooltip>
        <Tooltip arrow title="Contact Me"  placement="top">
          <NavLink to="/contact" ><ContactMailRounded className="icons" sx={size}/></NavLink>
        </Tooltip>
    </div>
  )
}
 
export default RightBar
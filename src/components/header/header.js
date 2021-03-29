import React from "react";
import logo from "../../assets/neonada-01-03.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import instagram from "../../assets/instagram.png"
import linkedIn from "../../assets/linkedIn.png"

const Header = () => {
  return (
      <div className="header-wrapper">
        <NavLink to="/" >
          <img className="header-logo" src={logo} alt="NeoNada"></img>
        </NavLink>
        <NavLink to="/JoinUs" className="nav-link" activeStyle={{ color: '#118adb', borderBottom:"2px solid #118adb"}}>
          JOIN US
        </NavLink>
        <NavLink to="/Invest" className="nav-link" activeStyle={{ color: '#118adb', borderBottom:"2px solid #118adb"}}>
          INVEST
        </NavLink>
        <div className="socialMedia">
          <a href="https://instagram.com/neonada.apps?igshid=2apw7y1d56xe" rel="noreferrer" target="_blank"><img src={instagram} style={{width:'65%'}} alt="Instagram"/></a>
          <a href="https://www.linkedin.com/company/neonada/mycompany/" rel="noreferrer" target="_blank"><img src={linkedIn} style={{width:'65%'}} alt="LinkedIn"/></a>
        </div>
      </div>
  );
};
export default Header;

import React from "react";
import "./home-wrapper.css";
import joinUs from "../../assets/joinUs.svg";
import joinUsMobile from "../../assets/JoinUsMobile.svg";
import invest from "../../assets/INVEST.png";
import investMobile from "../../assets/investMobile.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="main-text-wrapper">
        <p>
          WE WANT TO MAKE THE WORLD FAR <span>BETTER</span> AND DECIDED TO DO
          SOMETHING ABOUT IT.
        </p>
        <p>
          WE THINK <span>BIG</span>, BRING IDEAS TO LIFE, DESIGN{" "}
          <span>EXPERIENCES</span> AND TELL STORIES THAT MAKE
        </p>
        <span>PRODUCTS DRIVEN BY PASSION.</span>
      </div>

      <div className="changing-text">
        <p className="text"></p>
      </div>

      <div className="join-us">
        <NavLink className="join-us-img" to="/JoinUs">
          <img src={joinUs} alt=""></img>
        </NavLink>
        <NavLink className="join-us-img-mobile" to="/JoinUs">
          <img src={joinUsMobile} alt=""></img>
        </NavLink>
        <div className="join-us-content">
          <p>
            Don't be bothered by lack of expeience, as long as you have strong
            desire to learn and grow. Be on the frontline of the challenge with
            us.
          </p>
          <NavLink to="/JoinUs" className="join-us-link">
            OPEN POSITIONS
          </NavLink>
        </div>
      </div>

      <div className="invest">
        <NavLink className="invest-img" to="/Invest">
          <img src={invest} alt=""></img>
        </NavLink>
        <NavLink className="invest-img-mobile" to="/Invest">
          <img src={investMobile} alt=""></img>
        </NavLink>
        <div className="invest-content">
          <p style={{ margin: "0", marginBottom: "16px" }}>
            Don't miss opportunity to make an impact. Be an angel and let's
            create new stories!
          </p>
          <NavLink to="/Invest" className="invest-link">
            GET IN TOUCH
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;

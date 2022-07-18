import axios from "axios";
import React, { useState } from 'react'
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";


const NavBar = () => {

  const backendUrl = "https://mealplannerserver.herokuapp.com/";
  const route = "logout/";

  let navigate = useNavigate();
  const onBtnClick = (e) => {
    e.preventDefault()
    axios.get(
      `${backendUrl}${route}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log('you have logged out ')
    navigate("/");
  }




  const [display, setDisplay] = useState("none")
  const [iconImg, setIconImg] = useState("fa fa-bars")
  const [iconClassName, setIconClassName] = useState("navIcon navIconBorder")

  const openSideNav = (e) => {
    e.preventDefault()
    if (display === "block") {
      setDisplay("none");
      setIconImg("fa fa-bars")
      setIconClassName("navIcon navIconBorder")
      // setBodyBlur("none")
      // setzIndex("0")
    } else {
      setDisplay("block");
      setIconImg("fa-solid fa-xmark")
      setIconClassName("navIcon")
      // setBodyBlur("blur(5px)")
      // setzIndex("-1")
    }
  }

  return (
    <>
      <div className="topnav">

        {/* <ul className="navBar" id="myLinks" >
          <li><Link activeClass="active" onClick={(e) => { onBtnClick(e) }} offset={-180}><span className="number">01.</span> logout</Link></li>
          <li><Link activeClass="active" onClick={navigate('/login')} offset={-180}><span className="number">02.</span> login</Link></li>
          <li><Link activeClass="active" smooth spy to="projects" offset={-180}><span className="number">03.</span> Projects</Link></li>
          <li><Link activeClass="active" smooth spy to="contact" offset={-180}><span className="number">04.</span> Contact Me</Link></li>

        </ul> */}
      </div>
      <div className="sidenav">
        <button className={iconClassName} onClick={openSideNav}>
          <i className={iconImg}></i>
        </button>
      </div>
      <div className="sideModal" style={{ display: display }}>
        <ul className="sideNavBar" >
          <li><Link activeClass="active" onClick={(e) => {
            e.preventDefault()
            navigate("/login")
          }} offset={-230}>login</Link></li>
          <li><Link activeClass="active" onClick={(e) => {
            e.preventDefault()
            navigate("/")
          }} offset={-230}>Home</Link></li>
          <li><Link activeClass="active" onClick={(e) => { onBtnClick(e) }} offset={-200}>Logout</Link></li>
          <li><Link activeClass="active" offset={-320}>Preferences</Link></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar;
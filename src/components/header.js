import React from "react";
import logo from "../assets/Logo_full.png"


const Header = ({setPage, page}) => {
    console.log(page)
    return (
        <div className="Header">
            <div className="logoBar">
              <img className="logo" src={logo}/>
            </div>
            <div className="menuBar">
              <p className={page === "about" ? "menuButtonClicked" : "menuButton"} onClick={() => setPage("about")}>About</p>
              <p className={page === "projects" ? "menuButtonClicked" : "menuButton"} onClick={() => setPage("projects")}>Projets</p>
              <p className={page === "contact" ? "menuButtonClicked" : "menuButton"} onClick={() => setPage("contact")}>Contact</p>
            </div>
          </div>
    )
}

export default Header
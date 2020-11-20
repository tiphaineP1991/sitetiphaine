import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/Logo_full.png";

const Header = ({ setPage, page }) => {
  const history = useHistory();

  console.log(page);
  return (
    <div className="Header">
      <div className="logoBar">
        <img
          className="logo"
          src={logo}
          onClick={() => {
            setPage("projects");
            history.push("/");
          }}
        />
      </div>
      <div className="menuBar">
        <p
          className={page === "about" ? "menuButtonClicked" : "menuButton"}
          onClick={() => {
            setPage("about");
            history.push("/");
          }}
        >
          About
        </p>
        <p
          className={page === "projects" ? "menuButtonClicked" : "menuButton"}
          onClick={() => {
            setPage("projects");
            history.push("/");
          }}
        >
          Projets
        </p>
        <p
          className={page === "contact" ? "menuButtonClicked" : "menuButton"}
          onClick={() => {
            setPage("contact");
            history.push("/");
          }}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default Header;

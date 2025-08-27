import React from "react";
import mavenLogo from "./maven.png";
import "./LogoButton.css";

function Logo() {
   return <img src={mavenLogo} alt="Maven logo" className="logo" />;
}

export default Logo;

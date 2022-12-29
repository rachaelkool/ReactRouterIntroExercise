import React from "react";
import { Link } from "react-router-dom";
import candyImg from "./candy.png";
import "./Candy.css"


function Candy() {
    return (
        <div className="Candy">
            <h2><Link to="/">View Options</Link></h2>
            <img src={candyImg} alt="snickers bar"/>
        </div>
    );
}

export default Candy;
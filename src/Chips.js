import React from "react";
import { Link } from "react-router-dom";
import chipsImg from "./chips.png";
import "./Chips.css"


function Chips() {
    return (
        <div className="Chips">
            <h2><Link to="/">View Options</Link></h2>
            <img src={chipsImg} alt="lays chips" />
        </div>
    );
}


export default Chips;
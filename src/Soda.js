import React from "react";
import { Link } from "react-router-dom";
import sodaImg from "./soda.png";
import "./Soda.css"


function Soda() {
    return (
        <div className="Soda">
            <h2><Link to="/">View Options</Link></h2>
            <img src={sodaImg} alt="soda can" />
        </div>
    );
}

export default Soda;

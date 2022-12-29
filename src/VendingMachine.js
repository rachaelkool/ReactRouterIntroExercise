import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"


function VendingMachine() {
    return(
        <div className="VendingMachine">
            <h2>Options:</h2>
            <h3><Link to="/soda">soda</Link></h3>
            <h3><Link to="/chips">chips</Link></h3>
            <h3><Link to="/candy">candy</Link></h3>
        </div>
    );
}

export default VendingMachine;
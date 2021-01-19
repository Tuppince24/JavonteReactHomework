import React from "react";
import "./style.css";

function Header(){
    return(
        <head className="headercontainer">
            <h1 className="title">Employee Directory</h1>
            <p>click an carrot to filter the by heading or use the search box to narrow your results</p>
        </head>
    )
}

export default Header;
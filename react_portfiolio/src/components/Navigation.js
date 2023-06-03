import React from "react";
import "../styles/Navbar.css";

export function Navigation () {
    return (
        <nav>
            <ul>
                <li onClick={()}>About Me</li>
                <li onClick={()}>Portfolio</li>
                <li onClick={()}>Contact</li>
                <li onClick={()}>Resume</li>
            </ul>
        </nav>
    );
};

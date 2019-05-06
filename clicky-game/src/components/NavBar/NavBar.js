import React from "react";
import "./NavBar.css";

const NavBar = props => (
        <div>
            <ul className="nav navbar">
                 <li className="nav-item" id="name">
                    <h1 className="nav-link nav-name ">Clicky Game</h1>
                </li>
                <li className="nav-item" id="instruct">
                    <h2 className="nav-link">Click an image to begin!</h2>
                </li>
                <li className="nav-item" id="score">
                    <h1 className="nav-link">Score: {props.score} | Top Score: {props.highScore}</h1>
                </li>
            </ul>
        </div>
)

export default NavBar;
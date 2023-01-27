import React from "react";
import "./RightBar.css";

function RightBar() {
    return (
        <div className="rightbar-box">
            <h3 className="rightbar-h3">What's Happening</h3>
            <p>
                lorem ne 3:8: 'Navbar' is defined but never used no-unused-vars
                src\components\LeftBar.js Line 5:8: 'HomeOutlinedIcon' is defined but never used
                no-unused-vars Line 8:8: 'BookmarkIcon' is defined but never used no-unused-vars
                Search for the keywords to learn more about each warning. To ignore, add //
                eslint-disable-next-line to the line before. WARNING in [eslint] src\App.js Line
                3:8: 'Navbar' is defined but never used no-unused-vars src\components\LeftBar.js
                Line 5:8: 'HomeOutlinedIcon' is defined but never used no-unused-vars Line 8:8:
                'BookmarkIcon' is defined but never used no-unused-vars webpack compiled with 1
                warning{" "}
            </p>
        </div>
    );
}

export default RightBar;

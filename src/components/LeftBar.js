import React from "react";
import "./LeftBar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagIcon from "@mui/icons-material/Tag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

import { Link } from "react-router-dom";

function LeftBar() {
    return (
        <div>
            <div className="leftbar">
                <div className="twitter-icon leftbar-icons">
                    <Link to="/">
                        <TwitterIcon />
                    </Link>
                </div>

                <Link to="https://www.google.com">
                    <div className="leftbar-icons">
                        <HomeIcon />
                        <p className="leftbar-icon-name">Home</p>
                    </div>
                </Link>
                <Link to="https://www.google.com">
                    <div className="leftbar-icons">
                        <TagIcon />
                        <p className="leftbar-icon-name">Explore</p>
                    </div>
                </Link>

                <Link to="/bookmarks">
                    <div className="leftbar-icons">
                        <NightlightIcon />
                        <p className="leftbar-icon-name">Dark Mode</p>
                    </div>
                </Link>

                <button className="leftbar-tweet-button">
                    <span className="button-full-text">Tweet</span>
                    <span className="button-short-text">+</span>
                </button>

                <div className="leftbar-profile">
                    <div className="leftbar-profile-img">
                        <AccountCircleIcon />
                    </div>

                    <div className="leftbar-user-details">
                        <p>
                            Username <br />
                            <span className="leftbar-user-profile-name">User_Name</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;

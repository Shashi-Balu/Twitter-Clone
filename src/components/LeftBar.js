import React from "react";
import "./LeftBar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function LeftBar() {
    return (
        <div className="leftbar">
            <div className="twitter-icon leftbar-icons">
                <TwitterIcon />
            </div>
            <div className="leftbar-icons">
                <HomeIcon />
                <p className="leftbar-icon-name">Home</p>
            </div>
            <div className="leftbar-icons">
                <TagIcon />
                <p className="leftbar-icon-name">Explore</p>
            </div>
            <div className="leftbar-icons">
                <BookmarkBorderIcon />
                <p className="leftbar-icon-name">Bookmarks</p>
            </div>
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
    );
}

export default LeftBar;

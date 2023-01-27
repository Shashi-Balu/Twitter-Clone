import React from "react";
import "./LeftBar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function LeftBar() {
    return (
        <div className="leftbar">
            <TwitterIcon />
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
            <button className="leftbar-tweet">Tweet</button>

            <div className="leftbar-profile">
                <img src="" />
                <div className="leftbar-user-details">
                    <p>Username</p>
                    <p>User mail</p>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;

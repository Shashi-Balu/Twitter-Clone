import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "./FeedCard.css";

function FeedCard(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    function handleLikeClick() {
        if (isLiked === true) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }
    }

    function handleSaveClick() {
        if (isSaved === true) {
            setIsSaved(false);
        } else {
            setIsSaved(true);
        }
    }

    return (
        <div className="feed-data-container">
            <div className="feed-card">
                <div className="feed-user-profile">
                    <AccountCircleIcon
                        className="feedcard-user-img"
                        alt={props.name}
                        src={props.image}
                    />
                    <p className="feedcard-user-name">
                        Anonymous User{Math.floor(Math.random() * 1000 + 1)}
                    </p>
                </div>
                <div className="feedcard-tags">
                    {props.tags.map((value) => (
                        <p>#{value}&nbsp; </p>
                    ))}
                </div>
                <p className="feedcard-message">{props.message} x</p>
                <div className="feedcard-icons">
                    <div className="feedcard-like" onClick={handleLikeClick}>
                        {isLiked ? <ThumbUpIcon /> : <ThumbUpOffAltOutlinedIcon />}
                        <p>{isLiked ? props.likeCount + 1 : props.likeCount}</p>
                    </div>
                    <div className="feedcard-save" onClick={handleSaveClick}>
                        {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;

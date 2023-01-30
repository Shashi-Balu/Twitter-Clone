import React, { useEffect, useState } from "react";
import FeedCard from "./FeedCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import "./Feed.css";

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState([]);
    const [imageUrl, setImageUrl] = useState("");

    async function feedData() {
        const response = await (await fetch("https://dummyjson.com/posts")).json();
        setPosts(response.posts);
        console.log(response.posts);
    }

    function addFeed() {
        const userFeed = [...posts];
        userFeed.unshift({
            tags: ["NewPost", "Trending"],
            body: input,
            image: imageUrl,
        });

        setPosts(userFeed);
        setInput("");
        setImageUrl("");
    }
    useEffect(() => {
        feedData();
    }, []);

    return (
        <div className="feed-input-container">
            <div className="feed-input-box">
                <h3 className="feed-home">Home</h3>

                <div className="input-feed">
                    <AccountCircleIcon className="feed-user-img" />
                    <div className="input-box">
                        <input
                            type="text"
                            className="feed-input-text"
                            placeholder="What's Happening?"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                        />
                        <input
                            type="text"
                            className="feed-input-text"
                            placeholder="Insert url of Photo..."
                            value={imageUrl}
                            onChange={(event) => setImageUrl(event.target.value)}
                        />
                    </div>
                </div>
                <div className="feed-upload">
                    <button className="feed-tweet" onClick={addFeed}>
                        Tweet
                    </button>
                </div>
            </div>

            <div className="feed-data-container">
                {posts?.map((value) => (
                    <FeedCard
                        image={value.image}
                        name={value.userId}
                        tags={value.tags}
                        message={value.body}
                        likeCount={value.reactions}
                    />
                ))}
            </div>
        </div>
    );
}

export default Feed;

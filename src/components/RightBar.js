import React, { useEffect, useState } from "react";
import "./RightBar.css";

function RightBar() {
    const [quotes, setQuote] = useState([]);

    async function quoteData() {
        const response = await (await fetch("https://dummyjson.com/quotes")).json();
        setQuote(response.quotes);
        console.log(response.quotes);
    }
    const randomQuote = Math.floor(Math.random() * quotes.length);
    const quoteToDisplay = quotes[randomQuote];
    console.log(quoteToDisplay);
    useEffect(() => {
        quoteData();
    }, []);

    return (
        <div className="rightbar-box">
            <h3 className="rightbar-h3">Random Quote</h3>
            <p className="news">
                xx xxx xxxxx xxx x xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxx xxxx xxx xxx
            </p>
        </div>
    );
}

export default RightBar;

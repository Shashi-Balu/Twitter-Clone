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
    const quoteToDisplay = quotes?.map((value) => value.quote)[randomQuote];
    const author = quotes?.map((value) => value.author)[randomQuote];
    console.log(quoteToDisplay);

    useEffect(() => {
        quoteData();
    }, []);
    return (
        <div>
            <div className="rightbar-box">
                <h3 className="rightbar-h3">Random Quote</h3>
                <p className="news">
                    <p>"{quoteToDisplay}"</p>
                    <p>~{author}</p>
                </p>
            </div>
        </div>
    );
}

export default RightBar;

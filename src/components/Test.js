import React, { useState } from "react";
import Child from "./Child";

function Test() {
    const name = "Fairytale";

    let [count, setCount] = useState(0);

    let counter = () => {
        count = count + 1;
        setCount(count);
    };

    return (
        <div>
            <h1>Test Component</h1>
            <h1>Test Component</h1>
            <h1>Test Component</h1>
            <h3>{name}</h3>
            {/* <Child map={map} /> */}

            <button onClick={counter}>Clicked {count} times</button>
        </div>
    );
}

export default Test;

//Functional Component
// import React from "react";

// function Test() {
//     return <div>Test</div>;
// }

// export default Test;

// //Class Component
// import React, { Component } from "react";

// export class Test extends Component {
//     constructor() {
//         super();
//     }
//     render() {
//         return <div>Test</div>;
//     }
// }

// export default Test;

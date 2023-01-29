import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            {/* <Home /> */}
            {/* <Test /> */}
            <LeftBar />
            <Feed />
            <RightBar />
        </div>
    );
}

export default App;

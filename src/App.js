import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks";

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            {/* <Home /> */}
            {/* <Test /> */}
            <BrowserRouter>
                <LeftBar />
                <Routes>
                    <Route exact path="/" element={<Feed />} />
                </Routes>
                <Routes>
                    <Route exact path="/bookmarks" element={<Bookmarks />} />
                </Routes>

                <RightBar />
            </BrowserRouter>
        </div>
    );
}

export default App;

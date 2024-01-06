import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import TodoList from "./pages/TodoList";
import About from "./pages/About";

function App() {
    return (
        <div className="app">
            <div className="app__navbar">
                <Navbar />
            </div>
            <div className="app__content">
                <Routes>
                    <Route exact path="/" Component={HomePage} />
                    <Route exact path="/todo" Component={TodoList} />
                    <Route path="/about" Component={About} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

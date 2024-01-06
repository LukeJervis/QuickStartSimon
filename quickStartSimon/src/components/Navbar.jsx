import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link to="/" className="navbar__link">
                        Home
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link to="/todo" className="navbar__link">
                        Todo List
                    </Link>
                </li>
                {/* <li className="navbar__item">
                    <Link to="/idle" className="navbar__link">
                        Idle
                    </Link>
                </li> */}
                <li className="navbar__item">
                    <Link to="/about" className="navbar__link">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

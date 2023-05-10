import { Link, NavLink } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink >
                Home
            </NavLink>
            <NavLink >
                Resume
            </NavLink>            
            <NavLink >
                Projects
            </NavLink>
            <Link>Github</Link>
            <Link>LinkedIn</Link>
        </nav>
    )
};

export default Navbar;
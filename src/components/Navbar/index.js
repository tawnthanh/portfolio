import { NavLink } from "react-router-dom"
import './Navbar.css';
import githubIcon from '../../images/github-logo-face.png';
import linkedinIcon from '../../images/linkedin.png';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/portfolio'>
                About
            </NavLink>
            <NavLink to='/resume'>
                Resume
            </NavLink>            
            <NavLink to='/projects'>
                Projects
            </NavLink>
            <a href="https://github.com/tawnthanh" target="_blank">
                <img src={githubIcon} alt='github icon' className='external_link'/>
            </a>
            <a href="https://linkedin.com/in/tawnthanh" target='_blank'>
                <img src={linkedinIcon} alt='linkedin icon' className='external_link'/>
            </a>
        </nav>
    )
};

export default Navbar;
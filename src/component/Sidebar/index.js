import { Link, NavLink } from 'react-router-dom';
import './style.scss';
import LOGO from  '../../assets/images/LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faHome,  faUser, faCog, faBank, faLaptopCode, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LOGO} alt="logo"/>
            </Link>
        <nav>
            <NavLink  
                to="/" 
                excat="true" 
                className={({isActive}) => 'list-group-item' + (isActive ?' demo' : '')}>
                    <FontAwesomeIcon 
                    icon={faHome}
                    color="#8fa27c"
                    className='icon'>
                    </FontAwesomeIcon>
            </NavLink>

            <NavLink  
                to="/about" 
                className={({isActive}) => 'about-link' + (isActive ?' demo' : '')}
                excat="true">
                <FontAwesomeIcon 
                icon={faUser}
                color="#8fa27c"
                className='icon'>
                </FontAwesomeIcon>
                </NavLink>

                <NavLink  to="/skills" className="skill-link" excat='true' activeclassname='active'>
                <FontAwesomeIcon 
                icon={faCog}
                color="#8fa27c"
                className='icon'>
                </FontAwesomeIcon>
                </NavLink>

                <NavLink  to="/degree" className="study-link" excat='true' activeclassname='active'>
                <FontAwesomeIcon 
                icon={faBank}
                color="#8fa27c"
                className='icon'>
                </FontAwesomeIcon>
                </NavLink>

                <NavLink  to="/work" className="work-link" excat='true' activeclassname='active'>
                <FontAwesomeIcon 
                icon={faLaptopCode}
                color="#8fa27c"
                className='icon'>
                </FontAwesomeIcon>
                </NavLink>

                <NavLink  to="/contact" className="contact-link" excat='true' activeclassname='active'>
                <FontAwesomeIcon 
                icon={faEnvelope}
                color="#8fa27c"
                className='icon'>
                </FontAwesomeIcon>
            </NavLink>  
        </nav>
        <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sai-h-28823a170/">
                <FontAwesomeIcon 
                className='icon' 
                icon={faLinkedin}>
                </FontAwesomeIcon>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/snadi043">
                <FontAwesomeIcon 
                icon={faGithub} 
                className='icon'>
                </FontAwesomeIcon>
            </a>
        </li>

        </ul>
        </div>
    )
}
export default SideBar;
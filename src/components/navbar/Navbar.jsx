import './Navbar.css';
import {Link} from "react-router-dom";
import {styles} from "../../styles/Styles";

const Navbar = () => {
    return (
        <div style={styles.LabelContainer}>
            <li style={styles.Label}>
                <Link to="/"> About Me</Link>
            </li>
            <li style={styles.Label}>
                <Link to="/projects">Some Other Projects</Link>
            </li>
            <li style={styles.Label}>
                <Link to="/contact">Contact Me</Link>
            </li>
        </div>
    );
}

export default Navbar;
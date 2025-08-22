import { Link } from "react-router";
import StarIcon from '@mui/icons-material/Star';

const Navbar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li style={{float: 'left', alignItems: 'center'}}><Link to="/"><StarIcon /><StarIcon /><StarIcon /></Link></li>
                <div id="navbar-links">
                    <li><Link to="/recipe-list">Recipe List</Link></li>
                    <li><Link to="/recipe-book">Recipe Book</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
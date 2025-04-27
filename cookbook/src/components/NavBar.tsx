import { Link } from "react-router";
import StarIcon from '@mui/icons-material/Star';

const Navbar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li style={{float: 'left', alignItems: 'center'}}><a><StarIcon /><StarIcon /><StarIcon /></a></li>
                <li><Link to="/recipe-book">Recipe Book</Link></li>
                <li><Link to="/recipe-list">Recipe List</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
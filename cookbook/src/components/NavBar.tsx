import { Link } from "react-router";

const NavBar = () => {

    return (
        <nav id="navbar">
            <ul>
                <li style={{float: 'left'}}>LOGO</li>
                <li><Link to="/recipe-book">Recipe Book</Link></li>
                <li><Link to="/recipe-list">Recipe List</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
            <br />
        </nav>
    );
};

export default NavBar;
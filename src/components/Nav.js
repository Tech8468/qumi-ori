import {Link} from "react-router-dom";
import Logo from "./img/qumi_logo_2.png";
function Nav(){
    return (
        <div className="navbar">
                <img src={Logo} alt="" />
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    )
};
export default Nav;
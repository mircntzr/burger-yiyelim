import BurgerLogo from "../../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <Link to="/" className="logo">
          <img src={BurgerLogo} alt="Burger Logo" />
        </Link>
      </div>
      <div className="main-link">
        <Link to="/">Anasayfa</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/About">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>
    </div>
  );
}

export default Navbar;

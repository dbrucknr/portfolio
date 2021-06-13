import '../css/header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="topnav">
          <a href="#news">Resume</a>
          <a href="#projects">Projects</a>
          <Link className="active" to="/" replace={true}>Home</Link>
          <a href="#contact">Contact</a>
          <Link to="/about" replace={true}>About Me</Link>
      </div>
    );
  }
  
  export default Header;
  
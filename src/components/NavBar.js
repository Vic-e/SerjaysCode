import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="Nav">
      <ul className="Nav"> 
        <li><Link to="/" style={{ textDecoration: 'none' }}> Home</Link></li>
        <li><Link to="/hire" style={{ textDecoration: 'none' }}>Book us</Link></li>
        <li><Link to="/sitters" style={{ textDecoration: 'none' }}>Sitters</Link></li>
        <li><Link to="/rates" style={{ textDecoration: 'none' }}>Rates</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link></li>        
      </ul>
    </nav>
  );
}

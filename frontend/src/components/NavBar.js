import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="Nav">
      <ul className="Nav"> 
        <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}> Home</Link></li>
        <li><Link to="/bookus" style={{ textDecoration: 'none', color: 'black' }}>Book us</Link></li>
        <li><Link to="/sitters" style={{ textDecoration: 'none', color: 'black' }}>Sitters</Link></li>
        <li><Link to="/rates" style={{ textDecoration: 'none', color: 'black' }}>Rates</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link></li>        
      </ul>
    </nav>
  );
}

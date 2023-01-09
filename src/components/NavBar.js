import { Link } from "react-router-dom";
import { Row, Col} from 'react-bootstrap';

export default function NavBar() {
  return (
    <header>
      <Row className="pt-3">
        <Col lg="4">
        <div style={{ fontSize: '30px', fontWidth: 'bold'}}>Nanny Network</div>
        </Col>
        <Col lg="8">
        <nav>
        <ul> 
          <li><Link to="/" style={{ textDecoration: 'none'}}> Home</Link></li>
          <li><Link to="/bookus" style={{ textDecoration: 'none'}}>Book us</Link></li>
          <li><Link to="/sitters" style={{ textDecoration: 'none'}}>Sitters</Link></li>
          <li><Link to="/rates" style={{ textDecoration: 'none' }}>Rates</Link></li>
          <li><Link to="/contact" style={{ textDecoration: 'none'}}>Contact Us</Link></li>
          <li><Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link></li>        
        </ul>
      </nav>
        </Col>
     
      </Row>
    </header>
  );
}

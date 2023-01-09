import React from 'react'
import { Row, Col} from 'react-bootstrap';

export default function Footer () {
    return (
        <>
        <footer>
        <main>
            <Row className="pt-3">
                <Col>
                <h3>Nanny Network</h3>
                <h5>Copyright 2023</h5>
                </Col>
                <Col style={{textAlign: 'right'}}>
                    <h5>About Us</h5>
                    <h5>Contact Us</h5>
                </Col>
            </Row>
        </main>
        </footer>
        </>
    )
}
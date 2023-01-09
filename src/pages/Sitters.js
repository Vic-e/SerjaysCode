import React from "react";
import SitterList from "../components/SitterList";
import { Row} from 'react-bootstrap';

export default function Sitter() {
  return (
    <main className="pt-3">
      <h1>Sitters</h1> 
      <Row className="pt-4">
        <SitterList />
      </Row>
    </main>
  );
}

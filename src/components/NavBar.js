import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

export default function NavBar({ search }) {
  const [word, setWord] = useState("");
  const onSearch = (a) => {
    search(a);
  };
  return (
    <Navbar expand="lg" style={{ background: "#5367ff" }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          3Movie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2 mx-3"
              aria-label="Search"
              onChange={(e) => {
                search(e.target.value);
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

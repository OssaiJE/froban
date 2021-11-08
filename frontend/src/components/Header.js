import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      {/* Try sticky=top if fixed=top doesn't work */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">Froban Stores</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/cart">
                {" "}
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="/signin">
                <i className="fas fa-user"></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

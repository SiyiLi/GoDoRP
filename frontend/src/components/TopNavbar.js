import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const TopNavbar = () => {
  return (
    <Navbar expand="false">
      <Container>
        <Navbar.Brand>
          <a href="/">GoDoRP</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="https://github.com/SiyiLi/GoDoRP">GITHUB</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;

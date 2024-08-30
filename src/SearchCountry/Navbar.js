

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CountryNavbar() {
  const navStyles = {
    backgroundColor: '#343a40',
    padding: '10px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    height:"30px"
  };

  const linkStyles = {
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    margin: '0 15px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyles = {
    color: '#f0ad4e', 
  };

  return (
    <Navbar style={navStyles} expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand as={Link} to="/Country" style={{ color: 'white', fontSize: '22px', fontWeight: '700' }}>
          
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            style={linkStyles}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyles.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyles.color)}
          >
            Home
          </Nav.Link>
          {/* <Nav.Link
            as={Link}
            to="/wheather"
            style={linkStyles}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyles.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyles.color)}
          >
            Weather
          </Nav.Link> */}
          <Nav.Link
            as={Link}
            to="/receipe"
            style={linkStyles}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyles.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyles.color)}
          >
            Recipe
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/favorites"
            style={linkStyles}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyles.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyles.color)}
          >
            Favorites
          </Nav.Link>


          <Nav.Link
            as={Link}
            to="/AboutScreen"
            style={linkStyles}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyles.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyles.color)}
          >
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CountryNavbar;

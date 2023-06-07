import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { FaUser, FaDownload, FaTag, FaUserPlus, FaPhone } from 'react-icons/fa';
import "./css/Nav.css";

function Nav1() {
  return (
    <>
      <Navbar bg="body-tertiary" expand="lg" className="border-bottom border-bottom-3">
        <div className="container-fluid">
          <Navbar.Brand href="#" className="brand px-5">START YOUR TOUR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav ml-auto align-items-center">
              <Nav.Link href="/body" active><FaPhone /><span className="link-text">body</span></Nav.Link>
              <Nav.Link href="/map"><FaUserPlus /><span className="link-text">map</span></Nav.Link>
              <Nav.Link href="/editprofile"><FaTag /><span className="link-text">editprofile</span></Nav.Link>
              <Nav.Link href="/blog"><FaDownload /><span className="link-text">blog</span></Nav.Link>
              <Nav.Link href="/bookingdetails"><FaUser /><span className="link-text">bookingdetails</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Nav1;

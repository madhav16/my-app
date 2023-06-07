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
              <Nav.Link href="#" active><FaPhone /><span className="link-text">9999999999</span></Nav.Link>
              <Nav.Link href="#"><FaUserPlus /><span className="link-text">TRAVEL AGENT JOIN US</span></Nav.Link>
              <Nav.Link href="#"><FaTag /><span className="link-text">OFFERS</span></Nav.Link>
              <Nav.Link href="#"><FaDownload /><span className="link-text">DOWNLOAD APP</span></Nav.Link>
              <Nav.Link href="#"><FaUser /><span className="link-text">USERNAME</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Nav1;

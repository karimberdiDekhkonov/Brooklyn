import React, { useRef } from "react";
import './Header.scss'
import brooklyn from '../../brooklyn.jpg'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

function Header(){

    return <>
        <Navbar className="header-container" expand="lg">
          <Container>
            <Navbar.Brand>
              <div className="header-first">
                <img className="logo" src={brooklyn} alt="brooklyn"/>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle className="menu-bar" />
            <Navbar.Collapse className="bar" id="basic-navbar-nav">
              <Nav className="me-auto">
                <ScrollLink to="students" spy={true} smooth={true} offset={-180} duration={500} className="sc-link header-link" >O'quvchilar</ScrollLink>
                <ScrollLink to="contact" spy={true} smooth={true} offset={-200} duration={500} className="sc-link header-link" >Bog'lanish</ScrollLink>
                <Nav.Link href="https://t.me/brooklynacademy1" className="header-link" >Yangiliklar</Nav.Link>
                <ScrollLink to="footer" spy={true} smooth={true} offset={-100} duration={500} className="sc-link header-link" >Oferta</ScrollLink>
                <Nav.Link className="for-phone" href="http://t.me/brooklynadminbot">
                <span className="me-2">Darsga yozilish</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </Nav.Link>
               
                <Nav.Link className="header-btn" href="http://t.me/brooklynadminbot">
                  <span className="me-2">Darsga yozilish</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </Nav.Link>  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
}

export default Header;
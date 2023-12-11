import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from "react-bootstrap";

const Header = ()=>{
    return (
        <div>
       
        <Navbar expand='md' style={{ position :"relative",zIndex:"1",paddingRight:"0", backgroundColor:'#363062'}} variant="dark"  >
          
        <Navbar.Brand style={{ fontSize:"3rem"}} className=" logo ms-5" href="index.js">sizzle&savor</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll" className='me-2' />
        <Navbar.Collapse className='me-auto' id="navbarScroll">
            
           <Nav style={{fontSize:"1.2rem"}} className="ms-auto me-3 " navbarScroll>
             <Nav.Link className='p-3 navi' href="#menu">Menu</Nav.Link>
             <Nav.Link className="p-3 navi me-5" href="#cart"> Cart</Nav.Link>
           </Nav>
           </Navbar.Collapse>
        
        </Navbar>
        </div>
    )
}
export default Header;
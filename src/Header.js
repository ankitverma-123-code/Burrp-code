import React from "react";
import logo from "./logo.png";
import cartlogo from "./cartlogo.png";
import searchlogo from "./searchlogo.png";
import profilelogo from "./profilelogo.png";
import "./Header.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {Navbar,NavDropdown,Nav,Form ,FormControl,Button} from 'react-bootstrap';
//d-flex flex-row justify-content-center

function Header() { 
  return (
     <div className="overall-container">
      <div className="header">

      <Navbar style={{padding:"0rem 1rem"}} expand="lg">
            <Navbar.Brand href="#home"><img alt="BURPP" src={logo}></img></Navbar.Brand>
   
            <div className="ml-0">
                <Nav className="ml-xl-auto ml-lg-auto ml-md-0 ml-sm-0">
                <NavDropdown className="NavDropdown " title="Mumbai,MH" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </div>
                <div className="ml-xl-auto ml-lg-auto ml-md-0 ml-sm-0 ">
                <Form inline className=" ">
                  <FormControl   style={{height: '23px',maxWidth:"200px"}}  type="text" placeholder="Search" className=" form-search py-0" />
                   <Button  className="btn-sm py-0 w-20" variant="outline-danger">in All</Button>
                  </Form>
                  </div>
              <div className="ml-xl-auto ml-lg-auto ml-md-0 ml-sm-0">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link className=" Navlinks " href="#home"><img alt="cart Logo" src={searchlogo} className="navbarImages"></img>search</Nav.Link>
                <Nav.Link className=" Navlinks " href="#home"><img alt="cart Logo" src={cartlogo} className="navbarImages"></img>Cart</Nav.Link>
                <Nav.Link className="Navlinks" href="#home"><img alt="cart Logo" src={profilelogo} className="navbarImages"></img>Log in/sign up</Nav.Link>
                
                
            </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
       <div className="bg-container ">
        <div >
        
            <div className="Bottom-container">
          <h1 className="blogpost">
             BlogPost 
          </h1>
         <div className="content-img">

          {/* <h1 className="img-heading">Food And Work</h1> */}
        </div>
        
        <div className="post d-flex flex-column justify-content-center">
          <p className="blog-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum. </p>{" "}
        </div>{" "}
            </div>
         
    </div>{" "}
  </div>
</div>
);
}

export default Header;

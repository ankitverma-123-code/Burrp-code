import React from "react";
import logo from "./logo.png";
import cartlogo from "./cartlogo.png";
import searchlogo from "./searchlogo.png";
import profilelogo from "./profilelogo.png";
import cartsign from "./images/cartimg.png";
import "./Header.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
                                                
import { Link } from "react-router-dom";
import {Navbar,NavDropdown,Nav,Form ,Image,FormControl,Button,Dropdown} from 'react-bootstrap';
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

       <div className="body-container p-3 mx-4 mt-2">
         <div className="row ">
           <div className="col-8 m-2">
             <div className="cart d-flex flex-row justify-content-start">
             <Image  src={cartsign} fluid />
             <p className="p-auto">Your order items </p>
             </div>

              <div className="m-auto">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                  </a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
              </div>
              <div>
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
              </div>
              <div>
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
              </div>
           
         

         </div>
        </div>  
       </div>
       
  
</div>
);
}

export default Header;

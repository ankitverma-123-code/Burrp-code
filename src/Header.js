import {React,useState} from "react";
import logo from "./logo.png";
import cartlogo from "./cartlogo.png";
import searchlogo from "./searchlogo.png";
import profilelogo from "./profilelogo.png";
import cartsign from "./images/cartimg.png";
import imgforcart from "./images/sbarro.png";
// import plus from "./images/plus.png";
// import minus from "./images/minus.png";
import paytm from "./images/paytm.png";
import paypal from "./images/paypal.png";
import payu from "./images/payu.png";
import razorpay from "./images/razorpay.png";

import "./Header.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
                                                
import { Link } from "react-router-dom";
import {Navbar,NavDropdown,Nav,Form ,Image,FormControl,Button,Collapse,Dropdown} from 'react-bootstrap';
//d-flex flex-row justify-content-center

function VEGBOX() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <p
    
    aria-controls="example-collapse-text"
    aria-expanded={open}
    onClick={() => setOpen(!open)}
     >
     VEGBOX
     <i class="fa fa-angle-down fa-lg"></i>
     </p> 
      
      <Collapse in={open}>
        <div id="example-collapse-text">
          <p>1.Roti</p>
          <p>2.Chicken</p>
          <p>3.aalo</p>
          <p>4.ad</p>
        </div>
      </Collapse>
    </>
  );
}


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
          <div className="col-12 col-lg-8">

             <div className="cart">
             <Image  src={cartsign} fluid />
             <p className="cart-text">Your order items </p>
             </div>

              <div className="content_div mt-2 d-flex flex-row ">
                  <div>
                  <Image  src={imgforcart} fluid />
                  </div>
                  <div className="mt-auto ml-auto">
                     <VEGBOX/>
                  </div>
                  <div className="d-flex flex-row mt-auto ml-auto ">
                    <p >Units:2</p>
                    <i class="m-1 fa fa-plus-circle"></i>
                    <i class="m-1 fa fa-minus-circle"></i>
                  </div>
                  <div className="mt-auto ml-auto">
                    <p>400Rs.</p>
                  </div>
                 
              </div>
              <div className="content_div mt-2 d-flex flex-row ">
                  <div>
                  <Image  src={imgforcart} fluid />
                  </div>
                  <div className="mt-auto ml-auto">
                    <VEGBOX/>
                  </div>
                  <div className="d-flex flex-row mt-auto ml-auto ">
                    <p >Units:2</p>
                    <i class="m-1 fa fa-plus-circle"></i>
                    <i class="m-1 fa fa-minus-circle"></i>
                  </div>
                  <div className="mt-auto ml-auto">
                    <p>400Rs.</p>
                  </div>
                 
              </div>
              <div className="content_div mt-2 d-flex flex-row ">
                  <div>
                  <Image  src={imgforcart} fluid />
                  </div>
                  <div className="mt-auto ml-auto">
                    <VEGBOX/>
                  </div>
                  <div className="d-flex flex-row mt-auto ml-auto ">
                    <p >Units:2</p>
                    <i class="m-1 fa fa-plus-circle"></i>
                    <i class="m-1 fa fa-minus-circle"></i>
                  </div>
                  <div className="mt-auto ml-auto">
                    <p>400Rs.</p>
                  </div>
                 
              </div>


         </div>

          <div className="col-12 col-lg-4">
                     <div className="payment-dropdown ">
                        <a class="dropdown-btn text-decoration-none dropdown-toggle" href="#" role="link" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          payments method
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>  

                        <div className="payment-gateway">
                          <p>Payment-Gateway</p>
                        </div>
                        <div className="payment-gateway">
                          <Link to="/">
                           <Image src={paytm} fluid/>
                          </Link> 
                        </div>
                        <div className="payment-gateway">
                          <Link to="/">
                            <Image src={paypal} fluid/>
                          </Link>
                        </div>
                        <div className="payment-gateway">
                          <Link to="/">
                           <Image src={payu} fluid/>
                          </Link>
                        </div>
                        <div className="payment-gateway">
                         <Link to="/">
                          <Image src={razorpay} fluid/>
                         </Link>
                         
                        </div>
                      <div className="payment-down-btn">
                        <button type="button" class="btn2" data-toggle="button" aria-pressed="false" autocomplete="off">
                          continue
                        </button>
                       </div> 

                
          </div>

        </div>  
       </div>
       
  
</div>
);
}

export default Header;

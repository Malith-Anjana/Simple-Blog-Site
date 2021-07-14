import React from "react";
import "./login.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="container">
      <div class="d-flex justify-content-center" style={{marginTop:"7%"}}>

          <MDBCard>
            <div className="header pt-2 night-fade-gradient lighten-3">
              <MDBRow className="d-flex justify-content-center">
                <h2 className="white-text mb-3 text-center pt-3 font-weight-bold">
                 Login
                </h2>
              </MDBRow>
              <MDBRow className="d-flex justify-content-center">
                <h5 className="white-text mb-3 text-center pt-3 font-weight-bold">
                React & Node Blog
                </h5>
              </MDBRow>
            
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <MDBRow className="d-flex align-items-center mb-4 mt-5">
                <MDBCol md="5" className="d-flex align-items-start">
                  <div>
                    <button
                      type="button"
                      className="btn btn-info-color"
                    >
                      Login
                    </button>
                  </div>
                </MDBCol>
                <MDBCol md="7" className="d-flex justify-content-end">
                  <p className="font-small grey-text mt-3">
                    Don't have an account?
                    <br/>
                    <Link className="nav-link text-center" to="/register" style={{textDecoration:"none",fontWeight:"bold", fontSize:"16px"}}>
                  Signup
                </Link>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>



     
      </div>
    </div>
  );
}

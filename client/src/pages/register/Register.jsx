import React from "react";
import "./signup.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from "react-router-dom";


export default function Register() {
  return (
    <div className="container">
      <div class="d-flex justify-content-center" style={{marginTop:"7%"}}>

          <MDBCard>
            <div className="header pt-2 near-moon-gradient lighten-3">
              <MDBRow className="d-flex justify-content-center">
                <h2 className="white-text mb-3 text-center pt-3 font-weight-bold">
                  SignUp
                </h2>
              </MDBRow>
        
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Username" group type="text" validate />
              <MDBInput label="Email" group type="text" validate />

              <MDBInput
                label="Password"
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
                      className="btn btn-info"
                    >
                      SignUp
                    </button>
                  </div>
                </MDBCol>
                <MDBCol md="7" className="d-flex justify-content-end">
                  <p className="font-small grey-text mt-3">
                    Already have an account?
                    <br/>
                    <Link className="nav-link text-center" to="/login" style={{textDecoration:"none",fontWeight:"bold", fontSize:"16px"}}>
                  Login
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

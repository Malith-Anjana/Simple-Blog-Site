import React from "react";
import {MDBIcon } from 'mdbreact';
export default function Sidebar() {
  return (
    <div className="p-3 overflow">
      <div class="card" style={{ width: "21rem"}}>
      <hr className="mx-5 my-1 mt-3"/>
        <h5 className="text-center my-1" style={{fontFamily:"'Poppins', sans-serif", fontWeight:"bold"}}>ABOUT ME</h5>
        <hr className="mx-5 my-1"/>
        <img
          src="https://mdbootstrap.com/img/new/standard/city/062.jpg"
          class="card-img-top p-3"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <br/>
        </div>
        <hr className="mx-5 my-1"/>
        <h5 className="text-center my-1" style={{fontFamily:"'Poppins', sans-serif", fontWeight:"bold"}}>CATEGORIES</h5>
        <hr className="mx-5 my-1"/>
       
        <div class="card-body mx-3">
        <span class="badge rounded-pill bg-primary text-dark p-2 m-2">Life</span>
        <span class="badge rounded-pill bg-primary text-dark p-2 m-2">Style</span>
        <span class="badge rounded-pill bg-primary text-dark p-2 m-2">Tech</span>
        <span class="badge rounded-pill bg-primary text-dark p-2 m-2">Music</span>
        <span class="badge rounded-pill bg-primary text-dark p-2 m-2">Sport</span>
        <span class="badge rounded-pill bg-primary text-dark p-2 m-2">Cinema</span>
         
        </div>
        <hr className="mx-5 my-2"/>
        <h5 className="text-center my-1" style={{fontFamily:"'Poppins', sans-serif", fontWeight:"bold"}}>FOLLOW US</h5>
        <hr className="mx-5 my-1"/>

        <div class="row">
  <div class="col-md-12 text-center mb-5 mt-3">

        <i class="fab fa-facebook p-1 fa-2x"></i>
        <i class="fab fa-twitter p-1 fa-2x"></i>
        <i class="fab fa-pinterest p-1 fa-2x"></i>
        <i class="fab fa-instagram p-1 fa-2x"></i>
       
        </div>
        </div>
      </div>
    </div>
  );
}

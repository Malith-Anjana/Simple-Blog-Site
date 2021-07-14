import React from "react";
import Logo from "./images/logo1-Black.png";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src={Logo} height="45" alt="logo" loading="lazy" />
            </a>

            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 h1"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/write">
                  WRITE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {/* {user?"LOGOUT": null} */}
                  {user && "LOGOUT"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
           
            <a
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
            >
              <i className="fas fa-search fa-2x"></i>
            </a>

            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              {user ? (
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="rounded-circle"
                  height="40"
                  alt=""
                  loading="lazy"
                />
              ): (
                <>
                <Link className="nav-link" to="/login" style={{textDecoration:"none",fontWeight:"bold", fontSize:"20px"}}>
                  LOGIN
                </Link>

                <Link className="nav-link" to="/register" style={{textDecoration:"none",fontWeight:"bold", fontSize:"20px"}}>
                  SIGNUP
                </Link>
                </>

              )
              }
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

import { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import styles from "./Navbar.module.css";

function NavbarComponent() {
  let isLoggedIn;
  useEffect(() => {
    isLoggedIn = localStorage.getItem("token");
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className="nav-background  py-2 px-5"
        sticky="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href="/" className="mx-0">
          <img
            src="/images/logo.svg"
            alt="logo"
            className={`img-fluid py-0 my-0 ${styles.logo}`}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.mlAuto}`}>
            <Nav.Link
              href="/"
              className="font-demi font-17 px-3 navbar-item
                text-primaryColor text-center"
            >
              Company
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
            >
              Contact Us
            </Nav.Link>
            {isLoggedIn ? (
              <NavDropdown
                eventKey={1}
                title={
                  <div className="pull-left hidden-mobile">
                    <img
                      className="thumbnail-image text-center"
                      src="/images/profile_avatar.png"
                      alt="user pic"
                      width="30"
                      height="30"
                      className="mr-1"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <div className="font-demi text-primaryColor">
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown
                title={
                  <div className="pull-left">
                    <img
                      className="thumbnail-image"
                      src="/images/profile_avatar.png"
                      alt="user pic"
                      width="30"
                      height="30"
                      className="mr-5"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link href="/auth/login">
                    <div className="font-demi text-primaryColor">
                      <i className="fas fa-sign-in-alt mr-2"></i>
                      &nbsp;Login
                    </div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/auth/signup">
                    <div className="font-demi text-primaryColor">
                      <i className="fas fa-user-circle mr-2"></i>
                      &nbsp;Signup
                    </div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

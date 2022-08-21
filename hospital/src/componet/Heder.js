import React from "react";

function Heder(props) {
  return (
    <div>
      <div classname="main-header">
        <div id="topbar" classname="d-flex align-items-center fixed-top">
          <div classname="container d-flex justify-content-between">
            <div classname="contact-info d-flex align-items-center">
              <i classname="bi bi-envelope">
                {" "}
                <a href="mailto:contact@example.com">
                  cityhospital@example.com
                </a>
                <i classname="bi bi-phone"> +91 9988776655</i>
              </i>
            </div>
            <i classname="bi bi-envelope">
              <i classname="bi bi-phone">
                <div classname="d-none d-lg-flex social-links align-items-center">
                  <a href="#" classname="twitter">
                    <i classname="bi bi-twitter" />
                  </a>
                  <i classname="bi bi-twitter">
                    <a href="#" classname="facebook">
                      <i classname="bi bi-facebook" />
                    </a>
                    <i classname="bi bi-facebook">
                      <a href="#" classname="instagram">
                        <i classname="bi bi-instagram" />
                      </a>
                      <i classname="bi bi-instagram">
                        <a href="#" classname="linkedin">
                          <i classname="bi bi-linkedin" />
                        </a>
                        <i classname="bi bi-linkedin"></i>
                      </i>
                    </i>
                  </i>
                </div>
                <i classname="bi bi-twitter">
                  <i classname="bi bi-facebook">
                    <i classname="bi bi-instagram">
                      <i classname="bi bi-linkedin"></i>
                    </i>
                  </i>
                </i>
              </i>
            </i>
          </div>
          <i classname="bi bi-envelope">
            <i classname="bi bi-phone">
              <i classname="bi bi-twitter">
                <i classname="bi bi-facebook">
                  <i classname="bi bi-instagram">
                    <i classname="bi bi-linkedin"></i>
                  </i>
                </i>
              </i>
            </i>
          </i>
        </div>
        <i classname="bi bi-envelope">
          <i classname="bi bi-phone">
            <i classname="bi bi-twitter">
              <i classname="bi bi-facebook">
                <i classname="bi bi-instagram">
                  <i classname="bi bi-linkedin">
                    <header id="header" classname="fixed-top">
                      <div classname="container d-flex align-items-center">
                        <div classname="logo">
                          <a href="index.html">
                            <h1 classname="logo me-auto">City</h1>
                            <br />
                            <h2 classname="logo-tiny-text me-auto">
                              Multispeciality Hospital
                            </h2>
                          </a>
                        </div>
                        <nav
                          id="navbar"
                          classname="navbar order-last order-lg-0"
                        >
                          <ul>
                            <li>
                              <navlink classname="nav-link scrollto" to='{"/"}'>
                                Home
                              </navlink>
                            </li>
                            <li>
                              <navlink
                                classname="nav-link scrollto"
                                to='{"/Departments"}'
                              >
                                Departments
                              </navlink>
                            </li>
                            <li>
                              <navlink
                                classname="nav-link scrollto"
                                to='{"/Doctors"}'
                              >
                                Doctors
                              </navlink>
                            </li>
                            <li>
                              <navlink
                                classname="nav-link scrollto "
                                to='{"/About"}'
                              >
                                About
                              </navlink>
                            </li>
                            <li>
                              <navlink
                                classname="nav-link scrollto"
                                to='{"/Contact"}'
                              >
                                Contact
                              </navlink>
                            </li>
                          </ul>
                          <i classname="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                        <i classname="bi bi-list mobile-nav-toggle">
                          <navlink
                            to='{"/Appointment"}'
                            classname="appointment-btn scrollto"
                          >
                            <span classname="d-none d-md-inline">Make an</span>
                            Appointment
                          </navlink>
                          <a href="#" classname="appointment-btn scrollto">
                            <span classname="d-none d-md-inline">
                              Login/ Signup
                            </span>
                          </a>
                        </i>
                      </div>
                      <i classname="bi bi-list mobile-nav-toggle"></i>
                    </header>
                    <i classname="bi bi-list mobile-nav-toggle"></i>
                  </i>
                </i>
              </i>
            </i>
          </i>
        </i>
      </div>
      <i classname="bi bi-phone">
        <i classname="bi bi-twitter">
          <i classname="bi bi-facebook">
            <i classname="bi bi-instagram">
              <i classname="bi bi-linkedin">
                <i classname="bi bi-list mobile-nav-toggle"></i>
              </i>
            </i>
          </i>
        </i>
      </i>
    </div>
  );
}

export default Heder;

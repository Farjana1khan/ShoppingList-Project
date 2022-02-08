import React, { Component } from 'react'

import "./navbar.css";
export default class Navbar extends Component {
      render() {
            return (
              <div className='navbar-shadow'>
                <header className=" shadow-sm  mb-5 p-3">
                  <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                    <a
                      href="/"
                      className="navbar-brand d-flex w-50 mr-auto text-uppercase"
                    >
                      <span className="logo">Shop</span>Lane
                    </a>

                    <div
                      className="navbar-collapse collapse w-100"
                      id="collapsingNavbar3"
                    >
                      <ul className="navbar-nav w-100 justify-content-center">
                        <li className="nav-item ">
                          <a className="nav-link active" href="/">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="/">
                            Clothing
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="/">
                            Accessories
                          </a>
                        </li>
                      </ul>
                      <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link active" href="/">
                            <i style={{ fontsize: "24px" }} class="fas">
                              &#xf002;
                            </i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="/">
                            <i style={{fontsize:"24px"}} class="fas">
                              &#xf07a;
                            </i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="/">
                            <i style={{ fontsize: "24px" }} class="fas">
                              &#xf2bd;
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </header>
              </div>
            );
      }
}

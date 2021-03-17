import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navi(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Time Travelling App
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Travel" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Travel">
                  Travel
                </Link>
              </li>
              
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navi);
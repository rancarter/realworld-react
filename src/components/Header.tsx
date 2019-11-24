import React from "react";
import { NavLink, Link } from "react-router-dom";

import { ROUTES } from "../constants";
import { useAuth } from "../context/authContext";

function Header() {
  const { isAuthorized } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to={ROUTES.home} className="navbar-brand">
            conduit
          </Link>

          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <NavLink to={ROUTES.home} className="nav-link">
                Home
              </NavLink>
            </li>

            {!isAuthorized && (
              <>
                <li className="nav-item">
                  <NavLink to={ROUTES.login} className="nav-link">
                    Sign in
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={ROUTES.register} className="nav-link">
                    Sign up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { NavLink, Link } from "react-router-dom";

import { ROUTES } from "../constants";
import { useAuth } from "../context/authContext";

const Header: React.FC = () => {
  const { isAuthorized } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to={ROUTES.HOME.PATH} className="navbar-brand">
            conduit
          </Link>

          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <NavLink to={ROUTES.HOME.PATH} className="nav-link">
                Home
              </NavLink>
            </li>

            {!isAuthorized && (
              <>
                <li className="nav-item">
                  <NavLink to={ROUTES.LOGIN.PATH} className="nav-link">
                    Sign in
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={ROUTES.REGISTER.PATH} className="nav-link">
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

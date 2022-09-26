import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = ({ nav }) => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5  text-white py-10 mb-5">
        {nav.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.id}
              end
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              {item.name}
            </NavLink>
          );
        })}
      </header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Header;

import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBarPanle from "./NavBarPanle";

const RouteLayout = () => {
  return (
    <>
      <NavBarPanle />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default React.memo(RouteLayout);

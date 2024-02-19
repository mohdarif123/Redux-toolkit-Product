import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBarPanel = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <>
      <div
        style={{
          background: "gray",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 30px",
        }}
      >
        <div style={{ display: "flex" }}>
          <h2>Redux toolkit</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "15px",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              {" "}
              <h3>Products</h3>
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "15px",
            textDecoration: "none",
          }}
        >
          <Link to="/cart">
            <h3>{`My Bag : ${cartProducts?.length}`}</h3>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(NavBarPanel);

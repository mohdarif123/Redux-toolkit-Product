import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const addCard = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveCard = (id) => {
    dispatch(remove(id));
  };
  const getCards = () => {
    return (
      <>
        {addCard.map((items, index) => {
          return (
            <>
              <div
                key={items.id}
                style={{
                  minWidth: "15%",
                  maxWidth: "15%",
                  margin: "10px 10px",
                  minHeight: "300px",
                  maxHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div>
                  <div>
                    <img
                      src={items.image}
                      alt="img"
                      height={"150px"}
                      width={"150px"}
                    />
                  </div>
                  <div>
                    <h2>{items.category}</h2>
                    <span>INR : {items.price}</span>
                  </div>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <button onClick={() => handleRemoveCard(items.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <h1>Card page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {getCards()}
      </div>
    </>
  );
};

export default React.memo(Cart);

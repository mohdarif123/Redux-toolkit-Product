import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getproducts } from "../store/productSlice";


const Product = () => {
    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch();
    const {data, status } = (state => state.products)
    const url = "https://fakestoreapi.com/products";

    useEffect(() => {
        dispatch(getproducts()); // api call using redux
        // getProductHandler();
    }, []);

    // normal api call method 
    const getProductHandler = () => {
        fetch(url)
            .then((data) => data.json())
            .then((result) => {
                setProductData(result);
            });
    };

    const handleAddProduct = (productData) => {
        dispatch(add(productData))
    }

    if (status === "loading") {
        return <p>loading...</p>
    }

    if (status === "error") {
        return <p>something went wrong...</p>
    }


    const getCards = () => {
        return (
            <>
                {data.map((items, index) => {
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
                                <div
                                    style={{ marginBottom: "12px" }}
                                >
                                    <button onClick={() => handleAddProduct(items)}
                                    >Add to Cart</button>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };
    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                {getCards()}
            </div>
        </React.Fragment>
    );
};

export default React.memo(Product);

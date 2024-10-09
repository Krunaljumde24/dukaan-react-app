import React, { useContext, useEffect, useState } from "react";
import "./shop.css";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import ProductCard from "./Product/ProductCard";
import { ProductContext } from "../../context/ProductContext.jsx";
import axios from "axios";

function Shop() {

  let API_BASE_URI = import.meta.env.VITE_API_BASE_URL;

  const { loggedInUser } = useContext(AuthContext);

  const { searchText } = useContext(ProductContext);

  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URI}/getVegtableDetails`)
      .then((resp) => {
        setVegetables(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredVegetables = vegetables.filter((vege) => {
    return vege.productName.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      {!loggedInUser && <Navigate to="/login" replace={true} />}

      <div className="row">
        <div className="col-2 shop-sidebar">Sidebar</div>
        <div className="col">
          <p className="my-2">
            Showing {filteredVegetables.length} of {vegetables.length}{" "}
            Vegetables
          </p>
          <div id="shop" className="row">
            {filteredVegetables.map((veg) => (
              <ProductCard
                className="col"
                key={veg.productId}
                productId={veg.productId}
                productName={veg.productName}
                productImageUrl={veg.productImageUrl}
                productActualPrice={veg.productActualPrice}
                productDiscountedPrice={veg.productDiscountedPrice}
                productQuantityType={veg.productQuantityType}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;

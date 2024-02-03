import React, { useContext, useState } from "react";
import "./adminPortal.css";
import AuthContext from "../../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import AddProduct from "../ProductMangement/AddProduct";
import SearchProduct from "../ProductMangement/SearchProduct";
function AdminPortal() {
  const { loggedInUser } = useContext(AuthContext);

  const [showAddProd, setShowAddProd] = useState(false);
  const [showSrchProd, setSrchProd] = useState(false);

  let handleBtnClick = (event) => {
    let target = event.target.name;
    switch (target) {
      case "add":
        setShowAddProd(true)
        setSrchProd(false)
        break;
      case "search":
        setShowAddProd(false)
        setSrchProd(true)
        break;

      default:
        break;
    }
  };

  return (
    <div className="adminPortal">
      {loggedInUser === "admin" ? "" : <Navigate to="/login" replace={true} />}

      <div className="container py-3">
        <div className="top">
          <h5>Product Management</h5>
          <button
            type="button"
            name="add"
            className="btn btn-sm btn-success mx-2"
            onClick={(event) => handleBtnClick(event)}
          >
            Add
          </button>
          <button
            type="button"
            name="search"
            className="btn btn-sm btn-info"
            onClick={(event) => handleBtnClick(event)}
          >
            Search
          </button>
        </div>
        <hr />
        <div className="bottom">
          {showAddProd ? <AddProduct /> : ""}
          {showSrchProd ? <SearchProduct /> : ""}
        </div>
      </div>
    </div>
  );
}

export default AdminPortal;

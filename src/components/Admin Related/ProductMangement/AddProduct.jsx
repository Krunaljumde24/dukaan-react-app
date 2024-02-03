import React from "react";
import { useForm } from "react-hook-form";
import "./addProduct.css";
import { addProductToDatabase } from "../../../service/BackEndService";
import toast from "react-hot-toast";

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        addProductToDatabase(data);
        toast.success("Product Added.");
        reset({
          productType: "",
          productName: "",
          productQuantity: "",
          productQuantityType: "",
          productActualPrice: "",
          productDiscountedPrice: "",
        });
      })}
    >
      <div className="row">
        <label
          htmlFor="productType"
          className="col-form-label col-lg-2 col-sm-6"
        >
          Type
        </label>
        <div className="col-lg-3 col-sm-6">
          <select
            {...register("productType", { required: true })}
            id="productType"
            name="productType"
            className="form-select form-select-sm"
          >
            <option value="">Select Type</option>
            <option value="vegetable">Vegetable</option>
            <option value="fruit">Fruit</option>
          </select>
        </div>
      </div>

      <div className="row">
        <label
          htmlFor="productName"
          className="col-form-label col-lg-2 col-sm-6"
        >
          Name
        </label>
        <div className="col-lg-3 col-sm-6">
          <input
            {...register("productName", { required: true })}
            type="text"
            name="productName"
            className="form-control form-control-sm"
            id="productName"
            placeholder="Enter product name"
          />
        </div>
      </div>

      <div className="row">
        <label
          htmlFor="productQuantity"
          className="col-form-label col-lg-2 col-sm-6"
        >
          Quantity
        </label>
        <div className="col-sm-3">
          <input
            {...register("productQuantity", { required: true })}
            type="number"
            style={{ textAlign: "left" }}
            name="productQuantity"
            className="form-control form-control-sm"
            id="productQuantity"
            placeholder="Enter product quantity"
          />
        </div>
      </div>

      <div className="row">
        <label
          htmlFor="productQuantityType"
          className="col-form-label col-lg-2 col-sm-6"
        >
          Quantity Type
        </label>
        <div className="col-lg-3 col-sm-6">
          <select
            id="productQuantityType"
            name="productQuantityType"
            className="form-select form-select-sm"
            {...register("productQuantityType", { required: true })}
          >
            <option value="">Select Qty Type</option>
            <option value="kg">Kilo Gram</option>
            <option value="pc">Per Item</option>
          </select>
        </div>
      </div>

      <div className="row">
        <label
          htmlFor="productActualPrice"
          className="col-form-label col-lg-2 col-sm-6"
        >
          Actual Price
        </label>
        <div className="col-lg-3 col-sm-6">
          <input
            {...register("productActualPrice", { required: true })}
            type="number"
            style={{ textAlign: "left" }}
            name="productActualPrice"
            className="form-control form-control-sm"
            id="productActualPrice"
            placeholder="Enter product quantity"
          />
        </div>
      </div>

      <div className="row">
        <label
          htmlFor="productDiscountedPrice"
          className="col-form-label col-lg-2 col-sm-6"
        >
          Discounted Price
        </label>
        <div className="col-lg-3 col-sm-6">
          <input
            {...register("productDiscountedPrice", { required: true })}
            type="number"
            style={{ textAlign: "left" }}
            name="productDiscountedPrice"
            className="form-control form-control-sm"
            id="productDiscountedPrice"
            placeholder="Discounted Price"
          />
        </div>
      </div>

      <div className="row">
        <label
          htmlFor="productImageName"
          className="col-form-label col-lg-2 col-sm-6"
        >
          Image/Icon
        </label>
        <div className="col-lg-3 col-sm-6">
          <input
            {...register("productImageName")}
            className="form-control form-control-sm"
            id="productImageName"
            type="file"
            name="productImageName"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-sm btn-success mt-3">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;

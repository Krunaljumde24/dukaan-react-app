import axios from "axios";

let addProductToDatabase = (data) => {
  let API_BASE_URI = import.meta.env.VITE_API_BASE_URL;

  let type = data.productType;
  let url = "";
  switch (type) {
    case "vegetable":
      url = `${API_BASE_URI}/addVegetable`;
      break;
    case "fruit":
      url = `${API_BASE_URI}/addFruit`;
      break;
    default:
      break;
  }

  if (url === "") throw Error("Invalid product type.");
  else {
    axios
      .post(url, {
        productName: data.productName,
        productQuantity: data.productQuantity,
        productQuantityType: data.productQuantityType,
        productActualPrice: data.productActualPrice,
        productDiscountedPrice: data.productDiscountedPrice,
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export { addProductToDatabase };

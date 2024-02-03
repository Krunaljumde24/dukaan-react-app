import axios from "axios";

let addProductToDatabase = (data) => {
  let type = data.productType;
  let url = "";
  switch (type) {
    case "vegetable":
      url = "http://localhost:8080/addVegetable";
      break;
    case "fruit":
      url = "http://localhost:8080/addFruit";
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

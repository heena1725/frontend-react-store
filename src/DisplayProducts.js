import axios from "axios";
import { useEffect, useState } from "react";
import OneProduct from "./OneProduct";

const DisplayProducts = (props) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + "products").then((data) => {
      setProductList(data.data);
    });
  }, []);

  return (
    <div className="m-3 d-flex flex-column align-items-center justify-content-center">
      <div className="m-3">
        <h3>Here goes your product list</h3>
      </div>
      <div style={{ width: "80vw" }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Manufacture Date</th>
              <th scope="col">Description</th>
              <th scope="col">Click to Buy</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((ele, index) => {
              return (
                <OneProduct
                  data={ele}
                  id={index}
                  key={index}
                  wallet={props.wallet}
                  setWallet={props.setWallet}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayProducts;

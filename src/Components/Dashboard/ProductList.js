import React, { Component } from "react";
import axios from "axios";

import ProductList2 from "./ProductList2";
import "./productlist.css";

import Navbar from "./Navbar";
export default class Product extends Component {
  state = {
    products: [],
    visibleProducts: [],
  };

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      this.setState({
        products: response.data.slice(0, 5),
        visibleProducts: response.data.slice(0, 5),
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container  ">
          {/* <!-- First Row [Products]--> */}
          <h2 className=" font-weight-bold  small mb-3">
            Clothing For Men and Women
          </h2>
          {/* <!-- Card deck row --> */}
          <div className="card-deck row pl-5">
            {this.state.visibleProducts.map((product) => {
              return (
                <div
                  className="card "
                  style={{ width: "18rem", height: "17rem" }}
                >
                  <img src={product.image} className="card-img-top  " alt="" />

                  <div className="card-body ">
                    <h5 className="card-title text-muted ">{product.title}</h5>
                  </div>
                  <div>
                    <p className="card-price">Rs {product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container  ">
          {/* <!-- First Row [Products]--> */}
          <h2 className=" font-weight-bold   small mb-3">
            Accessories For Men and Women
          </h2>

          <ProductList2 />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";

import "./productlist.css";
export default class ProductList2 extends Component {
  state = {
    photos: [],
    visiblePhotos: [],
  };

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      this.setState({
        photos: response.data.slice(7, 12),
        visiblePhotos: response.data.slice(7, 12),
      });
    });
  }

  render() {
    return (
      <div>
        <div className="card-deck row pl-5">
          {this.state.visiblePhotos.map((photo) => {
            return (
              <div className="card " style={{ width: "18rem", height: "17rem" }}>
                <img src={photo.image} className="card-img-top  " alt="" />
                <div className="card-body ">
                  <h5 className="card-title text-muted ">{photo.title}</h5>
                </div>
                <div>
                  <p className="card-price">Rs {photo.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

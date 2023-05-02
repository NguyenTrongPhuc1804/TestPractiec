import React, { Component } from "react";
import productData from "./dataCar.json";
import Modal from "./Modal";
// import "./product.css";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  state = {
    car: {
      id: 1,
      name: "black car",
      img: "./products/black-car.jpg",
      price: 1000,
    },
  };
  setCar = (newCar) => {
    this.setState({
      car: newCar,
    });
  };
  renderCar = () => {
    return productData.map((item, index) => {
      return (
        <div key={index} className="col-3">
          <ProductItem setCar={this.setCar} productData={item}></ProductItem>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1>DANH SACH XE</h1>
          <div className="row">{this.renderCar()}</div>
        </div>
        <Modal productData={this.state.car}></Modal>
      </div>
    );
  }
}

export default ProductList;

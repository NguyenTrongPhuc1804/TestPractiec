import React, { Component } from "react";
import ProductItem from "./ProductItem";
class ProductList extends Component {
  renderCard = () => {
    return this.props.arrayData.map((item, index) => {
      return (
        <div key={index} className=" card-shose">
          <ProductItem item={item}></ProductItem>
        </div>
      );
    });
  };
  render() {
    return <div className="row card-list">{this.renderCard()}</div>;
  }
}

export default ProductList;

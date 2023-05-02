import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <div className="">
        <div className="card text-left ">
          <img className="imgShose" src={this.props.item.image} alt="" />
          <div className="card-body">
            <p className="card-title">{this.props.item.name}</p>
            <p className="card-text">{this.props.item.price}$</p>
            <button className="button-add">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;

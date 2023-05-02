import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    let { img, name, price } = this.props.productData;

    return (
      <div>
        <div className="card text-white bg-primary text-center">
          <img className="card-img-top" src={img} alt="" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
            <button
              onClick={() => {
                this.props.setCar(this.props.productData);
              }}
              type="button"
              className="btn-car btn "
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Show detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;

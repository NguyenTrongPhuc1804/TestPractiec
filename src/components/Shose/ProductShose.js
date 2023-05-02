import React, { Component } from "react";
import ProductList from "./ProductList";
// import "./Product.css";
class ProductShose extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div
              className="nav flex-column nav-pills "
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Home
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Profile
              </a>
            </div>
          </div>
          <div className="col-8 shose-list">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                Home
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <ProductList arrayData={this.props.data}></ProductList>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductShose;

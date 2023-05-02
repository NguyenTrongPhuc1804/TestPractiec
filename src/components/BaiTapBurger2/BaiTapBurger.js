import React, { Component } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import "./burger.css";
import ModalBurger from "./ModalBurger";
class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container">
        <div className="row  text-center">
          <div className="col-6">
            <Burger></Burger>
          </div>
          <div className="col-6">
            <Menu></Menu>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapBurger;

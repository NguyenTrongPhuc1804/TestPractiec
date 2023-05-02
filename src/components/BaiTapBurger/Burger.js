import React, { Component } from "react";
import { connect } from "react-redux";
class Burger extends Component {
  renderBuger = () => {
    return this.props.stateBurger.map((item, index) => (
      <div key={index} className="">
        <div className={item.name}></div>
      </div>
    ));
  };
  render() {
    return (
      <div>
        <h1 className="mt-5 mb-5g">Cửa hàng Burger </h1>
        <div className="breadTop"></div>
        {this.renderBuger()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { stateBurger: state.BaiTapBurgerReducer.multiBurger };
};
export default connect(mapStateToProps)(Burger);

import React, { Component } from "react";
import { connect } from "react-redux";
class Burger extends Component {
  renderBurger = () => {
    let { burger1 } = this.props.stateBurger;
    return Object.entries(burger1).map(([name, soLuong], index) => {
      let arrBurger = [];
      for (let i = 0; i < soLuong; i++) {
        arrBurger.push(<div key={i} className={name}></div>);
      }
      return arrBurger;
    });
  };
  render() {
    return (
      <div>
        <h1 className="mt-5 mb-5g"> Burger Store </h1>
        <div className="breadTop"></div>
        {this.renderBurger()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { stateBurger: state.BaiTapBurger2Reducer };
};
export default connect(mapStateToProps)(Burger);

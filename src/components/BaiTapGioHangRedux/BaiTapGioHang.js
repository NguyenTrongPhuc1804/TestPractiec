import React, { Component } from "react";
import GioHang from "./GioHang";
import ProductList from "./ProductList";
// import "./productRedux.css";
import { connect } from "react-redux";
class BaiTapGioHang extends Component {
  tinhTongSanPham = () => {
    return this.props.gioHang.reduce((tongSoLuong, item, index) => {
      return (tongSoLuong += item.soLuong);
    }, 0);
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">DANH SACH SAN PHAM</h1>
        <div className="cart text-right">
          <span
            style={{ cursor: "pointer" }}
            className="cart-icon"
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa-solid fa-cart-shopping"></i>(
            {this.tinhTongSanPham()}) Gio hang
          </span>
        </div>
        <ProductList></ProductList>
        <GioHang></GioHang>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};
export default connect(mapStateToProps)(BaiTapGioHang);

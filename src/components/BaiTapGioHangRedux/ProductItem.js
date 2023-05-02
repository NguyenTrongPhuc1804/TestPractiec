import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItem extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.mangSanPham;
    return (
      <div>
        <div className="card text-center ">
          <img
            style={{ width: "100%", height: "348px" }}
            className="card-img-top"
            src={hinhAnh}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">{giaBan.toLocaleString()}</p>
            <button
              onClick={() => {
                this.props.themSanPham(this.props.mangSanPham);
              }}
              className="btn btn-primary"
            >
              Thêm sản phẩm
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themSanPham: (sanpham) => {
      let newSanPham = {
        maSP: sanpham.maSP,
        tenSP: sanpham.tenSP,
        hinhAnh: sanpham.hinhAnh,
        soLuong: 1,
        giaBan: sanpham.giaBan,
      };
      let action = {
        type: "THEM_GIO_HANG",
        newSanPham,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItem);

import React, { Component } from "react";

class SanPhamChiTiet extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.dataSanPham;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={hinhAnh} alt="" />
          <div className="card-body text-center">
            <h5 className="card-title">{tenSP}</h5>
            <p className="card-text">{giaBan.toLocaleString()} VND</p>
            <div className="btn-add">
              <button
                onClick={() => {
                  this.props.xemChiTiet(this.props.dataSanPham);
                }}
                className="btn btn-primary"
              >
                Xem Chi Tiet
              </button>
              <button
                onClick={() => {
                  this.props.btnAddCart(this.props.dataSanPham);
                }}
                type="button"
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SanPhamChiTiet;

import React, { Component } from "react";
import ModalPhone from "./ModalPhone";
// import "./sanPham.css";
import SanPhamChiTiet from "./SanPhamChiTiet";
class DanhSachSanPham extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    addTocart: [],
    chiTietSanPham: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  renderSanPham = () => {
    return this.mangSanPham.map((item, index) => {
      return (
        <div key={index} className="col-4">
          <SanPhamChiTiet
            xemChiTiet={this.setSanPham}
            dataSanPham={item}
            btnAddCart={this.btnAddCart}
          ></SanPhamChiTiet>
        </div>
      );
    });
  };
  setSanPham = (newSanPham) => {
    this.setState({
      chiTietSanPham: newSanPham,
    });
  };
  btnAddCart = (newSanPham1) => {
    let newCart = {
      maSP: newSanPham1.maSP,
      tenSP: newSanPham1.tenSP,
      donGia: newSanPham1.giaBan,
      hinhAnh: newSanPham1.hinhAnh,
      soLuong: 1,
    };
    let index = this.state.addTocart.findIndex(
      (item) => item.maSP === newCart.maSP
    );
    if (index != -1) {
      this.state.addTocart[index].soLuong += 1;
    } else {
      this.state.addTocart.push(newCart);
    }
    this.setState({
      addToCart: this.state.addTocart,
    });
  };
  xoaSanPham = (maSP) => {
    console.log(maSP);
    let index = this.state.addTocart.findIndex((item) => item.maSP === maSP);
    if (index !== -1) {
      this.state.addTocart.splice(index, 1);
    }
    this.setState({
      addToCart: this.state.addTocart,
    });
  };
  tinhTongSoLuong = () => {
    return this.state.addTocart.reduce((tongSoLuong, item, index) => {
      return (tongSoLuong += item.soLuong);
    }, 0);
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">DANH SACH SAN PHAM</h1>
        <div className="cart">
          <span
            className="cart-icon"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fa-solid fa-cart-shopping"></i>(
            {this.tinhTongSoLuong()}) Gio hang
          </span>
        </div>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row mt-5">
          <div className="col-4 ">
            <div className="h1">{this.state.chiTietSanPham.tenSP}</div>
            <div className="image-sp">
              <img
                style={{ width: "100%", height: "334px" }}
                src={this.state.chiTietSanPham.hinhAnh}
                alt=""
              />
            </div>
          </div>
          <div className="col-8">
            <h1>THONG SO KY THUAT</h1>
            <div className="table-sp">
              <table className="table">
                <thead>
                  <tr>
                    <th>Màn hình</th>
                    <td>{this.state.chiTietSanPham.manHinh}</td>
                  </tr>
                  <tr>
                    <th>Hệ điều hành </th>
                    <td>{this.state.chiTietSanPham.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <th>Camera trước</th>
                    <td>{this.state.chiTietSanPham.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <td>{this.state.chiTietSanPham.cameraSau}</td>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <td>{this.state.chiTietSanPham.ram}</td>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <td>{this.state.chiTietSanPham.rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <ModalPhone
            xoaSanPham={this.xoaSanPham}
            addToCart={this.state.addTocart}
          ></ModalPhone>
        </div>
      </div>
    );
  }
}

export default DanhSachSanPham;

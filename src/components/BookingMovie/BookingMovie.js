import React, { Component } from "react";
// import "./booking.css";
import HangGhe from "./HangGhe";
import ThongTinGhe from "./ThongTinGhe";
import dataGhe from "./danhSachGhe.json";

export default class BookingMovie extends Component {
  renderHangGhe = () => {
    return dataGhe.map((item, index) => {
      return (
        <div key={index}>
          <HangGhe dataGhe={item} soGhe={index}></HangGhe>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 text-center">
            <h1 className="mt-4">ĐẶT VÉ XEM PHIM</h1>
            <div className="chon-ghe mt-4">
              Chọn Ghế
              <div className="box-ghe">{this.renderHangGhe()}</div>
              <div className="row p-5 align-items-center">
                <button
                  style={{ margin: "10px 10px" }}
                  className="ghe-dang-chon"
                ></button>{" "}
                <span>Ghế đang chọn</span>
                <button
                  style={{ margin: "0 10px" }}
                  className="ghe-da-ban"
                ></button>{" "}
                <span>Ghế đã đặt</span>
                <button
                  style={{ margin: "0 10px" }}
                  className="ghe-duoc-chon"
                ></button>{" "}
                <span>Ghế được chọn</span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h2 className="mt-4">DANH SÁCH GHẾ BẠN CHỌN</h2>
            <ThongTinGhe></ThongTinGhe>
          </div>
        </div>
      </div>
    );
  }
}

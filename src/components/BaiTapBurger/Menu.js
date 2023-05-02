import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "./Burger";
import ModalBurger from "./ModalBurger";
import { setBurger, removeBurger } from "../../redux/action/DatBurgerAction";
class Menu extends Component {
  renderMenu = () => {
    return this.props.stateBurger.burger.map((item, index) => (
      <tr key={index}>
        <td scope="row">{item.name}</td>
        <td>
          <button
            onClick={() => {
              this.props.removeBurger(item);
            }}
            className="btn btn-danger"
          >
            -
          </button>
          <span className="ml-2 mr-2">{item.soLuong}</span>
          <button
            onClick={() => {
              this.props.setBurger(item);
            }}
            className="btn btn-success"
          >
            +
          </button>
        </td>
        <td>{item.donGia.toLocaleString()} VND</td>
        <td>{item.donGia * item.soLuong.toLocaleString()} VND</td>
      </tr>
    ));
  };
  render() {
    return (
      <div>
        <h1 className="mt-5 mb-5">Chọn thức ăn</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderMenu()}</tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Tổng cộng</th>
              <th>
                {this.props.stateBurger.burger
                  .reduce((tong, item, index) => {
                    tong += item.soLuong * item.donGia;
                    return tong;
                  }, 0)
                  .toLocaleString()}{" "}
                VND
              </th>
            </tr>
          </tfoot>
        </table>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Hóa đơn
          </button>
        </div>
        <ModalBurger></ModalBurger>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stateBurger: state.BaiTapBurgerReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setBurger: (burger) => {
      dispatch(setBurger(burger));
    },
    removeBurger: (burger) => {
      dispatch(removeBurger(burger));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

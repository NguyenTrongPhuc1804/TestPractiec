import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "./Burger";
import ModalBurger from "./ModalBurger";
import { setBurger, removeBurger } from "../../redux/action/DatBurgerAction";
class Menu extends Component {
  renderMenu = () => {
    let { menu, burger1 } = this.props.stateMenu;
    return Object.entries(menu).map(([name, price], index) => {
      return (
        <tr key={index}>
          <td scope="row">{name}</td>
          <td>
            <button
              onClick={() => {
                this.props.setBurger(name, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>

            <span className="ml-2 mr-2">{burger1[name]}</span>
            <button
              onClick={() => {
                this.props.setBurger(name, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>

          <td>{price}</td>
          <td> {burger1[name] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h1 className="mt-5 mb-5">Choose Food</h1>
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
              <th>{this.props.stateMenu.total}</th>
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
    stateMenu: state.BaiTapBurger2Reducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setBurger: (burger, price) => {
      dispatch(setBurger(burger, price));
    },
    removeBurger: (burger) => {
      dispatch(removeBurger(burger));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

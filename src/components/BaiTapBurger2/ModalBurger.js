import React, { Component } from "react";
import { connect } from "react-redux";
class ModalBurger extends Component {
  renderFood = () => {
    return this.props.stateBurger.map((item, index) => {
      if (item.soLuong > 0) {
        return (
          <div key={index} className="">
            <p>
              {item.name} :{item.soLuong}
            </p>
          </div>
        );
      }
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Hóa đơn Burger
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Hóa đơn của bạn gồm có:
              {this.renderFood()}
              <h3>
                Tổng tiền thanh toán của bạn:{" "}
                {this.props.stateBurger
                  .reduce((tong, item, index) => {
                    return (tong += item.soLuong * item.donGia);
                  }, 0)
                  .toLocaleString()}{" "}
                VND
              </h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Thanh toán
              </button>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
const mapStateTpProps = (state) => {
  return {
    stateBurger: state.BaiTapBurgerReducer.burger,
  };
};
export default connect(mapStateTpProps)(ModalBurger);

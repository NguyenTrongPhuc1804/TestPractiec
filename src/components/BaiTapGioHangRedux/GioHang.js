import React, { Component } from "react";
import { connect } from "react-redux";
class GioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td scope="row">{item.maSP}</td>
          <td>
            <img
              style={{ width: "70%", height: "50px" }}
              src={item.hinhAnh}
              alt=""
            />
          </td>
          <td>{item.tenSP}</td>
          <td>{item.giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, false);
              }}
              style={{ margin: "4px" }}
              className="btn"
            >
              -
            </button>
            {item.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, true);
              }}
              style={{ margin: "4px" }}
              className="btn"
            >
              +
            </button>
          </td>
          <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaSanPham(item.maSP);
              }}
              className="btn btn-danger"
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.gioHang);
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "800px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
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
              <table className="table">
                <thead>
                  <tr>
                    <th>maSP</th>
                    <th>Hinh anh</th>
                    <th>TenSP</th>
                    <th>Don Gia</th>
                    <th>So Luong</th>
                    <th>Thanh Tien</th>
                  </tr>
                </thead>
                <tbody>{this.renderGioHang()}</tbody>
                <tfoot>
                  <tr>
                    <th colSpan={5}></th>
                    <th>Tong tien</th>
                    <th>
                      {this.props.gioHang.reduce(
                        (tinhTong, item, index) =>
                          (tinhTong += item.soLuong * item.giaBan),
                        0
                      )}
                    </th>
                  </tr>
                </tfoot>
              </table>
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
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaSanPham: (maSP) => {
      let action = {
        type: "XOA_SAN_PHAM",
        maSP,
      };

      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      let action = {
        type: "TANG_GIAM_SL",
        maSP,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);

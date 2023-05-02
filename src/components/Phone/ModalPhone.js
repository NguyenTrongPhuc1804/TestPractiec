import React, { Component } from "react";

class ModalPhone extends Component {
  render() {
    let { addToCart } = this.props;
    const renderCart = () => {
      return addToCart.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{item.maSP}</th>
            <td>
              <img
                style={{ width: "80%", height: "50px" }}
                src={item.hinhAnh}
                alt=""
              />
            </td>
            <td>{item.tenSP}</td>
            <td>{item.soLuong}</td>
            <td>{item.donGia.toLocaleString()}</td>
            <td>{(item.donGia * item.soLuong).toLocaleString()}</td>
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
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
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
                <div className="row">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">HÌnh ảnh </th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>{renderCart()}</tbody>
                  </table>
                </div>
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
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPhone;

import React, { Component } from "react";
import { connect } from "react-redux";
import { xoaGhe } from "../../redux/action/DatGheAction";
class ThongTinGhe extends Component {
  renderGheDaDat = () => {
    return this.props.stateGheDaDat.map((item, index) => {
      return (
        <tr key={index}>
          <td style={{ color: "orange" }} scope="row">
            {item.soGhe}
          </td>
          <td style={{ color: "orange" }}>{item.gia}</td>
          <td
            onClick={() => {
              this.props.xoaGhe(item);
            }}
            style={{ color: "red", cursor: "pointer" }}
          >
            X
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderGheDaDat()}</tbody>
          <tfoot>
            <tr>
              <td style={{ color: "red" }}>Tổng tiền</td>
              <td style={{ color: "red" }}>
                {this.props.stateGheDaDat.reduce((tinhTong, item, index) => {
                  return (tinhTong += item.gia);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGhe: (soGhe) => {
      dispatch(xoaGhe(soGhe));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    stateGheDaDat: state.gheDaDatReducer.danhSachGhe,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGhe);

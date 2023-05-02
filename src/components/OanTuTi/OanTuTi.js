import React, { Component } from "react";
import { connect } from "react-redux";
class OanTuTi extends Component {
  renderTuTi = () => {
    return this.props.stateTuTi.hinhAnh.map((item, index) => {
      return (
        <img
          onClick={() => {
            this.props.ChonTuTi(item.ma);
          }}
          key={index}
          className="col-4 iron"
          src={item.img}
          alt=""
        />
      );
    });
  };
  render() {
    return <div className="tuti-box">{this.renderTuTi()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    stateTuTi: state.GameTuTiReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ChonTuTi: (maTuti) => {
      dispatch({
        type: "TUTI",
        maTuti,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OanTuTi);

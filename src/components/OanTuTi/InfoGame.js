import React, { Component } from "react";
import { connect } from "react-redux";
class InfoGame extends Component {
  render() {
    return (
      <div>
        <h1>
          Số bàn thắng:
          <span className="ban-thang"> {this.props.stateTuTi.soBanThang}</span>
        </h1>
        <h1>
          Số bàn chơi:
          <span className="ban-choi"> {this.props.stateTuTi.soBanChoi}</span>
        </h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stateTuTi: state.GameTuTiReducer,
  };
};
export default connect(mapStateToProps)(InfoGame);

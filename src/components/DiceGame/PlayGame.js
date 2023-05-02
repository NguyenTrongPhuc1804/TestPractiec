import React, { Component } from "react";
import { connect } from "react-redux";
class PlayGame extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <h1>
          Bạn chọn:
          <span className="infoGame">
            {this.props.stateDice.dice ? "Tai" : "Xiu"}
          </span>
        </h1>
        <h1>
          Số bàn thắng:
          <span className="infoGameWin">{this.props.stateDice.soBanThang}</span>
        </h1>
        <h1>
          Tổng số bàn chơi:
          <span className="infoGame">{this.props.stateDice.tongSoBanChoi}</span>
        </h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stateDice: state.DiceGameReducer,
  };
};
export default connect(mapStateToProps)(PlayGame);

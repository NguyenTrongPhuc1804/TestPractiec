import React, { Component } from "react";
import InfoGame from "./InfoGame";
import OanTuTi from "./OanTuTi";
// import "./oantuti.css";
import { connect } from "react-redux";
class GameOanTuTi extends Component {
  render() {
    return (
      <div className="container text">
        <h1 className="text-center mb-5">Game Oan Tu Ti</h1>
        <div className="row">
          <div className="col-3">
            <div className="img-tuti">
              <img
                src={
                  this.props.stateTuTi.hinhAnh.find((item) => item.datCuoc).img
                }
                alt={
                  this.props.stateTuTi.hinhAnh.find((item) => item.datCuoc).img
                }
              />
            </div>
            <img src="./oantuti/iron.png" alt="" />
            <div className="row">
              <OanTuTi></OanTuTi>
            </div>
          </div>

          <div className="col-6 text-center">
            <span className="ket-qua">{this.props.stateTuTi.text}</span>
            <InfoGame></InfoGame>
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn-play"
            >
              Play game
            </button>
          </div>
          <div className="col-3">
            <div className="img-tuti ">
              <img src={this.props.stateTuTi.imgComputer.img} alt="" />
            </div>
            <img className="computer" src="./oantuti/thanos.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      const loopInter = setInterval(() => {
        dispatch({
          type: "PLAY_GAME_TUTI",
        });
        count++;
        if (count >= 8) {
          clearInterval(loopInter);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 800);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    stateTuTi: state.GameTuTiReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameOanTuTi);

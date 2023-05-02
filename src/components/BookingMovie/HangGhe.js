import React, { Component } from "react";
import { connect } from "react-redux";
import { chonGheAction } from "../../redux/action/DatGheAction";
class HangGhe extends Component {
  renderSoGhe = () => {
    return this.props.dataGhe.danhSachGhe.map((item, index) => {
      let cssGhe = "";
      if (item.daDat) {
        cssGhe = "ghe-da-ban";
      }
      if (this.props.soGhe === 0) {
        return (
          <button key={index} className="rowGhe">
            {item.soGhe}
          </button>
        );
      }
      let cssGheDangChon = "";
      let indexGhe = this.props.stateGheDaDat.findIndex(
        (ghe) => ghe.soGhe === item.soGhe
      );
      if (indexGhe !== -1) {
        cssGheDangChon = "ghe-dang-chon";
      }
      return (
        <button
          onClick={() => {
            this.props.gheDaChon(item);
          }}
          key={index}
          className={`${cssGheDangChon} ${cssGhe}  ghe `}
        >
          {item.soGhe}
        </button>
      );
    });
  };

  render() {
    return (
      <div className="">
        <div className="text-dark text-center  justify-content-around row">
          <div className="col-1 mt-4 p-0">{this.props.dataGhe.hang}</div>
          <div className="col-10 mt-4 p-0 ">{this.renderSoGhe()}</div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    gheDaChon: (ghe) => {
      dispatch(chonGheAction(ghe));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    stateGheDaDat: state.gheDaDatReducer.danhSachGhe,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

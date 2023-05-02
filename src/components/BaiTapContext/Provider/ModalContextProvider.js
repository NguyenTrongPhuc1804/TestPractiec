import React, { Component } from "react";
import { ModalContext } from "../Context/ModalContext";
import Data from "../dataProfile.json";
class ModalContextProvider extends Component {
  state = {
    modalList: [
      {
        id: 1,
        name: "Tào Tháo",
        age: 65,
        img: "./img/model/model1.png",
        like: 0,
        active: false,
      },
      {
        id: 2,
        name: "Gia Cát Lượng",
        age: 54,
        img: "./img/model/model2.png",
        like: 0,
        active: false,
      },
      {
        id: 3,
        name: "Joker",
        age: 35,
        img: "./img/model/model3.png",
        like: 0,
        active: true,
      },
      {
        id: 4,
        name: "Trâm Anh",
        age: 18,
        img: "./img/model/model4.png",
        like: 0,
        active: false,
      },
    ],
  };
  setModal = (id) => {
    let newModal = this.state.modalList.map((modal) => {
      if (modal.id === id) {
        modal.like += 1;
        modal.active = true;
      } else {
        modal.active = false;
      }
      return { ...modal };
    });
    this.setState({
      modalList: newModal,
    });
  };
  render() {
    return (
      <ModalContext.Provider
        value={{
          dataList: this.state.modalList,
          setModal: this.setModal,
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default ModalContextProvider;

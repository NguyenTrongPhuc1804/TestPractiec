import React, { Component } from "react";
import ModalList from "./ModalList";
import ProfileModal from "./ProfileModal";
import ModalContextProvider from "./Provider/ModalContextProvider";

class BaifTapModalContex extends Component {
  render() {
    return (
      <ModalContextProvider>
        <div className="container">
          <ProfileModal></ProfileModal>
          <ModalList></ModalList>
        </div>
      </ModalContextProvider>
    );
  }
}

export default BaifTapModalContex;

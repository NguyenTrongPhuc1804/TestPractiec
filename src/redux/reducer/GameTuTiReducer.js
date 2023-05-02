const stateOanTuTi = {
  soBanThang: 0,
  soBanChoi: 0,
  hinhAnh: [
    { ma: "bua", img: "./oantuti/bua.png", datCuoc: false },
    { ma: "bao", img: "./oantuti/bao.png", datCuoc: true },
    { ma: "keo", img: "./oantuti/keo.png", datCuoc: false },
  ],
  imgComputer: {},
  text: "",
};

const TuTiGameReducer = (state = stateOanTuTi, action) => {
  switch (action.type) {
    case "TUTI": {
      let updateHinhAnh = [...state.hinhAnh];
      updateHinhAnh = updateHinhAnh.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let index = updateHinhAnh.findIndex((item) => item.ma === action.maTuti);
      if (index !== -1) {
        updateHinhAnh[index].datCuoc = true;
      }
      state.hinhAnh = updateHinhAnh;
      console.log(state);
      return { ...state };
    }
    case "PLAY_GAME_TUTI": {
      let update = [...state.hinhAnh];
      let randomNum = Math.floor(Math.random() * 3);
      state.imgComputer = update[randomNum];

      return { ...state };
    }
    case "END_GAME": {
      let player = state.hinhAnh.find((item) => item.datCuoc === true);
      let computer = state.imgComputer;
      switch (player.ma) {
        case "keo": {
          state.soBanChoi += 1;
          if (computer.ma === "keo") {
            state.text = "Bạn Hòa";
          } else if (computer.ma === "bua") {
            state.text = "Bạn thua";
          } else {
            state.text = "Bạn thắng";
            state.soBanThang += 1;
          }
          break;
        }
        case "bua": {
          state.soBanChoi += 1;
          if (computer.ma === "keo") {
            state.text = "Bạn thắng";
            state.soBanThang += 1;
          } else if (computer.ma === "bua") {
            state.text = "Bạn Hòa";
          } else {
            state.text = "Bạn thua";
          }
          break;
        }
        case "bao": {
          state.soBanChoi += 1;
          if (computer.ma === "keo") {
            state.text = "Bạn thua";
          } else if (computer.ma === "bua") {
            state.text = "Bạn thắng";
            state.soBanThang += 1;
          } else {
            state.text = "Bạn Hòa";
          }
          break;
        }
        default:
          return { ...state };
      }
    }
    default:
      return { ...state };
  }
};
export default TuTiGameReducer;

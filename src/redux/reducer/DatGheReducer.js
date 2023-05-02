const gheDaDat = {
  danhSachGhe: [],
};

const gheDaDatReducer = (state = gheDaDat, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let danhSachGheUpdate = [...state.danhSachGhe];
      let index = danhSachGheUpdate.findIndex(
        (item) => item.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheUpdate.splice(index, 1);
      } else {
        danhSachGheUpdate.push(action.ghe);
      }
      state.danhSachGhe = danhSachGheUpdate;
      return { ...state };
    }
    case "XOA_GHE": {
      let danhSachGheUpdate = [...state.danhSachGhe];
      let index = danhSachGheUpdate.findIndex(
        (item) => item.soGhe === action.soGhe.soGhe
      );
      if (index !== -1) {
        danhSachGheUpdate.splice(index, 1);
      }
      state.danhSachGhe = danhSachGheUpdate;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default gheDaDatReducer;

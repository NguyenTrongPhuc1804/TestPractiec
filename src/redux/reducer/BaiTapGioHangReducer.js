const stateGioHang = {
  gioHang: [],
};

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.gioHang.findIndex(
        (item) => item.maSP === action.newSanPham.maSP
      );

      if (index !== -1) {
        state.gioHang[index].soLuong += 1;
      } else {
        state.gioHang.push(action.newSanPham);
      }

      state.gioHang = [...state.gioHang];
      return { ...state };
    }
    case "XOA_SAN_PHAM": {
      let updateGioHang = [...state.gioHang];
      let index = updateGioHang.findIndex((item) => item.maSP === action.maSP);
      if (index !== -1) {
        updateGioHang.splice(index, 1);
      }
      state.gioHang = updateGioHang;
      return { ...state };
    }
    case "TANG_GIAM_SL": {
      let updateGioHang = [...state.gioHang];
      let index = updateGioHang.findIndex((item) => item.maSP === action.maSP);
      if (index !== -1 && action.tangGiam) {
        updateGioHang[index].soLuong++;
      } else if (index !== -1 && !action.tangGiam) {
        if (state.gioHang[index].soLuong > 1) {
          updateGioHang[index].soLuong--;
        } else {
          alert("so luong toi thieu la 1");
        }
      }
      state.gioHang = updateGioHang;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BaiTapGioHangReducer;

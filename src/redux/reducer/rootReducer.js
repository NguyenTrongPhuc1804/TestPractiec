import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import DiceGameReducer from "./DiceGameReducer";
import GameTuTiReducer from "./GameTuTiReducer";
import gheDaDatReducer from "./DatGheReducer";
import BaiTapBurgerReducer from "./BaiTapBurgerReducer";
import BaiTapBurger2Reducer from "./BaiTapBurger2Reducer";
const rootReducer = combineReducers({
  stateGioHang: BaiTapGioHangReducer, //state gio hang
  DiceGameReducer,
  GameTuTiReducer,
  gheDaDatReducer,
  BaiTapBurgerReducer,
  BaiTapBurger2Reducer,
});

export default rootReducer;

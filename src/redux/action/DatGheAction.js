import { DAT_GHE, XOA_GHE } from "../type/DatGheType";

export const chonGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const xoaGhe = (soGhe) => {
  return {
    type: XOA_GHE,
    soGhe,
  };
};

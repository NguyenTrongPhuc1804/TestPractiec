import { THEM_MON, XOA_MON } from "../type/DatBurgerType";

export const setBurger = (burger, price) => {
  return {
    type: THEM_MON,
    burger,
    price,
  };
};
export const removeBurger = (burger) => {
  return {
    type: XOA_MON,
    burger,
  };
};

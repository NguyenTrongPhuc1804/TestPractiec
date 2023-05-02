const stateBurger1 = {
  burger1: { salad: 0, cheese: 0, beef: 0 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 30,
  },
  total: 0,
};

const BurgerReducer = (state = stateBurger1, action) => {
  switch (action.type) {
    case "THEM_MON": {
      let newBurger1 = { ...state.burger1 };
      if (newBurger1[action.burger] === 0 && action.price === -1) {
        return { ...state };
      }
      newBurger1[action.burger] += action.price;
      state.burger1 = newBurger1;
      state.total += action.price * state.menu[action.burger];
      return { ...state };
    }
    case "XOA_MON": {
    }

    default:
      return { ...state };
  }
};
export default BurgerReducer;

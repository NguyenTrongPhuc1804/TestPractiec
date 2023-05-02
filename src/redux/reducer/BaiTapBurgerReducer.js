const stateBurger = {
  burger: [
    { name: "salad", soLuong: 0, donGia: 10000 },
    { name: "cheese", soLuong: 0, donGia: 20000 },
    { name: "beef", soLuong: 0, donGia: 30000 },
  ],
  multiBurger: [],

  // burger: { salad: 1, cheese: 1, beef: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 30,
  },
  total: 85,
};

const BurgerReducer = (state = stateBurger, action) => {
  switch (action.type) {
    case "THEM_MON": {
      let newBurger = [...state.burger];
      let newMultiBurger = [...state.multiBurger];
      newBurger.map((item) => {
        if (item.name === action.burger.name) {
          item.soLuong += 1;
          newMultiBurger.push({ name: action.burger.name });
        }
        state.burger = newBurger;
        state.multiBurger = newMultiBurger;
      });
      return { ...state };
    }
    case "XOA_MON": {
      let newBurger = [...state.burger];
      let newMultiBurger = [...state.multiBurger];
      newBurger.map((item) => {
        if (item.name === action.burger.name && item.soLuong > 0) {
          item.soLuong -= 1;
          let index = newMultiBurger.findIndex(
            (item) => item.name === action.burger.name
          );
          if (index !== -1) {
            newMultiBurger.splice(index, 1);
          }
        }
        state.burger = newBurger;
        state.multiBurger = newMultiBurger;
        return { ...state };
      });
    }

    default:
      return { ...state };
  }
};
export default BurgerReducer;

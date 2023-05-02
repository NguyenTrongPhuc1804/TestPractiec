const stateDice = {
  soBanThang: 0,
  tongSoBanChoi: 0,
  dice: false,
  index: 0,
  diceArray: [
    { ma: 1, img: "./imgDice/6.png" },
    { ma: 1, img: "./imgDice/6.png" },
    { ma: 1, img: "./imgDice/6.png" },
  ],
};
const DiceGameReducer = (state = stateDice, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.dice = action.taiXiu;
      return { ...state };
    }
    case "PLAY_GAME": {
      let randomArrayDice = [];
      for (let index = 0; index < 3; index++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        let randomDice = {
          ma: randomNumber,
          img: `./imgDice/${randomNumber}.png`,
        };
        randomArrayDice.push(randomDice);
      }

      state.tongSoBanChoi += 1;
      state.diceArray = randomArrayDice;
      let tongNum = state.diceArray.reduce((tongNumb, item, index) => {
        return (tongNumb += item.ma);
      }, 0);
      if ((tongNum <= 9 && !state.dice) || (tongNum > 9 && state.dice)) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default DiceGameReducer;

export const userReducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      console.log("I will change firstName here");
      break;
    case "lastName":
      console.log("I will change lastName here");
      break;
    case "incrementAge":
      return {
        ...state.user,
        count: state.user.age + 1
      };
    case "decrementAge":
      return {
        ...state.user,
        count: state.user.age - 1
      };
    default:
      throw new Error();
  }
};

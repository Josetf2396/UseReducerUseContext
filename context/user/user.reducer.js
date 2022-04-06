

export const userReducer = (state, action) => {
    
    switch (action.type) {
      case 'changeName':
      
      return {
        ...state.user,
        firstName: action.value
      }
      break;
      case 'changeAge':
            console.log("I will change age here")
      break;
      case 'firstName':
            console.log("I will change firstName here")
      break;
      case 'lastName':
            console.log("I will change lastName here")
      break;
      default: return state.user;
    }
  }
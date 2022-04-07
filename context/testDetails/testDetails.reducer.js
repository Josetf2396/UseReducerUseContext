export const testReducer = (state, action) => {
  switch (action.type) {
    case "scoreIncrease":
      return {
        ...state.user,
        score: action.score
      };
    case "scoreDecrease":
      return {
        ...state.testDetails,
        score: action.score
      };
    case "numberOfQuestions":
      return {
        ...state.user,
        questions: action.questions
      };
    case "numberOfAnswers":
      return {
        ...state.user,
        answers: action.answers
      };
    default:
      throw new Error();
  }
};

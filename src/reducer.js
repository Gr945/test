const initialState = { user: { login: "?", password: "?" } };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default reducer;

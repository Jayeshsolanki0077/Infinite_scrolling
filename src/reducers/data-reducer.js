export default (state = [{id: 1, username: "foo", password: "bar"}], action) => {
    switch (action.type) {
      case "DISPLAY_RECORDS":
        return [...state,action.payload.event];
      default:
        return state;
    }
  };
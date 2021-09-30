export default (state = [{id: 1, email: "foo", password: "bar"}], action) => {
    switch (action.type) {
      case "LOG_OUT":
        return {}
      default:
        return state;
    }
  };
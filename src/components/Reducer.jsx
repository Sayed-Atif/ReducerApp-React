// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      case 'INCREMENT_BY_AMOUNT':
        return { count: state.count + action.payload };
      case 'DECREMENT_BY_AMOUNT':
        return { count: state.count - action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  
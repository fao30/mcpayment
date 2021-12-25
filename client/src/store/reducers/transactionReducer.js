import {
  GET_DATA,
  ITEMS_LOADING,
  NEW_PAYMENT,
} from "../actionType/transactionTypes";

const initialState = {
  transactions: [],
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        transactions: action.payload,
      };
    case NEW_PAYMENT:
      return {
        ...state,
        transactions: action.payload,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;

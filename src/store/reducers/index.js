import { ADD_PERSON, DATA_READY, CALL_OTHER,CHANGE_OTHER } from './../types'
const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, loading: true };
    case DATA_READY:
      return { ...state, data: action.payload, move: true, loading: false }

    case CHANGE_OTHER: {
      return { ...state, move: false, loading: false }

    }
    case CALL_OTHER: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
export default reducer;
import Types from '../actions/types';

const init = {
  fecha: new Date(),
}

// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type) {
    // DATE && TIME
    case (Types.UPDATE_DATE):
      return Object.assign({}, state, {
        fecha: action.payload
      });
    default:
      return state
  }
}

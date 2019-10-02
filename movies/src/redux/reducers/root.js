import Types from '../actions/types';

const init = {
  test: 'Hola Mundo',
  fecha: new Date()
}

// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type) {
    // case value:
    case (Types.UPDATE_DATE):
      return Object.assign({}, state, {
        fecha: action.payload
      });
    // break;
    default:
      return state
  }
}

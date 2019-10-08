import Types from '../actions/types';

const init = {
  dataFecha: new Date(),
}

// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type) {
    // DATE && TIME
    case (Types.GET_FECHA):
      return Object.assign(
        {},
        state,
        {
          dataFecha: action.payload
        }
      );
    default:
      return state;
  }
}

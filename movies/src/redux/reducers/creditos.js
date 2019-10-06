import tipo from '../actions/types';

const init = {
  data: []
}


// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo.GET_CREDITOS_FULFILLED:
      return Object.assign( {},state,
        {
          data: action.payload.data.cast
        })
    default:
      return state
  }
}
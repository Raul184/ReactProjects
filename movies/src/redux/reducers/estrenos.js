import tipo from '../actions/types';

const init = {
  data: []
}


// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo._FULFILLED:
      return Object.assign( {},state,
        {
          data: action.payload.data.results
        })
    default:
      return state
  }
}
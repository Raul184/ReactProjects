import tipo from '../actions/types';

const init = {
  data: []
}


// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo._FULFILLED:
      const { cast } = action.payload.data;
      return Object.assign( {},state,
        {
          data: cast
        })
    default:
      return state
  }
}
import tipo from '../actions/types';

const init = {
  data: []
}


// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo._FULFILLED:
      const { data } = action.payload;
      return Object.assign( {},state,
        {
          data
        })
    default:
      return state
  }
}
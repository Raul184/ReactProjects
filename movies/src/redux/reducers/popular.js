import tipo from '../actions/types';

const init = {
  popular: []
}


// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo._FULFILLEDII:
      const { results } = action.payload.data;
      return Object.assign( {},state,
        {
          popular: results,
        })
    default:
      return state
  }
}
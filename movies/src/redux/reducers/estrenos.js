import tipo from '../actions/types';

const init = {
  data: [],
  random: null
}


// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo.GET_ESTRENOS_FULFILLED:
      const { results } = action.payload.data;
      const random = results[ Math.floor(Math.random() * results.length) ];
      return Object.assign( {},state,
        {
          data: results,
          random
        })
    default:
      return state
  }
}
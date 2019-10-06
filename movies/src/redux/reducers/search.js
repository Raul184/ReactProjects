import tipo from '../actions/types';

const init = {
  searchInput: []
}

// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo.GET_BUSQUEDA_FULFILLED:
      return Object.assign( {},state,
        {
          searchInput: action.payload.data.results
        })
    default:
      return state
  }
}
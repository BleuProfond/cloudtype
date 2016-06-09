import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // we destructor our state array, flatten it out 
    // and place its elements within a brand new array,
    // avoiding previous state mutations
    return [ action.payload.data, ...state ];
  }
  return state;
}
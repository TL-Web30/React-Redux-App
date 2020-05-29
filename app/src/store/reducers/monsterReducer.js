import {FETCH_MONSTERS_START, FETCH_MONSTERS_SUCCESS,
  FETCH_MONSTERS_FAIL} from '../actions';

const initialState = {
  monsters: [],
  isFetching: false,
 
  monstersPerPage: 16,
  error: ''    
};

export const monstersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MONSTERS_START: 
      return {
        ...state,
        isFetching: true
      };
      case FETCH_MONSTERS_SUCCESS:
        return {
          
          monsters: action.payload,
          isFetching: false,
          
          monstersPerPage: 16
        }
      case FETCH_MONSTERS_FAIL:
        return{
          ...state,
          isFetching: false,
          
          error: action.payload
        }
      default:
        return state;
    }
  };
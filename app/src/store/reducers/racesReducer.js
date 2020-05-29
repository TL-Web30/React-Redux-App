
import {
    FETCH_RACES_START, FETCH_RACES_SUCCESS, FETCH_RACES_FAIL
} from '../actions';

const initialState = {
    races: [],
    isFetching: false,
    error: ''
}

export const racesReducer = (state = initialState, action ) => {
    switch(action.type){
        case FETCH_RACES_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_RACES_SUCCESS:
            return {
                races: action.payload,
                isFetching: false
            }    
        case FETCH_RACES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state;
    }
}
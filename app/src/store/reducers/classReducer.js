import {FETCH_CLASSES_START, FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_FAIL
} from '../actions';


const initialState = {
    classes: [],
    isFetching: false,
    error: ''
}

export const classReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CLASSES_START:
        return {
            ...state,
            isFetching: true
        };
        case FETCH_CLASSES_SUCCESS: 
        return {
            
        classes: action.payload,
            isFetching: false,
        };
        case FETCH_CLASSES_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state;
    }
}
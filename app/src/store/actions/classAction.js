import axios from 'axios';

export const FETCH_CLASSES_START = "FETCH_CLASSES_START";
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS";
export const FETCH_CLASSES_FAIL = "FETCH_CLASSES_FAIL";

export const getClasses = () => dispatch => {
    dispatch({ type: FETCH_CLASSES_START });
    axios
    .get("http://www.dnd5eapi.co/api/classes")
    .then(response => {
        console.log("i am classes axios response", response)
        dispatch({
            type: FETCH_CLASSES_SUCCESS, payload: response.data.results
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_CLASSES_FAIL, payload: err.response
        });
    });
}
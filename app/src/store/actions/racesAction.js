import axios from "axios";

export const FETCH_RACES_START = "FETCH_RACES_START";
export const FETCH_RACES_SUCCESS = " FETCH_RACES_SUCCESS";
export const FETCH_RACES_FAIL = "FETCH_RACES_FAIL";

export const getRaces = () => dispatch => {
    dispatch({ type: FETCH_RACES_START});
    axios
    .get("http://www.dnd5eapi.co/api/races")
    .then(response => {
        console.log('i am races axios repsonse', response)
        dispatch({
            type: FETCH_RACES_SUCCESS, payload: response.data.results
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_RACES_FAIL, payload: err.response
        });
    });
}
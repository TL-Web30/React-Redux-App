import axios from 'axios';

export const FETCH_MONSTERS_START = "FETCH_MONSTERS_START";
export const FETCH_MONSTERS_SUCCESS = "FETCH_MONSTERS_SUCCESS";
export const FETCH_MONSTERS_FAIL = "FETCH_MONSTERS_FAIL"

export const getMonsters = () => dispatch => {   
        dispatch({ type: FETCH_MONSTERS_START});
        axios
        .get("http://www.dnd5eapi.co/api/monsters")
        .then(response => {
            console.log('im monsters axios response', response)
            dispatch({
                type: FETCH_MONSTERS_SUCCESS, payload: response.data.results
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_MONSTERS_FAIL, payload: err.response
            })
        })
    
}
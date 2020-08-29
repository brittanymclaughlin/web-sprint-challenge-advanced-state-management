import axios from 'axios';

export const FETCHING_SMURF_VILLAGE_START = 'FETCHING_SMURF_VILLAGE_START';
export const FETCHING_SMURF_VILLAGE_SUCCESS = 'FETCHING_SMURF_VILLAGE_SUCCESS';
export const FETCHING_SMURF_VILLAGE_FAIL = 'FETCHING_SMURF_VILLAGE_FAIL';
export const SUBMIT_FORM_START = 'SUBMIT_FORM_START';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_FAIL = 'SUBMIT_FORM_FAIL';

export const submitForm = (submitForm) => dispatch => {
    dispatch({type:SUBMIT_FORM_START})
    axios
        .post ('http://localhost:3333/smurfs', submitForm)
        .then(res => {
            console.log('res', res.data);
            dispatch({type: SUBMIT_FORM_SUCCESS, payload:submitForm})
        })
        .catch (err => {
            console.log(err.response);
            dispatch({type: SUBMIT_FORM_FAIL, payload: err.response})
        })
}

export const fetchSmurfVillage = () => dispatch => {
    dispatch ( {type: FETCHING_SMURF_VILLAGE_START});
    axios
        .get ('http://localhost:3333/smurfs')
        .then(res => {
            console.log("res", res.data);
            dispatch({ type: FETCHING_SMURF_VILLAGE_SUCCESS, payload: res.data})
        })
        .catch (err => {
            console.log(err.response);
            dispatch({ type: FETCHING_SMURF_VILLAGE_FAIL, payload: err.response})
        })

};
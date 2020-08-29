import { FETCHING_SMURF_VILLAGE_START, 
         FETCHING_SMURF_VILLAGE_SUCCESS,
         FETCHING_SMURF_VILLAGE_FAIL, 
         SUBMIT_FORM_START,
         SUBMIT_FORM_SUCCESS,
         SUBMIT_FORM_FAIL } from '../actions'

const initialState = {
    smurfs:[],
    isFetching: false,
    error: ''


}

export const rootReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type){
        case SUBMIT_FORM_START:
            return{
                ...state

            }
        case SUBMIT_FORM_SUCCESS:
        return{
                ...state, 
                smurfs:[...state.smurfs, action.payload]
        }
        case SUBMIT_FORM_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case FETCHING_SMURF_VILLAGE_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCHING_SMURF_VILLAGE_SUCCESS:
            console.log("action", action.payload)
            return{
                ...state,
                smurfs: action.payload, 
                isFetching: false
            }
        case FETCHING_SMURF_VILLAGE_FAIL:
            return{
                ...state, 
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}
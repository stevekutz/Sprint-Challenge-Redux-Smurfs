/*
  Be sure to import in all of the action types from `../actions`
*/
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.

  Your initial/default state for this project could Although does not have to
   look a lot like this
*/


import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
//  FETCH_DATA_FAILURE,   // use ONLU ERROR for all cases
  ERROR,


} from '../actions';



const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

export default (state = initialState, action) => {
  switch(action.type) {

    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingData: false,
        isLoggingIn: false,
        friends: action.payload,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;

  }
}




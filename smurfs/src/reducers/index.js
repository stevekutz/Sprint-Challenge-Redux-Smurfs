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
  ADDING_SMURF,
  ADD_SMURF,

  DELETING_SMURF,
  DELETE_SMURF,

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
        fetchingSmurfs: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: action.payload,
      };

    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,

      };
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };

    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true,

      };

    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
        
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




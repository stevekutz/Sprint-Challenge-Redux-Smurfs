/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

/*
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
//  FETCH_DATA_FAILURE,   // use ONLU ERROR for all cases
  ERROR,
 */

import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SMURF = "ADD_SMURF";

export const DELETING_SMURF = "DELETING_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

export const ERROR = "ERROR";


/*   BREAKS !!!
// FOLLOW PATTERN for action creators !!!!! WATCH ENDPOINTS !!!
export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCH_DATA_START});
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data,
      })
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  })
};
 */



export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios // NOTICE DIFFERENT ENDPOINT !!!!!
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response });
    });
};


/*   ANOTHER WAY !!!
export function fetchSmurfs() {
  return function (dispatch) {
    dispatch({type: FETCH_DATA_START});
    axios.get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: response.data});
      })
      .catch (err => {
        dispatch({type: ERROR, payload: err});
      })
  }
}
 */


/*                              =>   HA !!!
export const addSmurf = (smurf) = dispatch => {
  dispatch({type: ADDING_SMURF});
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      dispatch({
        type: ADD_SMURF,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response });
    });

};
*/


export const addSmurf = (smurf) => dispatch => {
  dispatch({type: ADDING_SMURF});
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      dispatch({
        type: ADD_SMURF,
        payload: res.data
      });
    })
    .catch(err =>{                // err
      dispatch({type: ERROR, payload: err.response});
    })
};


export const deleteSmurf = (id) => dispatch => {
  dispatch({type: DELETING_SMURF});
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({
        type: ADD_SMURF,
        payload: res.data
      });
    })
    .catch(err =>{                // err
      dispatch({type: ERROR, payload: err.response});
    })
};
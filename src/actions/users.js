import * as request from "superagent";
import {baseUrl} from "../constants"

export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_PENDING_USERS= "FETCH_PENDING_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const APPROVE_USER = "APPROVE_USER";
export const DELETE_USER = "DELETE_USER"
export const FETCH_USER = "FETCH_USER";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGOUT = "USER_LOGOUT"

export const UPDATE_LOGO_SUCCESS = 'UPDATE_LOGO_SUCCESS'
export const UPDATE_LOGO_FAILED = 'UPDATE_LOGO_FAILED'
export const CLOSE_WINDOW = 'CLOSE_WINDOW'

export const fetchUsers = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/users`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCH_ALL_USERS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const fetchPendingUsers = () => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/admin/users/pending`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCH_PENDING_USERS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const closeWindow = () => { console.log("dfasdsa")
    return {
      type: CLOSE_WINDOW
    }
}



export const updateUser = (id, updates) => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

 request
   .patch(`${baseUrl}/admin/users/${id}`)
   .set("Authorization", `Bearer ${jwt}`)
   .send(updates)
   .then(response => {
      dispatch({ type: UPDATE_USER, payload: response.body})
    })
}

export const approveUser = (id, updates) => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

 request
   .patch(`${baseUrl}/admin/users/${id}/approve`)
   .set("Authorization", `Bearer ${jwt}`)
   .send(updates)
   .then(response => {
      dispatch({ type: APPROVE_USER, payload: response.body})
    })
}

export const deleteUser = (id) => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .delete(`${baseUrl}/admin/users/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => {
      dispatch({ type: DELETE_USER, payload: response.body })
    })
}

export const fetchUser = (userId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/profiles/${userId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: FETCH_USER,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const uploadLogo = (userId, picture) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/profiles/${userId}/logo`)
    .set('Authorization', `Bearer ${jwt}`)
    .attach("logo", picture)
    .then(res => {
      dispatch({
        type: UPDATE_LOGO_SUCCESS,
        payload: res.body
      })
    })
    .catch(err => {
      dispatch({
        type: UPDATE_LOGO_FAILED,
        payload: { error: err.message }
      })
    })
}

export const login = (email, password) => dispatch =>
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      });
    })
    .catch(err => {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
    });

export const signup = newUser => dispatch =>
  request
    .post(`${baseUrl}/users`)
    .send(newUser)
    .then(result => {
      dispatch({
        type: USER_SIGNUP_SUCCESS
      });
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_SIGNUP_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });

export const logout = () => ({
  type: USER_LOGOUT
});

export const updateProfile = (id, updates) => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

 request
   .patch(`${baseUrl}/profiles/${id}`)
   .set("Authorization", `Bearer ${jwt}`)
   .send(updates)
   .then(response => {
      dispatch({ type: UPDATE_PROFILE, payload: response.body})
    })
}

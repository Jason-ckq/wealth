import * as ActionTypes from './constants';

const initialState = {
  loaded: false,
  error: {},
  loggingIn: false,
  user: {},
  userNameHistory: [],
  imageVerification: '',
  needImageVerification: false,
  loginName: '',
  iosLink: ''
};

export const userNameHistory = {
  load: () => {
    let usernames = [];
    if (window.localStorage) {
      usernames = localStorage.getItem('userNameHistory') ? localStorage.getItem('userNameHistory').split(',') : [];
    }
    return usernames;
  },
  save: (username) => {
    const usernameNew = userNameHistory.load();
    if (usernameNew.indexOf(username) === -1) {
      // 记录最近5个
      if (usernameNew.length >= 5) {
        usernameNew.shift();
      }
      usernameNew.push(username);
    }
    if (usernameNew && window.localStorage) {
      usernameNew.join(',');
      localStorage.setItem('userNameHistory', usernameNew);
    }
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.LOAD:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result
      };
    case ActionTypes.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        user: {}
      };
    case ActionTypes.LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result,
        needImageVerification: false,
        error: {},
        loginName: ''
      };
    case ActionTypes.LOGIN_PARAMS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: {},
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: {},
      };
    case ActionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        user: {}
      };
    case ActionTypes.CLEAR_EXPIREDERROR:
      return {
        ...state,
        error: {},
      };
    case ActionTypes.LOAD_USERNAME_HISTORY:
      return {
        ...state,
        userNameHistory: userNameHistory.load()
      };
    case ActionTypes.LOAD_IMAGE_VERIFICATION: {
      return {
        ...state,
        imageVerification: action.imageVerification
      };
    }
    case ActionTypes.CHECK_IMAGE_VERIFICATION_SUCCESS:
      return {
        ...state,
        ...action.result
      };
    case ActionTypes.CHECK_IMAGE_VERIFICATION_FAIL:
      return {
        ...state,
        needImageVerification: false
      };
    case ActionTypes.SELECT_NAME_CHANGE:
      return { ...state, loginName: action.data };
    case ActionTypes.LOAD_IOS_LINK_SUCCESS:
      return { ...state, iosLink: `${action.result.ios_link}` };
    case ActionTypes.LOAD_IOS_LINK_FAILED:
      return { ...state, iosLink: '' };
    default:
      return state;
  }
}

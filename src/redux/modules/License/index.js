import ActionTypes from './constants';

const initialState = {
  license: {},
  authLogs: [],
  authLogParams: {
    count: 0,
    current: 1,
    pageSize: 10
  },
  authLoading: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.LICENSE_LOAD_SUCCESS:
      return { ...state, license: action.result };
    case ActionTypes.CLOUD_AUTHENTICATION_LOG_LOAD_SUCCESS:
      return {
        ...state,
        authLogs: action.result.results,
        authLogParams: {
          ...state.authLogParams,
          count: action.result.count
        }
      };
    case ActionTypes.CLOUD_AUTHENTICATION_LOG_PARAMS_SET:
      return { ...state, authLogParams: action.params };
    case ActionTypes.CLOUD_AUTHENTICATION_START:
      return { ...state, authLoading: true };
    case ActionTypes.CLOUD_AUTHENTICATION_SUCCESS:
    case ActionTypes.CLOUD_AUTHENTICATION_FAILED:
    case ActionTypes.CLOUD_AUTHENTICATION_STATUS_FAILED:
      return { ...state, authLoading: false };
    // case ActionTypes.CLOUD_AUTHENTICATION_STATUS_SUCCESS:
    //   return { ...state, authLoading: !action.result.result };
    default:
      return state;
  }
}

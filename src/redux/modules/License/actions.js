import { t } from 'i18n';
import { showUiMessage } from 'redux/modules/UiMessage/actions';
import ActionTypes from './constants';

export function loadLicense() {
  return dispatch => dispatch({
    types: [
      ActionTypes.LICENSE_LOAD,
      ActionTypes.LICENSE_LOAD_SUCCESS,
      ActionTypes.LICENSE_LOAD_FAILED
    ],
    promise: client => client.get('/license/')
  });
}

export function loadAuthLog() {
  return (dispatch, getState) => {
    const { authLogParams: { current, pageSize } } = getState().License;
    dispatch({
      types: [
        ActionTypes.CLOUD_AUTHENTICATION_LOG_LOAD,
        ActionTypes.CLOUD_AUTHENTICATION_LOG_LOAD_SUCCESS,
        ActionTypes.CLOUD_AUTHENTICATION_LOG_LOAD_FAILED
      ],
      promise: client => client.get('/cloudauthlog/', {
        params: {
          limit: pageSize || 10,
          offset: (current && pageSize) ? (current - 1) * pageSize : 0
        }
      })
    });
  };
}

export function loadAuthStatus() {
  return (dispatch, getState) => dispatch({
    types: [
      ActionTypes.CLOUD_AUTHENTICATION_STATUS,
      ActionTypes.CLOUD_AUTHENTICATION_STATUS_SUCCESS,
      ActionTypes.CLOUD_AUTHENTICATION_STATUS_FAILED
    ],
    promise: client => client.get('/manualauth/'),
    isNotLoading: true
  }).then(() => {
    const { authLoading } = getState().License;
    if (authLoading) {
      setTimeout(() => dispatch(loadAuthStatus()), 10000);
    } else {
      dispatch(loadAuthLog());
      // dispatch(loadLicense());
    }
  });
}

export function startAuth() {
  return dispatch => dispatch({
    types: [
      ActionTypes.CLOUD_AUTHENTICATION_START,
      ActionTypes.CLOUD_AUTHENTICATION_SUCCESS,
      ActionTypes.CLOUD_AUTHENTICATION_FAILED
    ],
    promise: client => client.post('/manualauth/')
  }).then(() => {
    dispatch(showUiMessage({
      message: t('手动认证成功'),
      messageType: 'success'
    }));
    // dispatch(loadLicense());
    dispatch(loadAuthLog());
  }, (res) => {
    if (res.body && res.body.message) {
      dispatch(showUiMessage({
        message: res.body.message,
        messageType: 'error'
      }));
    }
  });
}

export function setAuthLogParams(params) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CLOUD_AUTHENTICATION_LOG_PARAMS_SET,
      params
    });
    dispatch(loadAuthLog());
  };
}

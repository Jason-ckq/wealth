import { push } from 'connected-react-router';
import ApiClient from 'helpers/ApiClient';
import moment from 'moment';
import JSEncrypt from 'jsencrypt';
import { firstScreenPath } from '@/helpers/PermissionHelper';
import * as ActionTypes from './constants';
import { userNameHistory } from './index';

export function load() {
  return (dispatch) =>
    dispatch({
      types: [
        ActionTypes.LOAD,
        ActionTypes.LOAD_SUCCESS,
        ActionTypes.LOAD_FAIL,
        ActionTypes.LOAD_PARAMS_ERROR
      ],
      promise: (client) => client.get('/login/')
    });
}

export function getImageVerificationCode() {
  const client = new ApiClient();
  return (dispatch) => {
    const requestUrl = '/captcha/';
    client.get(requestUrl, { resType: 'blob' }).then((res) => {
      const blob = res.body;
      const reader = new FileReader();
      reader.onload = (e) =>
        dispatch({
          type: ActionTypes.LOAD_IMAGE_VERIFICATION,
          imageVerification: e.target.result
        });
      reader.readAsDataURL(blob);
    });
  };
}

export function checkImageVerificationCode() {
  return (dispatch, getState) => {
    const timestamp = moment().valueOf();
    dispatch({
      types: [
        ActionTypes.CHECK_IMAGE_VERIFICATION,
        ActionTypes.CHECK_IMAGE_VERIFICATION_SUCCESS,
        ActionTypes.CHECK_IMAGE_VERIFICATION_FAIL
      ],
      promise: (client) => client.get(`/checkcaptcharequirement/?${timestamp}`)
    }).then(() => {
      const { needImageVerification } = getState().Auth;
      if (needImageVerification) {
        dispatch(getImageVerificationCode());
      }
    });
  };
}

export function login(username, password, captcha) {
  return (dispatch, getState) => {
    const { infoData } = getState().CommonObject;
    const publicKey = infoData.public_key;
    const encrypted = publicKey && publicKey !== '';
    let data = {
      username,
      password,
      captcha
    };
    if (encrypted) {
      const encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicKey);
      data = {
        username,
        password: encrypt.encrypt(password),
        encrypted,
        captcha
      };
    }
    dispatch({
      types: [
        ActionTypes.LOAD,
        ActionTypes.LOGIN_SUCCESS,
        ActionTypes.LOGIN_FAIL,
        ActionTypes.LOGIN_PARAMS_ERROR
      ],
      promise: (client) =>
        client.post('/login/', {
          data,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
    }).then(
      () => {
        const { user } = getState().Auth;
        if (user && user.username) {
          userNameHistory.save(user.username);
          dispatch(push(firstScreenPath(user)));
        }
      },
      () => {
        dispatch(checkImageVerificationCode());
      }
    );
  };
}

export function logout(isLogin) {
  return (dispatch) =>
    dispatch({
      types: [
        ActionTypes.LOGOUT,
        ActionTypes.LOGOUT_SUCCESS,
        ActionTypes.LOGOUT_FAIL
      ],
      promise: (client) => client.post('/logout/')
    }).then(() => {
      if (!isLogin) {
        // dispatch(push('/login/'));
        window.location.href = '/user/logout';
      }
    });
}

export function jumpToFirstPage() {
  return (dispatch) =>
    dispatch(load()).then((user) => {
      dispatch(
        push({
          pathname: firstScreenPath(user)
        })
      );
    });
}

export function clearExpiredError() {
  return (dispatch) =>
    dispatch({
      type: ActionTypes.CLEAR_EXPIREDERROR
    });
}

export function loadUserNameHistory() {
  return (dispatch) =>
    dispatch({
      type: ActionTypes.LOAD_USERNAME_HISTORY
    });
}

export function selectSearchInput(data) {
  return (dispatch) =>
    dispatch({
      type: ActionTypes.SELECT_NAME_CHANGE,
      data
    });
}

export function loadIOSLink() {
  return (dispatch) =>
    dispatch({
      types: [
        ActionTypes.LOAD_IOS_LINK,
        ActionTypes.LOAD_IOS_LINK_SUCCESS,
        ActionTypes.LOAD_IOS_LINK_FAILED
      ],
      promise: (client) => client.get('/mobileapp/ioslink/')
    });
}

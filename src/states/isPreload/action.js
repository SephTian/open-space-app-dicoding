/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 *
 *  Note:
 *  Pada file ini tersimpan AKSI serta PAYLOAD.
 *  Selain itu, ada juga async function yang berguna untuk
 *  mengirim data yang berasal dari UI. Setelah itu, dalam
 *  function tersebut dilakukan logika data untuk dimasukkan
 *  ke dalam API. Selanjutnya dilakukan dispatch ulang sesuai
 *  action creator yang sudah dibuat serta payloadnya.
 */

import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      console.error(error.message);
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };

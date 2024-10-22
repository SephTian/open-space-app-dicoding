/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 *  Note:
 *  Pada file ini tersimpan AKSI serta PAYLOAD.
 *  Selain itu, ada juga async function yang berguna untuk
 *  mengirim data yang berasal dari UI. Setelah itu, dalam
 *  function tersebut dilakukan logika data untuk dimasukkan
 *  ke dalam API. Selanjutnya dilakukan dispatch ulang sesuai
 *  action creator yang sudah dibuat serta payloadnya.
 */

import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveTalksActionCreator } from '../talks/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndTalks() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const talks = await api.getAllTalks();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveTalksActionCreator(talks));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndTalks };

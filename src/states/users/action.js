/**
 * @TODO: Define all the actions (creator) for the users state
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
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS', //Disini register tidak masuk di action type karena dia hanya mengirimkan data ke database
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };

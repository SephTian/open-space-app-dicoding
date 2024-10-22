/**
 * @TODO: Define all the actions (creator) for the talks state
 *
 * Note:
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
  RECEIVE_TALKS: 'RECEIVE_TALKS',
  ADD_TALK: 'ADD_TALK',
  TOGGLE_LIKE_TALK: 'TOGGLE_LIKE_TALK',
};

function receiveTalksActionCreator(talks) {
  return {
    type: ActionType.RECEIVE_TALKS,
    payload: {
      talks,
    },
  };
}

function addTalkActionCreator(talk) {
  return {
    type: ActionType.ADD_TALK,
    payload: {
      talk,
    },
  };
}

function toggleLikeTalkActionCreator({ talkId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_TALK,
    payload: {
      talkId,
      userId,
    },
  };
}

function asyncAddTalk({ text, replyTo = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const talk = await api.createTalk({ text, replyTo });
      dispatch(addTalkActionCreator(talk));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleLikeTalk(talkId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
    try {
      await api.toggleLikeTalk(talkId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveTalksActionCreator, addTalkActionCreator, toggleLikeTalkActionCreator, asyncAddTalk, asyncToogleLikeTalk };
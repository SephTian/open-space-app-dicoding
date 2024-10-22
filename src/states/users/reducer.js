/* eslint-disable indent */
/**
 * @TODO: Define reducer for the users state
 *
 *  NOTE:
 *  Pada reducer akan eksekusi DISPATCH (berisi AKSI) yang telah dikirim
 *  oleh function yang ada di file action. Setelah itu, dari payload yang
 *  diterima oleh reducer akan disimpan ke dalam state.
 */

import { ActionType } from './action';

function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users;
    default:
      return users;
  }
}

export default usersReducer;

/* eslint-disable indent */
/**
 * @TODO: Define the reducer for the authUser state
 *
 *  NOTE:
 *  Pada reducer akan eksekusi DISPATCH (berisi AKSI) yang telah dikirim
 *  oleh function yang ada di file action. Setelah itu, dari payload yang
 *  diterima oleh reducer akan disimpan ke dalam state.
 */
import { ActionType } from './action';

function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;

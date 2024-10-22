/* eslint-disable indent */
/**
 * @TODO: Define reducer for the isPreLoad state
 *
 *  NOTE:
 *  Pada reducer akan eksekusi DISPATCH (berisi AKSI) yang telah dikirim
 *  oleh function yang ada di file action. Setelah itu, dari payload yang
 *  diterima oleh reducer akan disimpan ke dalam state.
 */
import { ActionType } from './action';

function isPreloadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;

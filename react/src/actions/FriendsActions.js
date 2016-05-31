import * as types from '../constants/ActionTypes';

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}

export function nameSelect(id) {
  return {
    type: types.S1_ITSME,
    id
  };
}

export function nameConfirm(id) {
  return {
    type: types.S1_CONFIRM,
    id
  };
}

export function nameDelete(id) {
  return {
    type: types.S1_DELETE,
    id
  };
}

export function nameAdd(name) {
  return {
    type: types.S1_ADD,
    name
  };
}

export function selectPayer(id) {
  return {
    type: types.S2_SELECTPAYER,
    id
  };
}

export function selectPayer(id,amount) {
  return {
    type: types.S2_INPUTPAYER,
    id,
    amount
  };
}

export function selectPayee(id) {
  return {
    type: types.S3_SELECTPAYEE,
    id
  };
}

export function selectPayer() {
  return {
    type: types.S4_FINALIZE
  };
}


export function pay(id) {
  return {
    type: types.SX_IPAY,
    id
  };
}




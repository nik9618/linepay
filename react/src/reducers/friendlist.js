import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  meID:2,
  meName:'Kanit',
  nameConfirmation: 2,
  friends: [1, 2, 3, 4],
  friendsById: {
    1: {
      id: 1,
      name: 'Komthep',
    },
    2: {
      id: 2,
      name: 'Kanit',
    },
    3: {
      id: 3,
      name: 'PanJ',
    },
    4: {
      id: 4,
      name: 'Sarawoot',
    }
  },
  payers: [1,2],
  payersById: {
    1:{id:1, amount:100},
    2:{id:2, amount:200}
  },
  payees: [1,2,3],
  isFinalized: true,
  transactions:[
    [1,2,23301,0],
    [2,3,23302,1],
    [3,4,23303,0],
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    
    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        },
      }

    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: omit(state.friendsById, action.id)
      }

    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: mapValues(state.friendsById, (friend) => {
          return friend.id === action.id ?
            assign({}, friend, { starred: !friend.starred }) :
            friend
        })
      }

    default:
      return state;
  }
}

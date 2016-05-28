import React, { Component, PropTypes } from 'react';
import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FriendsActions from '../actions/FriendsActions';
import { YouAre, FriendList, AddFriendInput, SelectFriendList, AmountPaid} from '../components';


@connect(state => ({
  friendlist: state.friendlist
}))

export default class Step1_Addfrien extends Component {

  static propTypes = {
    friendsById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { friendlist: { friendsById }, dispatch } = this.props;
    const actions = bindActionCreators(FriendsActions, dispatch);

    return (
      <div>
        <div className={styles.friendListApp}>
          <h1>1. Who are you ?</h1>
          <YouAre />
          <FriendList friends={friendsById} actions={actions} />
          <AddFriendInput addFriend={actions.addFriend} />
        </div>
        <div className={styles.friendListApp}>
          <h1>2. Payer</h1>
          <AmountPaid friends={friendsById} actions={actions} />
          <SelectFriendList friends={friendsById} actions={actions} />
          <AddFriendInput addFriend={actions.addFriend} />
        </div>
        <div className={styles.friendListApp}>
          <h1>3. Payee</h1>
          <AddFriendInput addFriend={actions.addFriend} />
        </div>
      </div>
    );
  }
}

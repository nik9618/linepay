import React, { Component, PropTypes } from 'react';
import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FriendsActions from '../actions/FriendsActions';
import { MyPayment, TotalPayment, FinalButton, Summarize, YouAre, FriendList, AddFriendInput, SelectFriendList, AmountPaid} from '../components';


@connect(state => ({
  currentstate: state.appstate,
}))

export default class LinePay extends Component {

  static propTypes = {
    friendsById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {

    const { currentstate: { transactions,isFinalized,payees,payers,payersById,friendsById,meName,meID,nameConfirmation }, dispatch } = this.props;
    const actions = bindActionCreators(FriendsActions, dispatch);
    var sum = 0;
    for(var i=0; i<payers.length;i++)
    {
      sum+=payersById[payers[i]].amount;
    }
    return (
      <div>
        <div className={styles.friendListApp}>
          <h1>1. Who are you ?</h1>
          {meID!=-1?  <YouAre name={meName}/>: null}
          <FriendList friends={friendsById} nameConf={nameConfirmation} actions={actions} />
          <AddFriendInput addFriend={actions.addFriend} />
        </div>
        <div className={styles.friendListApp}>
          <h1>2. Payer</h1>
          <AmountPaid payersID={payers} payers={payersById} friends={friendsById} actions={actions} />
          <SelectFriendList selectedID={payers} friends={friendsById} actions={actions} />
          <AddFriendInput addFriend={actions.addFriend} />
        </div>
        <div className={styles.friendListApp}>
          <h1>3. Payee</h1>
          <Summarize number={payees.length} each={sum/payees.length}/>
          <SelectFriendList selectedID={payees} friends={friendsById} actions={actions} />
          <AddFriendInput addFriend={actions.addFriend} />
        </div>
        <div className={styles.friendListApp}>
          <h1>4.Finalize</h1>
          <FinalButton finalized={isFinalized} />
        </div>
        <div className={styles.friendListApp}>
          <h1>Payment Information</h1>
          <MyPayment currentName={meName} currentId={meID} friends={friendsById} transactions={transactions}/>
          <TotalPayment friends={friendsById} transactions={transactions}/>
        </div>
      </div>
    );
  }
}

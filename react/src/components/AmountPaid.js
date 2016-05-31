import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './AmountPaid.css';
import AmountPaidItem from './AmountPaidItem';
import NoSelection from './NoSelection';

export default class AmountPaid extends Component {
  static propTypes = {
    friends: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <ul className={styles.friendList}>
        {this.props.payers.length == 0 ? <NoSelection /> : null}
        {
          mapValues(this.props.payersID, (pid) => {
            return (<AmountPaidItem
              key={pid}
              id={pid}
              name={this.props.friends[pid].name}
              amount={this.props.payers[pid].amount}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }

}

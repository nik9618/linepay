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
        <NoSelection />
        {
          mapValues(this.props.friends, (friend) => {
            return (<AmountPaidItem
              key={friend.id}
              id={friend.id}
              name={friend.name}
              starred={friend.starred}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }

}

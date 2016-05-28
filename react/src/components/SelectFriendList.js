import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './SelectFriendList.css';
import SelectFriendListItem from './SelectFriendListItem';

export default class SelectFriendList extends Component {
  static propTypes = {
    friends: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className={styles.selectFriendList}>
        {
          mapValues(this.props.friends, (friend) => {
            return (<SelectFriendListItem
              key={friend.id}
              id={friend.id}
              name={friend.name}
              starred={friend.starred}
              {...this.props.actions} />);
          })
        }
      </div>
    );
  }

}

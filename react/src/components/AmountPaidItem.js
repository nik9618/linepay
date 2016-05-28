import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AmountPaidItem.css';

export default class FriendListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.boolean,
    starFriend: PropTypes.func.isRequired,
    onTrashClick: PropTypes.func.isRequired
  }

  render () {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
        </div>
        <div>
          <div className={styles.friendActions}>
            <input className={styles.inputBox} type="number" pattern="[0-9]"/> บาท
          </div>
        </div>
      </li>
    );
  }
}

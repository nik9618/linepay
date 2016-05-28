import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './SelectFriendListItem.css';

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
      <div className={styles.selectFriendListItem}>
        <i className={`${styles.chkbox} fa fa-check-square-o`} aria-hidden="true"></i>
        <span className={`${styles.name}`}>{this.props.name}</span>
      </div>
    );
  }
}

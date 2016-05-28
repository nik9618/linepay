import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

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
            <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.starFriend(this.props.id)}>
              It's me
            </button>
            <button className={`btn btn-success ${styles.btnAction} ${styles.btnDel}`} onClick={() => this.props.starFriend(this.props.id)}>
              Confirm
            </button>
            <button className={`btn btn-danger ${styles.btnAction} ${styles.btnConf}`} onClick={() => this.props.starFriend(this.props.id)}>
              Delete 
            </button>
          </div>
        </div>
      </li>
    );
  }
}

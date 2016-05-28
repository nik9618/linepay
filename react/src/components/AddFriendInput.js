import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

export default class AddFriendInput extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={styles.addFriendLine}>
        <a href="#">
          Add More <strong>+</strong>
        </a>
      </div>
    );
  }
}

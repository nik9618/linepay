import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './YouAre.css';

export default class YouAre extends Component {
  render () {
    return (
      <div className={styles.youAreLine}>
        <span>You are <strong>Komthep</strong>. Not you?</span>
      </div>
    );
  }
}

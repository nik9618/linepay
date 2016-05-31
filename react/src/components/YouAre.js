import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './YouAre.css';

export default class YouAre extends Component {
  static propTypes = {
    name: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className={styles.youAreLine}>
        <span>You are <strong>{this.props.name}</strong>. Not you?</span>
      </div>
    );
  }
}

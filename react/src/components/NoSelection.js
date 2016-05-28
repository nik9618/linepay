import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './noSelection.css';

export default class NoSelection extends Component {
  render () {
    return (
      <div className={styles.noSelectionLine}>
        <span>Please select payer :)</span>
      </div>
    );
  }
}

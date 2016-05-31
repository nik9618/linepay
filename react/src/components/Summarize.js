import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './summarize.css';

export default class Summarize extends Component {
  render () {
    return (
      <div className={styles.summarizeLine}>
        <span>{this.props.number} คน,  <strong><u>{this.props.each} บาท/คน</u></strong> </span>
      </div>
    );
  }
}

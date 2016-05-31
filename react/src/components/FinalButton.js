import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FinalButton.css';

export default class FinalButton extends Component {
  render () {
    return (
      <div className={styles.finalButtonLine}>
		 {this.props.finalized===false?<button type="button" className={`btn btn-success`}> Finalize !</button> : <span><strong>Finalized !</strong></span>}
      </div>
    );
  }
}

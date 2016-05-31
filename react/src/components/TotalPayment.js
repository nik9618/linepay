import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './TotalPayment.css';
import mapValues from 'lodash/object/mapValues';

export default class TotalPayment extends Component {
  render () {
    return (
      <div className={styles.totalPaymentLine}>
        <div className={styles.first}>Total Payment :</div>
      	{
      		mapValues(this.props.transactions, (tran) => {
      			if(tran[3]==0){
      				return (
				      	<div className={styles.second}>
					        <div className={styles.payline}>
					        	<div className={styles.payer}>{this.props.friends[tran[0]].name}</div>
					        	<div className={styles.payee}>
					        	<i className={`glyphicon glyphicon-arrow-right`}/> {this.props.friends[tran[1]].name}</div>
					        	<div className={styles.money}>{tran[2]} ฿</div>
					        	<div className={styles.status}>PENDING</div>
					        </div>
				        </div>
				    );
		      	}
		      	else
		      	{
		      		return null;
		      	}
    		})
    	}
    	<br/>
    	{
      		mapValues(this.props.transactions, (tran) => {
      			if(tran[3]==1){
		      		return (
				      	<div className={styles.second}>
					        <div className={styles.payline}>
					        	<div className={styles.payer}>{this.props.friends[tran[0]].name}</div>
					        	<div className={styles.payee}>
					        	<i className={`glyphicon glyphicon-arrow-right`}/> {this.props.friends[tran[1]].name}</div>
					        	<div className={styles.money}>{tran[2]} ฿</div>
					        	<div className={styles.status}>DONE</div>
					        </div>
				        </div>
				    );
		      	}
		      	else
		      	{
		      		return null;
		      	}
    		})
    	}
      </div>
    );
  }
}

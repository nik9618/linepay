import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './MyPayment.css';
import mapValues from 'lodash/object/mapValues';

export default class MyPayment extends Component {
  render () {
    var count =0;
  	for(var i=0;i<this.props.transactions.length;i++)
  	{
  		if(this.props.currentId == this.props.transactions[i][0] && this.props.transactions[i][3] == 0)
  		{
  			count++;
  		}
  	}
  	return (
      <div className={styles.myPaymentLine}>
        <div className={styles.first}>Kanit จ่าย :</div>
        {
          mapValues(this.props.transactions, (tran) => {
			if(this.props.currentId == tran[0] && tran[3] == 0)
			{
				return (
			        <div className={styles.second}>
				        <div className={styles.payline}>
				        	<div className={styles.payer}>{this.props.friends[tran[1]].name}</div>
				        	<div className={styles.amount}>{tran[2]} ฿</div>
				        	<div className={styles.paidBtn}>
				        		<button className={`btn btn-primary`}>Paid</button>
				        	</div>
				        </div>
			        </div>
		      	);
			}
			else
				return null
		  })
	    }
	    {count==0 ? <span>Nothing to pay</span> : null}
      </div>
    );
  }
}

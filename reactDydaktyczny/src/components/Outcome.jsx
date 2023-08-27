import React from 'react';
import styles from './Outcome.module.css';

const Outcome = ({ count }) => {
	return(
		<div className={styles.counter}>{count}</div>
	);
}

export default Outcome;
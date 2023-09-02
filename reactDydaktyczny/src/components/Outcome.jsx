import styles from './Outcome.module.css';

// eslint-disable-next-line react/prop-types
const Outcome = ( { count } ) => {
	return(
		<div className={styles.counter}>{count}</div>
	);
}

export default Outcome;
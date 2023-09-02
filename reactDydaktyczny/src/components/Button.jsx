import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ( {inscription, onClick} ) => {
	
	return (
		<button className={styles.button} onClick={onClick}>{inscription}</button>
	);
}

export default Button;
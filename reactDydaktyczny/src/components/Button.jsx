import React from 'react';
import styles from './Button.module.css';

const Button = ( { inscription, onClick } ) => {
	
	return (
		<button className={styles.button} onClick={onClick}>{inscription}</button>
	);
}

export default Button;
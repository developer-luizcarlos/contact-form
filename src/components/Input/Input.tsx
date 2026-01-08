import styles from "./input.module.css";

import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	hasError: boolean;
}

const Input: React.FC<InputProps> = ({hasError, ...rest}) => {
	return (
		<input
			{...rest}
			className={`${styles.input} ${hasError && styles.inputError}`}
		/>
	);
};

export default Input;

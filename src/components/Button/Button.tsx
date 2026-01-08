import styles from "./button.module.css";

import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

const Button: React.FC<ButtonProps> = ({label, ...rest}) => {
	return (
		<button {...rest} className={`${styles.btn}`}>
			{label}
		</button>
	);
};

export default Button;

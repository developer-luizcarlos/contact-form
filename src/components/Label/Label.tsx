import styles from "./label.module.css";

import {LabelHTMLAttributes} from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	isRequired?: boolean;
	label: string;
}

const Label: React.FC<LabelProps> = ({
	isRequired = false,
	label,
	...rest
}) => {
	return (
		<label
			{...rest}
			className={`${styles.label} ${isRequired && styles.labelRequired}`}
		>
			{label}
		</label>
	);
};

export default Label;

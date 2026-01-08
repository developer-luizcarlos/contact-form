import styles from "./textArea.module.css";

import {TextareaHTMLAttributes} from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	hasError: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({hasError, ...rest}) => {
	return (
		<textarea
			{...rest}
			className={`${styles.textArea} ${hasError && styles.textAreaError}`}
		></textarea>
	);
};

export default TextArea;

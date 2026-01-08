import styles from "./inlineError.module.css";

interface InlineErrorProps {
	isVisible: boolean;
	label: string;
}

const InlineError: React.FC<InlineErrorProps> = ({isVisible, label}) => {
	return (
		<p
			className={`${styles.inlineError} ${!isVisible && styles.inlineErrorHidden}`}
		>
			{label}
		</p>
	);
};

export default InlineError;

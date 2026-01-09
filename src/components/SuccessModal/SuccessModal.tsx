import styles from "./successModal.module.css";

import successIcon from "../../../images/icon-success-check.svg";

import Image from "next/image.js";

const SuccessModal: React.FC = () => {
	return (
		<div className={`${styles.successModal}`}>
			<header className={`${styles.successHeader}`}>
				<Image
					src={successIcon}
					alt="success icon"
					height={0}
					width={0}
					className={`${styles.successIcon}`}
				/>
				<h1 className={`${styles.successTitle}`}>Message Sent!</h1>
			</header>
			<p className={`${styles.successMessage}`}>
				Thanks for completing the form. We&apos;ll be in touch soon!
			</p>
		</div>
	);
};

export default SuccessModal;

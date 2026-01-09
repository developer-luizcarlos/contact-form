"use client";

import styles from "./page.module.css";

import {ChangeEvent, useState} from "react";

import Button from "@/components/Button/Button";
import InlineError from "@/components/InlineError/InlineError";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import SuccessModal from "@/components/SuccessModal/SuccessModal";
import TextArea from "@/components/TextArea/TextArea";

const Home: React.FC = () => {
	// States
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [queryType, setQueryType] = useState("");
	const [message, setMessage] = useState("");
	const [isConsent, setIsConsent] = useState(false);

	const [isFirstNameErrorVisible, setIsFirstNameErrorVisible] =
		useState(false);
	const [isLastNameErrorVisible, setIsLastNameErrorVisible] =
		useState(false);
	const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
	const [isQueryErrorVisible, setIsQueryErrorVisible] = useState(false);
	const [isMessageErrorVisible, setIsMessageErrorVisible] =
		useState(false);
	const [isCheckboxErrorVisible, setIsCheckboxErrorVisible] =
		useState(false);

	const [shouldShowSuccessModal, setShouldShowSuccessModal] =
		useState(false);

	// Helpers
	const clearFormData = (): void => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setQueryType("");
		setMessage("");
		setIsConsent(false);

		setIsFirstNameErrorVisible(false);
		setIsLastNameErrorVisible(false);
		setIsEmailErrorVisible(false);
		setIsQueryErrorVisible(false);
		setIsMessageErrorVisible(false);
		setIsCheckboxErrorVisible(false);
	};

	const isValidFirstName = (firstName: string): boolean => {
		return firstName.trim() !== "";
	};

	const isValidLastName = (lastName: string): boolean => {
		return lastName.trim() !== "";
	};

	const isValidEmail = (email: string): boolean => {
		const validEmailRegex = /^[a-z]+(\.)?[a-z]+@[a-z]+\.[a-zA-Z]{2,10}$/;

		const isValid = validEmailRegex.test(email) && email.trim() !== "";

		return isValid;
	};

	const isValidQueryType = (queryType: string): boolean => {
		return queryType.trim() !== "";
	};

	const isValidMessage = (message: string): boolean => {
		return message.trim() !== "";
	};

	const isValidCheckbox = (isConsent: boolean): boolean => {
		return isConsent;
	};

	// Handlers
	const handleFirstNameInputChange = (
		event: ChangeEvent<HTMLInputElement>,
	): void => {
		const value = event.target.value;

		setFirstName(value);

		setIsFirstNameErrorVisible(!isValidFirstName(value));
	};

	const handleLastNameInputChange = (
		event: ChangeEvent<HTMLInputElement>,
	): void => {
		const value = event.target.value;

		setLastName(value);

		setIsLastNameErrorVisible(!isValidLastName(value));
	};

	const handleEmailInputChange = (
		event: ChangeEvent<HTMLInputElement>,
	): void => {
		const value = event.target.value;

		setEmail(value);

		setIsEmailErrorVisible(!isValidEmail(value));
	};

	const handleInputRadioChange = (
		event: ChangeEvent<HTMLInputElement>,
	): void => {
		const value = event.target.value;

		setQueryType(value);

		setIsQueryErrorVisible(false);
	};

	const handleTextAreaChange = (
		event: ChangeEvent<HTMLTextAreaElement>,
	): void => {
		const value = event.target.value;

		setMessage(value);

		setIsMessageErrorVisible(!isValidMessage(value));
	};

	const handleInputCheckBoxChange = (
		event: ChangeEvent<HTMLInputElement>,
	): void => {
		const isChecked = event.target.checked;

		setIsConsent(isChecked);

		setIsCheckboxErrorVisible(false);
	};

	const handleSubmitButtonClick = () => {
		const conditions = [
			isValidFirstName(firstName),
			isValidLastName(lastName),
			isValidEmail(email),
			isValidQueryType(queryType),
			isValidMessage(message),
			isValidCheckbox(isConsent),
		];

		const canSubmit = conditions.every(cond => cond);

		if (canSubmit) {
			setShouldShowSuccessModal(true);

			clearFormData();

			return;
		}

		// must be ordered in the same way
		// the conditions were ordered for
		// the correct error setter be triggred.
		const errorSetters = [
			setIsFirstNameErrorVisible,
			setIsLastNameErrorVisible,
			setIsEmailErrorVisible,
			setIsQueryErrorVisible,
			setIsMessageErrorVisible,
			setIsCheckboxErrorVisible,
		];

		// Triggers the respective error setter.
		[...conditions].forEach((cond, idx) => {
			if (!cond) {
				errorSetters[idx](true);
			}
		});
	};

	return (
		<>
			{shouldShowSuccessModal && <SuccessModal />}
			<form
				action="#"
				className={`${styles.form}`}
				onSubmit={e => e.preventDefault()}
				onFocus={() => {
					if (shouldShowSuccessModal) {
						setShouldShowSuccessModal(false);
					}
				}}
			>
				<header className={`${styles.footerHeader}`}>
					<h1 className={`${styles.formTitle}`}>Contact Us</h1>
				</header>
				<main className={`${styles.formMain}`}>
					<div className={`${styles.row}`}>
						<div className={`${styles.formField}`}>
							<Label
								label="First Name"
								htmlFor="input-first-name"
								isRequired={true}
							/>
							<Input
								hasError={isFirstNameErrorVisible}
								id="input-first-name"
								type="text"
								autoFocus={true}
								value={firstName}
								onChange={handleFirstNameInputChange}
							/>
							<InlineError
								label="This field is required"
								isVisible={isFirstNameErrorVisible}
							/>
						</div>
						<div className={`${styles.formField}`}>
							<Label
								label="Last Name"
								htmlFor="input-last-name"
								isRequired={true}
							/>
							<Input
								hasError={isLastNameErrorVisible}
								id="input-last-name"
								type="text"
								value={lastName}
								onChange={handleLastNameInputChange}
							/>
							<InlineError
								label="This field is required"
								isVisible={isLastNameErrorVisible}
							/>
						</div>
					</div>
					<div className={`${styles.formField}`}>
						<Label
							label="Email Address"
							htmlFor="input-email"
							isRequired={true}
						/>
						<Input
							hasError={isEmailErrorVisible}
							id="input-email"
							type="email"
							title="example@host.com"
							value={email}
							onChange={handleEmailInputChange}
						/>
						<InlineError
							label="Please, enter a valid email address"
							isVisible={isEmailErrorVisible}
						/>
					</div>
					<div className={`${styles.formField}`}>
						<Label label="Query Type" isRequired={true} />
						<div className={`${styles.row}`}>
							<div className={`${styles.radioWrapper}`}>
								<input
									type="radio"
									name="query"
									id="radio-general"
									value={"general"}
									checked={queryType === "general"}
									className={`${styles.radio}`}
									onChange={handleInputRadioChange}
								/>
								<Label label="General Enquiry" htmlFor="radio-general" />
							</div>
							<div className={`${styles.radioWrapper}`}>
								<input
									type="radio"
									name="query"
									id="radio-support"
									value={"support"}
									checked={queryType === "support"}
									className={`${styles.radio}`}
									onChange={handleInputRadioChange}
								/>
								<Label label="Support Request" htmlFor="radio-support" />
							</div>
						</div>
						<InlineError
							label="Please, select a query type"
							isVisible={isQueryErrorVisible}
						/>
					</div>
					<div className={`${styles.formField}`}>
						<Label label="Message" htmlFor="textarea" isRequired={true} />
						<TextArea
							hasError={isMessageErrorVisible}
							id="textarea"
							value={message}
							onChange={handleTextAreaChange}
						/>
						<InlineError
							label="This field is required"
							isVisible={isMessageErrorVisible}
						/>
					</div>
					<div className={`${styles.formField}`}>
						<div className={`${styles.row}`}>
							<input
								type="checkbox"
								name="checkbox-consent"
								id="checkbox-consent"
								value={"consent"}
								checked={isConsent}
								className={`${styles.checbox}`}
								onChange={handleInputCheckBoxChange}
							/>
							<Label
								label="I consent to being contacted by the team"
								htmlFor="checkbox-consent"
								isRequired={true}
							/>
						</div>
						<InlineError
							label="To submit this form, please, consent to being contacted"
							isVisible={isCheckboxErrorVisible}
						/>
					</div>
				</main>
				<footer className={`${styles.formFooter}`}>
					<Button label="Submit" onClick={handleSubmitButtonClick} />
				</footer>
			</form>
		</>
	);
};

export default Home;

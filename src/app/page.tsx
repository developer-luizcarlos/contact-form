"use client";

import styles from "./page.module.css";

import Button from "@/components/Button/Button";
import InlineError from "@/components/InlineError/InlineError";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import TextArea from "@/components/TextArea/TextArea";

const Home: React.FC = () => {
	return (
		<>
			<form
				action="#"
				className={`${styles.form}`}
				onSubmit={e => e.preventDefault()}
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
							<Input hasError={false} id="input-first-name" type="text" />
							<InlineError
								label="This field is required"
								isVisible={false}
							/>
						</div>
						<div className={`${styles.formField}`}>
							<Label
								label="Last Name"
								htmlFor="input-last-name"
								isRequired={true}
							/>
							<Input hasError={false} id="input-last-name" type="text" />
							<InlineError
								label="This field is required"
								isVisible={false}
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
							hasError={false}
							id="input-email"
							type="email"
							title="example@host.com"
							pattern="^[a-z]+(\.)?[a-z]+@[a-z]+\.[a-zA-Z]{2,3}$"
						/>
						<InlineError
							label="Please, enter a valid email address"
							isVisible={false}
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
									className={`${styles.radio}`}
								/>
								<Label label="General Enquiry" htmlFor="radio-general" />
							</div>
							<div className={`${styles.radioWrapper}`}>
								<input
									type="radio"
									name="query"
									id="radio-support"
									value={"support"}
									className={`${styles.radio}`}
								/>
								<Label label="Support Request" htmlFor="radio-support" />
							</div>
						</div>
						<InlineError
							label="Please, select a query type"
							isVisible={false}
						/>
					</div>
					<div className={`${styles.formField}`}>
						<Label label="Message" htmlFor="textarea" isRequired={true} />
						<TextArea hasError={false} id="textarea" />
						<InlineError
							label="This field is required"
							isVisible={false}
						/>
					</div>
					<div className={`${styles.formField}`}>
						<div className={`${styles.row}`}>
							<input
								type="checkbox"
								name="checkbox-consent"
								id="checkbox-consent"
								value={"consent"}
								className={`${styles.checbox}`}
							/>
							<Label
								label="I consent to being contacted by the team"
								htmlFor="checkbox-consent"
								isRequired={true}
							/>
						</div>
						<InlineError
							label="To submit this form, please, consent to being contacted"
							isVisible={false}
						/>
					</div>
				</main>
				<footer className={`${styles.formFooter}`}>
					<Button label="Submit" />
				</footer>
			</form>
		</>
	);
};

export default Home;

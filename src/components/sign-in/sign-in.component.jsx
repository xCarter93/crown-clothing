import { useState } from "react";
import {
	signInUserWithEmailAndPassword,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./sign-in.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect Email or Password, please try again.");
					break;
				case "auth/user-not-found":
					alert("User Does not Exist, please try again.");
					break;
				default:
					console.error(`User sign in encountered an error: ${error}`);
					break;
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	return (
		<>
			<div className="sign-up-container">
				<h2>Already have an account?</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={handleSubmit}>
					<FormInput
						label="Email"
						type="email"
						required
						name="email"
						onChange={handleChange}
						value={email}
					/>
					<FormInput
						label="Password"
						type="password"
						required
						name="password"
						onChange={handleChange}
						value={password}
					/>
					<div className="buttons-container">
						<Button type="submit">Sign In</Button>
						<Button
							type="button"
							buttonType={BUTTON_TYPE_CLASSES.google}
							onClick={signInWithGoogle}
						>
							Sign In With Google
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignInForm;

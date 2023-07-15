import { useState } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.component";

const SignIn = () => {
	useState(async () => {
		const response = await getRedirectResult(auth);
		if (response) {
			const userDocRef = await createUserDocumentFromAuth(response.user);
		}
	}, []);
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In With Google Popup</button>
			<SignUpForm />
		</>
	);
};

export default SignIn;

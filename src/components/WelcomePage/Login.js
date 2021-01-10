import { Magic } from "magic-sdk";
const m = new Magic("pk_test_5E8A26FACB5A436B"); // ✨

function Login() {
	return (
		<>
			<div className="spacer"></div>
			<div className="Login">
				<h1>Welcome back</h1>
				<input id="loginInput" placeholder="Enter your email" type="text" />
				<input
					id="loginSubmitBtn"
					onClick={loginHandler}
					type="submit"
					value="Login"
				/>
			</div>
		</>
	);
}

function loginHandler(event) {
	event.preventDefault();
	let email = document.getElementById("loginInput").value;
	const redirectURI = `${window.location.origin}/callback`;

	if (email) {
		m.auth.loginWithMagicLink({ email, redirectURI });
	}
}
export default Login;

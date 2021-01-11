import useAuth from "../../hooks/useAuth";

function Login() {
	const auth = useAuth();
	async function loginNow() {
		try {
			const email = document.getElementById("loginSubmitBtn").value;
			if (email) await auth.login(email);
			else console.log("no email!");
		} catch (err) {
			console.error(err);
			// maybe updat some sort of state to let the user know that it failed =]
		}
	}

	return (
		<>
			<div className="spacer"></div>
			<div className="Login">
				<h1>Welcome back</h1>
				<input id="loginInput" placeholder="Enter your email" type="text" />
				<input
					id="loginSubmitBtn"
					onClick={loginNow}
					type="submit"
					value="Login"
				/>
			</div>
		</>
	);
}

export default Login;

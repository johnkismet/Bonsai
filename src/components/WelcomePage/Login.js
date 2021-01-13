import useAuth from "../../hooks/useAuth";
import "./Welcome.css";

function Login() {
	const auth = useAuth();
	document.addEventListener("keydown", (e) => {
		if (e.code === "Enter") loginNow();
	});

	async function loginNow(e) {
		try {
			const email = document.getElementById("loginInput").value;
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
			<div id="login" className="Login">
				<h1>Login / Register</h1>
				<input id="loginInput" placeholder="Enter your email" type="text" />
				<input
					id="loginSubmitBtn"
					onClick={loginNow}
					type="submit"
					value="Login"
				/>
			</div>
			<div className="spacer"></div>
		</>
	);
}

export default Login;

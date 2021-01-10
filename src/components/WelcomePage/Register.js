const url =
	process.env.NODE_ENV === "production"
		? "https://bonsai-one.vercel.app"
		: "http://localhost:3000";

function Register() {
	return (
		<>
			<div className="spacer"></div>
			<div className="Login">
				<h1>Welcome to Bonsai</h1>
				<input id="loginInput" placeholder="Enter your email" type="text" />
				<input
					id="loginSubmitBtn"
					onClick={registerHandler}
					type="submit"
					value="Register"
				/>
			</div>
		</>
	);
}

function registerHandler(e) {
	window.location.replace(`${url}/introduction`);
}
export default Register;

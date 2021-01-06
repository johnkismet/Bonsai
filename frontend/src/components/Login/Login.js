import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./Login.css";

function Login(props) {
	return (
		<div className="Login">
			<div className="spacer">BONSAI</div>
			<div className="loginContainer">
				<Link to="/register" className="register">
					REGISTER
				</Link>
				<Link to="/login" className="login">
					LOGIN
				</Link>
			</div>
			<div className="spacer"></div>
		</div>
	);
}
export default Login;

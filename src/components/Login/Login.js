import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/dev assets/simpleTree.png";

function Login(props) {
	return (
		<div className="Login">
			<div className="spacer"></div>
			<div className="loginContainer">
				<div className="logoContainer">
					<img width="150px" src={logo} alt="Tree logo" srcset="" />
					<h1 className="loginBonsai">BONSAI</h1>
				</div>

				<Link to="/treefarm" className="register">
					REGISTER
				</Link>
				<Link to="/treefarm" className="login">
					LOGIN
				</Link>
			</div>
			<div className="spacer"></div>
		</div>
	);
}
export default Login;

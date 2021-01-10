import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/*
 * ConnectedRoute is a component that renders Routes for you
 * It uses the useAuth hook to determine if a route should be rendered
 * or redirected else where based on the auth status
 */
export default function ConnectedRoute({
	isProtected,
	redirectIfAuthenticated,
	component: ComponentToRender,
	...rest
}) {
	if (!ComponentToRender) {
		throw new Error("ConnectedRoute MUST have a prop named 'component'");
	}

	const auth = useAuth();

	if (redirectIfAuthenticated && auth.loggedIn) {
		return (
			<Route
				{...rest}
				render={({ location }) => (
					<Redirect
						to={{
							// where should a user initially go if they are logged in and they
							// are on a page that has a redirectIfAuthenticated flag
							pathname: `/dashboard`,
							state: { from: location },
						}}
					/>
				)}
			/>
		);
	}

	if (isProtected === null || (isProtected && auth.loggedIn)) {
		// either you dont care if this is protected or not so render page
		// or you do care and you are logged in so render page
		return (
			<Route
				{...rest}
				render={(renderedProps) => <ComponentToRender {...renderedProps} />}
			/>
		);
	}

	// you shouldnt be on this page so redirect to the / route

	return (
		<Route
			{...rest}
			render={({ location }) => (
				<Redirect
					to={{
						pathname: `/`,
						state: { from: location },
					}}
				/>
			)}
		/>
	);
}

ConnectedRoute.defaultProps = {
	isProtected: null,
};

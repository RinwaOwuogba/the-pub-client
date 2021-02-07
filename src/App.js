/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home/Home';

import './App.css';
import useStore from './zustand';

const ProtectedRoute = ({ Comp, auth, redirectUrl, ...props }) => {
	if (auth) {
		return (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<Comp {...props} />
		);
	}

	return <Redirect to={redirectUrl || '/'} />;
};

const App = () => {
	const setLoggedInUser = useStore((state) => state.setUser);
	const [isLoggedIn, setLoggedIn] = useState(true);

	const logUserIn = (userObj, accessToken) => {
		localStorage.setItem('x-access-token', accessToken);
		setLoggedIn(true);
		setLoggedInUser(userObj);
	};

	return (
		<ChakraProvider>
			<Router>
				<Switch>
					<Route
						path='/signup'
						exact
						render={(props) => <Signup {...props} logUserIn={logUserIn} />}
					/>
					<ProtectedRoute path='/home' exact auth={isLoggedIn} Comp={Home} />
					<Route
						path='/'
						render={(props) => <Login logUserIn={logUserIn} {...props} />}
					/>
				</Switch>
			</Router>
		</ChakraProvider>
	);
};

export default App;

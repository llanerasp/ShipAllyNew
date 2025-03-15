import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Blog from './views/Blog';
import News from './views/News';
import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/register'
					element={<Register />}
				/>
				<Route
					path='/blog'
					element={<Blog />}
				/>
				<Route
					path='/news'
					element={<News />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

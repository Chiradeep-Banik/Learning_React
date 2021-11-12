import React from 'react';
import Form from './components/form';
import List from './components/list';
import Home from './components/Home';
import NotFound from './components/not_found';
import Hooks from './components/hooks';
import Todo from './components/todo';
import Contex from './components/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/form" element={<Form />} />
				<Route path="/list/:arr" element={<List lis={[1, 3, 4]} />} />
				<Route path="/hooks" element={<Hooks />} />
				<Route path="/todo" element={<Todo/>}/>
				<Route path="/context" element={<Contex/>}/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;

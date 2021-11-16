import React, { useState } from 'react';
import Header from './components/header';
import Movies from './components/movies';

function App() {
	const [searchMovie, setSearchMovie] = useState('');
	return (
		<div>
			<Header mov={searchMovie} setMov={setSearchMovie} />
			<Movies mov={searchMovie} setMov={setSearchMovie} />
		</div>
	);
}

export default App;

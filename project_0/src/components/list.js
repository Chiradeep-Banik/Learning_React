import React from 'react';
import Nav from './nav';
import { useParams } from 'react-router-dom';

function List(props) {
	const params = useParams();
	console.log(params);
	return (
		<div>
			<Nav />
			<h1>List {params.arr}</h1>
			<ul>
				{props.lis.map(item => <li key={item + 2}>{item}</li>)}
			</ul>
		</div>
	);
}

export default List;
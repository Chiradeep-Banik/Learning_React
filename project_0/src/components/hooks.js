import React, { useRef, useEffect, useState } from 'react';
import Nav from './nav';

export default function Hooks() {
	const h1_ref = useRef();
	const [count, setCount] = useState(0);
	const colors = ['red', 'green', 'blue', 'black'];
	useEffect(() => {
		console.log(h1_ref);
		h1_ref.current.style.color = colors[Math.floor(Math.random() * colors.length)];
    }, [count, count]);
	function update_count() {
		setCount(count + 1);
	}
	return (
		<div>
			<Nav />
			<h1 ref={h1_ref} onClick={update_count}>ClickMe&gt;Hooks {count}</h1>
		</div>
	);
}
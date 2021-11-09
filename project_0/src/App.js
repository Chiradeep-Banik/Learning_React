import React from "react";
import Form from "./form";
import List from "./list";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
	return (
		<Form place="hellooooooooo">
			<h1>Hello children</h1>
			<ul>
				<List lis={[1, 2, 3]} />
			</ul>
		</Form>
	);
}

export default App;

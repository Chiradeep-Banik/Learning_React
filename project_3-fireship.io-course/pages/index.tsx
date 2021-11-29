import { NextPage } from 'next';
import HeadTag from '../components/head';


const Home: NextPage = () => {

	return (
		<div>
			<HeadTag title='NXT' />
			<h1>Welcome to Next and react</h1>
		</div>
	);
}

export default Home;

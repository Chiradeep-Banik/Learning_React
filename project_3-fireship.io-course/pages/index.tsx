import { NextPage } from 'next';
import HeadTag from '../components/head';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
	return (<div>
		<HeadTag title='NXT' />
		<NavBar />
		<h1>Home</h1>
		<Loader show={true} />
	</div>
	);
}

export default Home;

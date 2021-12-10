import type { NextPage, } from 'next';
import Header from '../../components/header';
import home from '../../styles/home.module.scss';

const Home: NextPage<{}> = ({  }) => {
	return (<div className={home.container}>
		<Header />
		<h1>HOME</h1>
	    </div>
	);
};

export default Home;
/**
 * @dataFetching  in NEXT there are 3 ways to get data in the component
 * 		- getStaticProps() -- static props -- gets them during build time
 * 		- getServerSideProps() -- server side props -- gets them on every request
 * 		- getStaticPaths() -- static paths -- Generates custom paths depending on the data
 * 		- getInitialProps() -- initial props -- gets them on every request
 */


import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome Home</title>
			</Head>
			<h1>Hello World </h1>
		</div>
	)
}

export default Home;

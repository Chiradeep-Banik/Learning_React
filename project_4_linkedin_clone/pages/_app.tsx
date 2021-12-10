import '../styles/globals.scss';
import type { AppProps, } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps, }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Head>
				<title>LinkedIN clone</title>
				<link rel="icon" type="image/png" href="/linkedin.png" />
			</Head>
		</>
	);
}

export default MyApp;

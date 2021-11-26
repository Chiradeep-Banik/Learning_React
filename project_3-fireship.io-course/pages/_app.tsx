import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useState } from 'react';
import type { User } from '@firebase/auth';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
	const [user, setUser] = useState(null as User);
	const [userName, setUserName] = useState(null as string);

	return (
		<UserContext.Provider value={{ user, userName, setUser, setUserName }}>
			<NavBar />
			<Component {...pageProps} />
			<Toaster />
		</UserContext.Provider>
	);
}

export default MyApp

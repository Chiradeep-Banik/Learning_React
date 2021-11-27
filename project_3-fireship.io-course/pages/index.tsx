import { NextPage } from 'next';
import HeadTag from '../components/head';
import { firestore } from '../lib/firebase';
import { getDoc, doc, } from '@firebase/firestore/lite';
import { Dispatch, SetStateAction, useContext } from 'react';
import { UserContext } from '../lib/context';
import { User } from '@firebase/auth';

interface contextUser {
	user: User;
	userName: string;
	setUser: Dispatch<SetStateAction<User>>;
	setUserName: Dispatch<SetStateAction<string>>;
};
export interface FirestoreData {
	Id: string;
	photo: string;
	username: string;
	user: User;
}

const userupdate = async (context: contextUser) => {
	let userdocRef = doc(firestore, `users/${context.userName}`);
	let userdocSnapshot = await getDoc(userdocRef);
	if (userdocSnapshot.exists) {
		let user = userdocSnapshot.data() as FirestoreData;
		context.setUser(user.user);
		context.setUserName(user.username);
	}
}

const Home: NextPage = () => {

	const data = useContext(UserContext);
	userupdate(data);

	return (
		<div>
			<HeadTag title='NXT' />
			<h1>Welcome to Next and react</h1>
		</div>
	);
}

export default Home;

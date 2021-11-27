import { auth, firestore, provider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import type { NextPage } from 'next';
import HeadTag from '../components/head';
import { doc, setDoc } from '@firebase/firestore/lite';
import { FirestoreData } from '.';

const EnterPage: NextPage = () => {
    let { user, userName } = useContext(UserContext);
    return (<div>
        {userName ? <HeadTag title={userName} /> : <HeadTag title='Enter' />}
        <main>
            {user && userName && <SignOutButton />}
            {!user && <SignInButton />}
        </main>
    </div>);
};

function SignInButton() {

    let { setUser, setUserName } = useContext(UserContext);

    let signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        setUser(auth.currentUser);
        setUserName(auth.currentUser.displayName);
        if (auth.currentUser !== null) {
            let users = doc(firestore, `users/${auth.currentUser.displayName}`);
            const userData: FirestoreData = {
                Id: auth.currentUser.uid,
                username: auth.currentUser.displayName,
                photo: auth.currentUser.photoURL,
                user: auth.currentUser
            };
            await setDoc(users, userData);
        }
    };

    return (<button className='btn-google' onClick={signInWithGoogle}>
        <img src={'/google.png'} />
        Sign In with Google
    </button>);
}

function SignOutButton() {
    let { setUser, setUserName } = useContext(UserContext);

    function signOut() {
        auth.signOut();
        setUser(null);
        setUserName(null);
    }

    return (<button onClick={signOut}>Sign Out</button>);
}


export default EnterPage;
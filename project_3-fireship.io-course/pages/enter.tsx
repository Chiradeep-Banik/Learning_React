import { auth, provider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import type { NextPage } from 'next';
import HeadTag from '../components/head';

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
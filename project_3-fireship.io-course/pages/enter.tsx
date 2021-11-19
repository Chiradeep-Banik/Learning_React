import NavBar from '../components/NavBar';
import { auth, provider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import Link from 'next/link';

let EnterPage = () => {
    let { user, userName } = useContext(UserContext);
    return (<div>
        <NavBar />
        <main>
            {user && (<>
                {!userName && <UserNameForm />}
                {userName && <SignOutButton />}
            </>)}
            {!user && <SignInButton />}
            <SignInAnonymously />
        </main>
    </div>);
};

function SignInButton() {

    let { user, userName } = useContext(UserContext);

    let signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        user = auth.currentUser;
        console.log(user.photoURL);
    };

    return (<button className='btn-google' onClick={signInWithGoogle}>
        <img src={'/google.png'} />
        Sign In with Google
    </button>);
}

function SignOutButton() {
    let { user, userName } = useContext(UserContext);

    function signOut() {
        auth.signOut();
        user = null;
    }

    return (<button onClick={signOut}>Sign Out</button>);
}

function UserNameForm() {


    return (<button>Form</button>);
}
function SignInAnonymously() {

    return (<Link href='/'><button>Sign In Anonymously</button></Link>);
}


export default EnterPage;
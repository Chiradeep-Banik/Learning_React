import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';

export default function NavBar({ }) {
    let { user, userName } = useContext(UserContext);
    console.log(user, userName);
    useEffect(() => {
        console.log(user);
    }, [user, userName]);

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href='/'>
                        <button className='btn-logo'>NXT</button>
                    </Link>
                </li>
                {user && (
                    <>
                        <li className='push-left'>
                            <Link href='/'>
                                <SignOutButton />
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin'>
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${userName}`}>
                                <img src={user.photoURL} />
                            </Link>
                        </li>
                    </>
                )}
                {!user && (
                    <li>
                        <Link href='/enter'>
                            <button className="btn-blue">Log In</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

function SignOutButton() {
    let { user, userName } = useContext(UserContext);

    function signOut() {
        auth.signOut();
        user = null;
    }

    return (<button onClick={signOut}>Sign Out</button>);
}
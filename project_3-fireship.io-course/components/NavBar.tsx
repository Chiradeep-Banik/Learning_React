import Link from 'next/link';
import { NextPage } from 'next';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';

const NavBar: NextPage = () => {
    let { user, userName } = useContext(UserContext);

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
                            <Link href='/admin'>
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
    let { setUser, setUserName } = useContext(UserContext);

    function signOut() {
        auth.signOut();
        setUser(null);
        setUserName(null);
    }

    return (<Link href='/'><button onClick={signOut}>Sign Out</button></Link>);
}


export default NavBar;
import Link from 'next/link';


export default function NavBar({ user, userName }) {
    // const user: User = {
    //     photoUrl: ''
    // };
    // const userName: string = null;

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
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${userName}`}>
                                <img src={user?.photoUrl} />
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
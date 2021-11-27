import type { NextPage } from 'next';
import HeadTag from '../../components/head';
import { useContext } from 'react';
import { UserContext } from '../../lib/context';

const Username: NextPage = () => {
    let { userName, user } = useContext(UserContext);

    return (
        <div className='box-center'>
            <HeadTag title={userName} />
            <main>
                <img src={user.photoURL} alt={user.displayName} className='card-img-center' />
                <h2 style={{ fontStyle: 'italic', fontSize: 'smaller' }}>@{userName}</h2>
                <h1>Hello {userName}</h1>
            </main>
        </div>
    );
};

//Going to add the user posted comments
export default Username;
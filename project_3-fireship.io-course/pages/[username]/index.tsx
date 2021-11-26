import type { NextPage } from 'next';
import HeadTag from '../../components/head';
import { useContext } from 'react';
import { UserContext } from '../../lib/context';

const Username: NextPage = () => {
    let { userName } = useContext(UserContext);

    return (
        <div>
            <HeadTag title={userName} />
            <main>
                <h1>Hello {userName}</h1>
            </main>
        </div>
    );
};
export default Username;
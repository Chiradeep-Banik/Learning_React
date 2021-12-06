import type { NextPage } from 'next';
import HeadTag from '../../components/head';
import PostBox from '../../components/PostBox';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../lib/context';
import { firestore } from "../../lib/firebase";
import { getDocs, collection, query } from "@firebase/firestore/lite";

const Username: NextPage = () => {
    let { userName, user } = useContext(UserContext);

    const [posts, setPosts] = useState([]);
    useEffect(() => {

        const q = query(collection(firestore, "articles"));

        const getting = async () => {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                if (doc.id === user.uid) {
                    setPosts(val => { return [...val, doc.data()]; });
                }
            });
        };
        getting();
    }, []);

    return (
        <div className='box-center'>
            <HeadTag title={userName} />
            <main>
                <img src={user.photoURL} alt={user.displayName} className='card-img-center' />
                <h2 style={{ fontStyle: 'italic', fontSize: 'smaller' }}>@{userName}</h2>
                <h1>Hello {userName}</h1>
            </main>
            {posts.map((post, index) => <PostBox key={index} msg={post} />)}
        </div>
    );
};

//Going to add the user posted comments
export default Username;
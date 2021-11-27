import { NextPage } from "next";
import { useState, useRef, useContext } from "react";
import HeadTag from "../../components/head";
import { firestore } from "../../lib/firebase";
import { setDoc, doc, } from "@firebase/firestore/lite";
import { UserContext } from "../../lib/context";

const AdminPostsPage: NextPage = () => {

    const { user } = useContext(UserContext);
    const [article, setArticle] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const updateSlug = () => {
        if (inputRef.current) {
            setArticle(inputRef.current.value);
        }
    }
    const createArticle = async () => {

        if (article.length > 0) {
            let articles = doc(firestore, `articles/${user.uid}`);
            await setDoc(articles, {
                article
            });
        }

        inputRef.current.value = '';
        setArticle('');
    }
    return (
        <main>
            <HeadTag title="Write Posts" />
            <h1>Manage your Posts</h1>
            {/*Must add the live post here*/}
            <input type="text" placeholder="My article" onChange={updateSlug} ref={inputRef} />
            <div>
                <p style={{ wordWrap: 'break-word' }}><strong>Slug:</strong>{article}</p>
            </div>
            <button onClick={createArticle} className='btn-green'>Update Slug</button>
        </main>
    );
};

export default AdminPostsPage;
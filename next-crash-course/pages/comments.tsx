import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';
import CommentStyle from '../styles/Comments.module.css';

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comments: NextPage<{ comments: IComment[] }> = ({ comments }) => {

    return (
        <div>
            <Head>
                <title>Comments</title>
            </Head>
            <div className={CommentStyle.containter}>
                {comments.map((comment) => {
                    return (<Card comment={comment} />);
                })}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=27');
    let comments: IComment[] = await data.json();

    return {
        props: {
            comments: comments
        }
    }
};

export default Comments;

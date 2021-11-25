import type { NextPage, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { IComment } from '../../comments';

const Com: NextPage<{ comment: IComment }> = ({ comment }) => {
    return (<>
        <Head>
            <title>Comment {comment.id}</title>
        </Head>
        <h1 style={{ textAlign: 'center' }}>Hello COMMENT number {comment.id} </h1>
        <h3 style={{ textAlign: 'center' }}>{comment.body}</h3>
        <h1 style={{ textAlign: 'center' }}><Link href='/comments' >Go Back</Link></h1>
    </>);
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
    let id = context.params?.id as string | '';
    let data = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    let comment = await data.json();

    return {
        props: {
            comment: comment
        }
    }
};

export const getStaticPaths = async () => {

    let data = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    let comments: IComment[] = await data.json();

    let ids = comments.map(comment => comment.id);
    let paths = ids.map(id => {
        return { params: { id: id.toString() } };
    });
    return {
        paths: paths,
        fallback: false
    }
}

export default Com;
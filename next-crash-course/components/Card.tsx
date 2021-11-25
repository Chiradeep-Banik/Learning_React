import type { NextPage } from 'next';
import type { IComment } from '../pages/comments';
import Link from 'next/link';
import CardStyle from '../styles/Comments.module.css';

const Card: NextPage<{ comment: IComment }> = ({ comment }) => {

    return (
        <Link href={`/comment/${comment.id}`}>
            <div className={CardStyle.card}>
                <h1>{comment.name}</h1>
                <h4>{comment.email}</h4>
                <h3>{comment.body}</h3>
            </div>
        </Link>
    );
};

export default Card;
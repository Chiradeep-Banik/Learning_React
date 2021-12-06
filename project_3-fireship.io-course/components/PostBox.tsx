import type { NextPage } from 'next';

const PostBox: NextPage<{ msg: String }> = ({ msg }) => {
    return (
        <div className='card'>
            <h1>{msg}</h1>
        </div>
    );
};

export default PostBox;
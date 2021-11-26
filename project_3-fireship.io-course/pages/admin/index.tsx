import { NextPage } from "next";
import HeadTag from "../../components/head";


const AdminPostsPage: NextPage = () => {

    return (
        <main>
            <HeadTag title="Write Posts" />
            <h1>Admin</h1>
        </main>
    );
};

export default AdminPostsPage;
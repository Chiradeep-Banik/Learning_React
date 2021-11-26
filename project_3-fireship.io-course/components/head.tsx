import { NextPage } from "next";
import Head from "next/head";

const HeadTag: NextPage<{ title: string }> = ({ title }) => {
    return (
        <Head>
            <title>{title ? title : 'NXT'}</title>
        </Head>
    )
};

export default HeadTag;
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function () {
    return (
        <Layout>
            <Head>
                <title>My first post</title>
            </Head>

            <h1>Hello this is my first post as a developer</h1>
            <h2>
                <Link href="/"><a>Back To home</a></Link>
            </h2>
        </Layout>
    )
}

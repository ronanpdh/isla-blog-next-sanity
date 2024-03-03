import { useRouter } from "next/router";
import { urlForImage } from "../lib/sanity";
import Layout from "./layout";
import Container from "./container";
import Header from "./header";
import Head from "next/head";
import PostHeader from "./post-header";
import PostBody from "./post-body";


export default function Page({ data = {}, preview = false }) {
    const router = useRouter();
    const page = data;
    const slug = page?.slug;

    if (!router.isFallback && !slug) {
        return <ErrorPage statusCode={404} />;
      }

    return (

        <Layout preview={preview}>
            <Container>
                <Header title={"Read"} />
                <Head>
                    <title>
                        {`${page.title} | isla`}
                    </title>
                    {page.coverImage?.asset?._ref && (
                        <meta
                            key="ogImage"
                            property="og:image"
                            content={urlForImage(page.coverImage)
                                .width(1200)
                                .height(627)
                                .fit("crop")
                                .url()}
                        />
                    )}
                </Head>
                <PostHeader
                    title={page.title}
                    coverImage={page.coverImage}
                />
                <PostBody content={page.content} />
            </Container>
        </Layout>

    )
}
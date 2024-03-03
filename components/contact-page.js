import { useRouter } from "next/router";
import { urlForImage } from "../lib/sanity";
import Layout from "./layout";
import Container from "./container";
import Header from "./header";
import Head from "next/head";
import PostBody from "./post-body";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import SectionSeparator from "./section-separator";
import ContactForm from './contact-form'


export default function ContactPage({ data = {}, preview = false }) {
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
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-24 text-center md:text-left">
                    {page.title}
                </h1>
                <PostBody content={page.content} />
                <ContactForm />
                <SectionSeparator />
                <CoverImage source={page.coverImage} />
            </Container>
        </Layout>

    )
}
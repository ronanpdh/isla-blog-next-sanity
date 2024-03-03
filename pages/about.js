import { pageBySlugQuery } from "../lib/queries";
import { getClient, sanityClient } from "../lib/sanity.server";

import Page from "../components/page";


export default function About({ allPages, preview = false }) {
    const page = allPages;
    const slug = page?.slug; 


    return <Page data={page}/>
}

export async function getStaticProps({ preview = false }) {
    const allPages = await sanityClient.fetch(pageBySlugQuery, {
        slug: "about"
    });

    return {
        props: { allPages, preview },
        revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    };
}


